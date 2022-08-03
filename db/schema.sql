/*Patient database*/
DROP DATABASE IF EXISTS patient_db;
CREATE DATABASE patient_db;

-- USE patient_db;

-- /*Patient demographics table*/
-- CREATE TABLE patients (
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     patient_name VARCHAR(100) NOT NULL,
--     patient_phone VARCHAR(10) NOT NULL,
--     patient_DOB VARCHAR(10) NOT NULL,
--     patient_insurnace VARCHAR(100) NOT NULL,
--     next_appointment VARCHAR(10) NOT NULL,
--     /*patient_email VARCHAR(100) NOT NULL,*/
--     patient_notes TEXT NOT NULL,
-- );

-- /*Doctor database*/
-- DROP DATABASE IF EXISTS doctor_db;
-- CREATE DATABASE doctor_db;

-- USE doctor_db;

-- /*Doctor table*/
-- CREATE TABLE doctors (
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     doctor_name VARCHAR(100) NOT NULL,
--     doctor_phone VARCHAR(10) NOT NULL,
--     doctor_email VARCHAR(100) NOT NULL,
--     /*doctor_password VARCHART(100) NOT NULL,*/
-- );