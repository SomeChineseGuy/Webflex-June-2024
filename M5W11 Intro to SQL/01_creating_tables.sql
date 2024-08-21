DROP TABLE IF EXISTS jokes; 
DROP TABLE IF EXISTS authors;

CREATE TABLE authors(
    id serial PRIMARY KEY, -- PRIMARY KEY
    name TEXT NOT NULL,
    funny BOOLEAN NOT NULL,
    description TEXT NOT NULL
);

-- if you say "int" that means when you add to that table you will provide a value for it
-- if you say serial it means the value can be empty and it looks at the previous number and adds one to it

CREATE TABLE jokes(
   id SERIAL PRIMARY KEY, -- PRIMARY KEY
   question TEXT NOT NULL,
   answer TEXT,
   rating FLOAT NOT NULL,
   author_id INT REFERENCES authors(id) ON DELETE CASCADE -- FOREIGN KEY
);

