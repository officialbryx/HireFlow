Architecture Overview
1. React (Frontend)
2. Flask (Backend)
3. MySQL (Database)

Step by step process to make sure that this website is working when setting it up
Install Node.js and npm

Frontend dependencies:
Install axios for API calls
(Note: Install inside react app, froontend directory)
npm install axios

Install Vite for frontend framework
npm create vite@latest then follow the prompts
Official vite guide:https://vite.dev/guide/

Install tailwindcss for styling
Tailwind install guide https://tailwindcss.com/docs/installation/using-vite

For MacOS

Install Homebrew

Install Node.js (for React)
brew install node

Verify the installation
node -v
npm -v

Install Python 
brew install python

Verify Python
python3 --version

Install MySQL
brew install mysql
brew services start mysql
mysql_secure_installation
mysql -u root -p

Set up the Backend (Flask + MySQL)
Note: For macOS, python3. For windows, python
Create a virtual environment
python3 -m venv venv

Activate the virtual environemnt
source /path/to/your/ven/bin/activate (For MacOS)
/path/to/your/venv/Scripts/activate (For Windows)

Install Flask and Database Libraries
Install Flask and database-related packages
without requirements.txt:
pip install flask -flask-cors flask-sqlalchemy mysql-connector-python
with requirements.txt:
pip install -r requirements.txt

Configure MySQL database in server.py (Change the values depending on the name of username, password, and name of the database 'hireflow'

Run React App
npm start
(Note: Run the react app in the frontend directory)

Run Flask and React Together
python3 server.py
and it will showcase default http://127.0.0.1:5000

If there are errors when installing react:
Install the missing web-vitals package:
npm install web-vitals
