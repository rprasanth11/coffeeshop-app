-- Create database
CREATE DATABASE coffeeshop;

-- After connecting to coffeeshop database:
\c coffeeshop;

-- Products table
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    price NUMERIC(8,2) NOT NULL,
    image_filename TEXT
);

-- Seed rows
INSERT INTO products (name, description, price, image_filename) VALUES
('Cappuccino', 'Strong espresso with steamed milk foam', 160.00, 'cappuccino.jpg'),
('Latte', 'Mild espresso with lots of steamed milk', 150.00, 'latte.jpg'),
('Espresso', 'Shot of pure espresso', 120.00, 'espresso.jpg');
