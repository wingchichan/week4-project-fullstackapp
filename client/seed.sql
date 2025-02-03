CREATE TABLE IF NOT EXISTS reviews (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name TEXT,
    content TEXT
  );
  
INSERT INTO reviews (name, content) VALUES
('SatBa', 'Nice location,great friendly staff'),
('AleUK', ' The food and coffee is still amazing'),
('GemLan', 'Absolutely love their egg and pancake dishes'),
('Timsch', 'The menu had plenty to choose from, food was top-notch and delicious. Service was quick, considering how busy it was.'),
('Tyrol', 'Wasnt a big fan of the American pancakes'),
('JoRo', 'Love it here! The best avocado on toast I’ve ever came across.'),
('Ahmum', 'Pancakes were ok. Definitely not worth the hype.'),
('JasRee', 'Great breakfast. Service was not an issue and all staff we had contact with were great.'),
('NeePrem', 'It gets very busy so worth going early or seeing if able to book in advance, would definitely recommend the pancakes!'),
('IngePer', 'Great value for money, fast service, friendly atmosphere, outstanding food.')