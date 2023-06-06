CREATE DATABASE rentify;

CREATE TABLE customers (
  customer_id SERIAL PRIMARY KEY,
  customer_name VARCHAR(255) NOT NULL
);

CREATE TABLE categories (
  category_id SERIAL PRIMARY KEY,
  category_name VARCHAR(255) NOT NULL,
  category_type VARCHAR(255) NOT NULL,
  customer_id INT REFERENCES customers (customer_id)
);

CREATE TABLE products (
  product_id SERIAL PRIMARY KEY,
  category_id INT REFERENCES categories (category_id),
  product_name VARCHAR(255) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  description TEXT,
  brand VARCHAR(255),
  photo_url VARCHAR(255),
  active BOOLEAN NOT NULL
);

CREATE TABLE shopping_cart (
  shoppingcart_id SERIAL PRIMARY KEY,
  product_id INT REFERENCES products (product_id),
  product_qty INT NOT NULL,
  amount_per_item DECIMAL(10, 2) NOT NULL,
  order_id INT REFERENCES rent_orders (order_id)
);

CREATE TABLE rent_orders (
  order_id SERIAL PRIMARY KEY,
  customer_id INT REFERENCES customers (customer_id),
  order_date DATE NOT NULL
);

CREATE TABLE payments (
  payment_id SERIAL PRIMARY KEY,
  order_id INT REFERENCES rent_orders (order_id),
  product_id INT REFERENCES products (product_id),
  total_amount DECIMAL(10, 2) NOT NULL,
  payment_date DATE NOT NULL
);

