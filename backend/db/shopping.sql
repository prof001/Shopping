
CREATE TABLE customers
(
  custid serial PRIMARY KEY,
  custname VARCHAR (50) NOT NULL,
  email VARCHAR (80) UNIQUE NOT NULL,
  userpwd VARCHAR (50) NOT NULL,
  isAdmin BOOLEAN NOT NULL
);

INSERT INTO customers
  (custid, custname, email, userpwd, isAdmin)
VALUES
  (1, 'Matthew Henry', 'matthewhenry@gmail.com', '111111', true),
  (2, 'Bola Daniels', 'boladaniel@gmail.com', '222222', false);

-- CREATE ROLE node_user WITH SUPERUSER PASSWORD 'node_password'
-- SELECT * FROM pg_user
-- dropdb -U node_user {dbName}
-- createdb -U node_user {dbName}
-- psql -U node_user {dbName} < ./shopping.sql
-- psql -U node_user {dbName}