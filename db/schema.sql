/*Patient database*/
DROP DATABASE IF EXISTS patient_db;
CREATE DATABASE patient_db;

USE patient_db;

/*Patient demographics table*/
CREATE TABLE patients (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    patient_name VARCHAR(100) NOT NULL,
    patient_phone VARCHAR(10) NOT NULL,
    patient_DOB VARCHAR(10) NOT NULL,
    

)