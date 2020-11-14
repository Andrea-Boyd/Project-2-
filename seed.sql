USE universities; 

INSERT INTO cities (id, name, createdAt, updatedAt) VALUES (1, "Albuquerque", Now(), Now()),(2, "Anchorage", Now(), Now()),
(3, "Asheville", Now(), Now()),(4, "Atlanta", Now(), Now()),(5, "Austin", Now(), Now()),
(6, "Baltimore", Now(), Now()),(7, "Birmingham", Now(), Now()),(8, "Boston", Now(), Now()),
(9, "Boulder", Now(), Now()),(10, "Buffalo", Now(), Now()), (11, "Nashville", Now(), Now());

INSERT INTO univs (name, createdAt, updatedAt, CityId) VALUES ("The University of New Mexico", Now(), Now(), 1),("Carrington College", Now(), Now(), 1),
("Southwestern Indian Polytechnic Institute", Now(), Now(), 1),("University of Alaska Anchorage", Now(), Now(), 2),("Alaska Pacific University", Now(), Now(), 2),
("University of North Carolina", Now(), Now(), 3),("Warren Wilson College", Now(), Now(), 3),("Montreat College", Now(), Now(), 3),
("Georgia State University", Now(), Now(), 4),("Georgia Institute of Technology", Now(), Now(), 4),("Emory University", Now(), Now(), 4),
("The University of Texas", Now(), Now(), 5),("St. Edwards University", Now(), Now(), 5),("Concordia University Texas", Now(), Now(), 5),
("Johns Hopkins University", Now(), Now(), 6),("Loyola University Maryland", Now(), Now(), 6),("Notre Dame of Maryland University", Now(), Now(), 6),
("University of Alabama", Now(), Now(), 7),("Samford University", Now(), Now(), 7),("Birmingham-Southern College", Now(), Now(), 7),
("Harvard University", Now(), Now(), 8),("Boston College", Now(), Now(), 8),("Northeastern University", Now(), Now(), 8),
("University of Colorado", Now(), Now(), 9),("Naropa University", Now(), Now(), 9),("University of Buffalo", Now(), Now(), 10),
("Dyouville College", Now(), Now(), 10),("Canisius College", Now(), Now(), 10),("Vanderbilt University", Now(), Now(), 11),
("Belmont University", Now(), Now(), 11),("Fisk University", Now(), Now(), 11),("Tennessee State University", Now(), Now(), 11);