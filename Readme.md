
Database

1. 

sudo apt update
sudo apt install mysql-server
sudo mysql_secure_installation
sudo mysql -u root -p

CREATE DATABASE employee_management;
CREATE USER 'appuser'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON employee_management.* TO 'appuser'@'localhost';
FLUSH PRIVILEGES;
EXIT;

ALTER USER 'appuser'@'%' IDENTIFIED WITH mysql_native_password BY 'password';
FLUSH PRIVILEGES;
EXIT;



sudo vi /etc/mysql/mysql.conf.d/mysqld.cnf
change line to bind-address = 0.0.0.0

add line under the [mysqld] section: 

default_authentication_plugin=mysql_native_password 


sudo systemctl restart mysql



2. Node js application 

clone git hub repo
#mkdir employee-management-backend
#cd employee-management-backend

#npm init -y
npm install express mysql2 body-parser cors
npm install express mysql2 body-parser cors

create file index.js, already avilable in folder


Change the host user , set mysql server public IP

port 5000

run : node index.js


3. Front end 


sudo apt update
sudo apt install -y nodejs npm
npx create-react-app employee-management-frontend
cd employee-management-frontend

npm install axios


in src/App.js change backend server as per nodejsapp backed server public IP
app.css 

npm install

npm start 

port 3000


npm run build





https://github.com/ojaswaghe/employee-management-batch.git
https://github.com/ojaswaghe/employee-management-web.git
