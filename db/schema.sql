CREATE DATABASE bubble_tea_app;
\c bubble_tea_app

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  username TEXT,
  email TEXT,
  password_digest TEXT
);

CREATE TABLE bubble_tea_data(
  id SERIAL PRIMARY KEY,
  flavour TEXT,
  store TEXT,
  kilojoules INTEGER
);

CREATE TABLE mixins_data(
  id SERIAL PRIMARY KEY,
  mixin TEXT,
  kilojoules INTEGER
);

CREATE TABLE users_drinks(
  id SERIAL PRIMARY KEY,
  userId INTEGER,
  FOREIGN KEY(userId) REFERENCES users(id) ON DELETE CASCADE,
  drink TEXT,
  mixins_1 TEXT,
  mixins_2 TEXT,
  sugar_level TEXT,
  ice_level TEXT,
  counter INTEGER
);