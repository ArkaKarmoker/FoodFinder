# FoodFinder
Dynamic Nearby Restaurant Marketplace

# This is an ongoing project of CSE299 - Junior Design Course - TnS1 - Summer 2024 - North South University

![image](https://github.com/user-attachments/assets/c453de83-5505-45ad-b0f4-346e34fc18e3)

---

### **How to Run the FoodFinder Project**

1. **Download and Extract the Project Files:**
   - Download the `FoodFinder.zip` file from the "Entire Code for the Project" section in Canvas.
   - Extract the contents of the zip file to a folder.

2. **Set Up the Virtual Environment:**
   - Navigate to the project folder where you extracted the files.
   - Open Git Bash or Command Prompt inside the folder.
   - Activate the virtual environment:
     - **For Git Bash:**  
       Run the command:  
       ```bash
       source env/Scripts/activate
       ```
     - **For Windows Command Prompt:**  
       Run the command:  
       ```bash
       env\Scripts\activate
       ```

3. **Install PostgreSQL and Set Up the Database:**
   - Install **PostgreSQL**, **pgAdmin**, and the **PostGIS extension** on your system.
   - Open **pgAdmin** and create a new database named `FoodFinder`.

4. **Import the Database Backup:**
   - Inside the project folder, navigate to the `db` folder.
   - Import the database backup file into the newly created `FoodFinder` database in **pgAdmin**.

5. **Apply Migrations:**
   - After activating the virtual environment, run the following commands in Git Bash or Command Prompt:
     ```bash
     python manage.py makemigrations
     python manage.py migrate
     ```

6. **Run the Development Server:**
   - Start the Django development server with the following command:
     ```bash
     python manage.py runserver
     ```

7. **Access the Project:**
   - Open your browser and navigate to `http://127.0.0.1:8000` to see the project in action.
   - To access the admin panel, go to `http://127.0.0.1:8000/admin`.

8. **Login Credentials:**
   - **Admin User:**
     - Username: `admin@foodfinder.com`
     - Password: `admin`
   - **Restaurant User (Example: KFC):**
     - Username: `kfc@example.com`
     - Password: `1234`
   - **Customer User:**
     - Username: `karmokerarka@gmail.com`
     - Password: `1234`

---

If you need assistance setting up the project, please feel free to contact me at:  
      **Email:** `arka.karmoker@northsouth.edu`
