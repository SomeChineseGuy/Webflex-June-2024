-- Basic Selectors

-- SELECT * FROM jokes;

SELECT questions FROM jokes;
SELECT questions, answers FROM jokes;

-- Filtering

SELECT * FROM jokes WHERE rating > 4;
SELECT * FROM jokes WHERE rating > 4 and author_id >= 4;

-- Ordering
SELECT * FROM jokes ORDER BY rating DESC;
SELECT * FROM jokes ORDER BY rating ASC;

--  Filter By Text
SELECT * FROM jokes WHERE question = 'What';
SELECT * FROM jokes WHERE question LIKE 'What%';
-- % means anything before or after the selected text
SELECT * FROM jokes WHERE question LIKE '% what %';

-- str.toLowerCase()
SELECT * FROM jokes WHERE LOWER(question) LIKE '%what%';

-- Joining Tables - When joining tables there needs to be something that connects the two tables

SELECT * FROM jokes JOIN authors ON author_id = authors.id;
-- Left Join will join all of the MATCHING items and all of the items from the "left" table
-- Right Join will join all of the Matching items and all of the "right" table
-- Inner Join will join all and return only the matching items
SELECT * FROM authors JOIN jokes on authors.id = author_id;

SELECT jokes.question as joke_question, 
jokes.answer as joke_answer, 
authors.name as author_name 
FROM jokes JOIN authors ON author_id = authors.id;

SELECT jokes.question as joke_question, 
jokes.answer as joke_answer, 
authors.name as author_name 
FROM jokes JOIN authors ON author_id = authors.id
WHERE jokes.question LIKE 'What%' ORDER BY question ASC;

-- Aggregate functions
-- Average avg
-- Count count
SELECT count(author_id) from jokes;
SELECT avg(rating) as average_rating_for_all_jokes from jokes;
SELECT sum(rating) from jokes;
SELECT min(rating) from jokes;
SELECT max(rating) from jokes;

SELECT author_id,
AVG(rating) as average_joke_rating
FROM jokes
WHERE author_id IS NOT NULL
GROUP BY author_id
HAVING avg(rating) > 3
ORDER BY author_id;