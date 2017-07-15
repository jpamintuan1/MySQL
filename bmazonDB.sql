-- Drops the bmazon_db if it exists currently --
DROP DATABASE IF EXISTS bmazon_db;
-- Creates the "bmazon_db" database --
CREATE DATABASE bmazon_db;
-- Makes it so all of the following code will affect bmazon_db --
USE bmazon_db;

-- Creates the table "products" within bmazon_db --
CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  item_id INT NULL,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (item_id, product_name, department_name, price, quantity)
VALUES (1000,"Java","Mobile", 2.50, 0);


INSERT INTO products (item_id, product_name, department_name, price, quantity)
VALUES (1001,"Python","AI", 10.50, 0);

INSERT INTO products (item_id, product_name, department_name, price, quantity)
VALUES (1002,"Javascript","Web", 42.50, 100);

INSERT INTO products (item_id, product_name, department_name, price, quantity)
VALUES (1003,"CSS","Web", 222.50, 10);

INSERT INTO products (item_id, product_name, department_name, price, quantity)
VALUES (1004,"Ruby","AI", 12.50, 0);

INSERT INTO products (item_id, product_name, department_name, price, quantity)
VALUES (1005,"Girl","AI", 2.50, 0);

