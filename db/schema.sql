-- Drop the database if it exists
DROP DATABASE IF EXISTS cosmic_db;

-- Create the database
CREATE DATABASE cosmic_db;

-- Connect to the created database
\c cosmic_db;

-- Create the 'blogData' table
CREATE TABLE blogData (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
    script TEXT NOT NULL,
    image VARCHAR(255),
    comments TEXT
);

-- Create the 'reactions' table
CREATE TABLE reactions (
    id SERIAL PRIMARY KEY,
    blog_id INT REFERENCES blogData(id), -- Reference to the blogData table
    reaction_type VARCHAR(20) NOT NULL -- Type of reaction 
);

-- Create the 'userData' table
CREATE TABLE userData (
    id SERIAL PRIMARY KEY,
    userName VARCHAR(30) NOT NULL, -- Cannot be null 
    password VARCHAR(30) NOT NULL -- Cannot be null
);