DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS rent_orders CASCADE;
DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS orders CASCADE;

-- DROP TABLE IF EXISTS payments CASCADE;
-- DROP TABLE IF EXISTS shopping_cart CASCADE;
-- DROP TABLE IF EXISTS favourite_products CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  product_id INT REFERENCES products(id) ON DELETE CASCADE,
  total SMALLINT NOT NULL,
  date DATE NOT NULL
);

CREATE TABLE rent_orders (
  id SERIAL PRIMARY KEY,
  product_id INT REFERENCES products(id) ON DELETE CASCADE,
  order_id INT REFERENCES orders(id) ON DELETE CASCADE
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
  name VARCHAR(255) NOT NULL,
  price SMALLINT NOT NULL,
  description TEXT NOT NULL,
  photo_url VARCHAR(255) NOT NULL,
  active BOOLEAN NOT NULL DEFAULT true
);

-- CREATE TABLE shopping_cart (
--   id SERIAL PRIMARY KEY,
--   product_id INT REFERENCES products(id) ON DELETE CASCADE,
--   quantity INT NOT NULL,
--   amount_per_item SMALLINT NOT NULL,
--   order_id INT REFERENCES rent_orders(id) ON DELETE CASCADE
-- );

-- CREATE TABLE payments (
--   id SERIAL PRIMARY KEY,
--   order_id INT REFERENCES rent_orders(id) ON DELETE CASCADE,
--   product_id INT REFERENCES products(id) ON DELETE CASCADE,
--   total SMALLINT NOT NULL,
--   date DATE NOT NULL
-- );


-- CREATE TABLE favourite_products (
--   id SERIAL PRIMARY KEY NOT NULL,
--   user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
--   product_id INTEGER REFERENCES products(id) ON DELETE CASCADE
-- );