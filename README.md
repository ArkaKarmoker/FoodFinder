# FoodFinder
Dynamic Nearby Restaurant Marketplace
<br>
This is a ongoing project of CSE299 course.

To run this project locally, follow below steps in gitbash:
1. Clone the repository `git clone https://github.com/ArkaKarmoker/FoodFinder`
2. Navigrate to the project directory `cd FoodFinder`
3. Open the project from the code editor `code .` or `atom .`
4. Create virtual environment `python -m venv env`
5. Activate the virtual environment `source env/Scripts/activate`
6. Install required packages to run the project `pip install -r requirements.txt`
7. Rename .env-sample to .env
8. Fill up the environment variables:
    _Generate your own Secret key using this tool [https://djecrety.ir/](https://djecrety.ir/), copy and paste the secret key in the SECRET_KEY field._

    _Your configuration should look something like this:_
    ```sh
    SECRET_KEY=47d)n05#ei0rg4#)*@fuhc%$5+0n(t%jgxg$)!1pkegsi*l4c%
    DEBUG=True
    EMAIL_HOST=smtp.gmail.com
    EMAIL_PORT=587
    EMAIL_HOST_USER=youremailaddress@gmail.com
    EMAIL_HOST_PASSWORD=yourStrongPassword
    EMAIL_USE_TLS=True
    ```
    _Note: If you are using gmail account, make sure to [use app password](https://support.google.com/accounts/answer/185833)_
![image](https://github.com/user-attachments/assets/9676d4a3-4d01-41a0-b549-bb151141719c)
