CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  admin BOOLEAN NOT NULL DEFAULT FALSE,
  password TEXT NOT NULL
);

insert into users
  (name, email, admin, password)
values
  ('yevhen', 'yevhen@ukr.net', true, 'password');
