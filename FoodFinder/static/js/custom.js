let autocompleteTimeout;

// Initialize autocomplete functionality
function initAutoComplete() {
    const inputField = document.getElementById('id_address');

    // Listen for input changes on the address field
    inputField.addEventListener('input', function() {
        const query = this.value;

        // Clear previous timeout if any
        clearTimeout(autocompleteTimeout);

        // Set a timeout to delay the API call for better performance
        autocompleteTimeout = setTimeout(() => {
            if (query.length > 2) { // Trigger the request only after typing 3 characters
                fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&addressdetails=1&countrycodes=BD`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(data => {
                        displaySuggestions(data);
                    })
                    .catch(error => {
                        console.error('Error:', error);
                        clearSuggestions(); // Clear suggestions on error
                    });
            } else {
                clearSuggestions(); // Clear suggestions if input is less than 3 characters
            }
        }, 300); // Adjust delay as needed
    });

    // Clear suggestions when the input field is focused again
    inputField.addEventListener('focus', clearSuggestions);
}

// Function to display suggestions
function displaySuggestions(data) {
    const suggestionsBox = document.getElementById('suggestions');
    suggestionsBox.innerHTML = ''; // Clear previous suggestions

    // Check if data contains valid suggestions
    if (data && data.length > 0) {
        data.forEach(place => {
            const suggestionItem = document.createElement('div');
            suggestionItem.innerText = place.display_name;
            suggestionItem.onclick = () => selectPlace(place);
            suggestionsBox.appendChild(suggestionItem);
        });
        suggestionsBox.style.display = 'block'; // Show suggestions
    } else {
        clearSuggestions(); // No suggestions found
    }
}

// Function to select a place
function selectPlace(place) {
    document.getElementById('id_address').value = place.display_name;

    const latitude = place.lat;
    const longitude = place.lon;

    // Set latitude and longitude values
    document.getElementById('id_latitude').value = latitude;
    document.getElementById('id_longitude').value = longitude;

    // Update other address components
    updateAddressComponents(place);
    clearSuggestions(); // Clear suggestions after selection
}

// Function to update address components
function updateAddressComponents(place) {
    if (place.address) {
        document.getElementById('id_country').value = place.address.country || '';
        document.getElementById('id_state').value = place.address.state || '';
        document.getElementById('id_city').value = place.address.city || place.address.town || place.address.village || '';
        document.getElementById('id_pin_code').value = place.address.postcode || '';
    }
}

// Function to clear suggestions
function clearSuggestions() {
    const suggestionsBox = document.getElementById('suggestions');
    suggestionsBox.innerHTML = ''; // Clear suggestions
    suggestionsBox.style.display = 'none'; // Hide suggestions box
}

// Call the initAutoComplete function when the window loads
window.onload = initAutoComplete;
