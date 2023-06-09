DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS rent_orders CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS orders CASCADE;


CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL
);


CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  type VARCHAR(255) NOT NULL,
  user_id INT REFERENCES users(id) ON DELETE CASCADE
);


CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  category_id INT REFERENCES categories(id) ON DELETE CASCADE,
  user_id INT REFERENCES users(id) ON DELETE CASCADE
  name VARCHAR(255) NOT NULL,
  price SMALLINT NOT NULL,
  description TEXT NOT NULL,
  photo_url VARCHAR(255) NOT NULL,
  active BOOLEAN NOT NULL DEFAULT true
);


CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  product_id INT REFERENCES products(id) ON DELETE CASCADE,
  total DECIMAL(10,2) NOT NULL,
  date DATE NOT NULL
);

CREATE TABLE rent_orders (
  id SERIAL PRIMARY KEY,
  product_id INT REFERENCES products(id) ON DELETE CASCADE,
  order_id INT REFERENCES orders(id) ON DELETE CASCADE
  
  );

