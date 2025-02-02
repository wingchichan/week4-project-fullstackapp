CREATE TABLE IF NOT EXISTS reviews (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name TEXT,
    content TEXT
  );
  
  INSERT INTO reviews (name, content) VALUES
  ('SatBa', 'Nice location,great friendly staff'),
  ('AleUK', ' The food and coffee is still amazing'),
  ('GemLan', 'Absolutely love their egg and pancake dishes'),
  ('Timsch', 'The menu had plenty to choose from, food was top-notch and delicious. Service was quick, considering how busy it was.')