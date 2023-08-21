CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY,
    username TEXT,
    email TEXT,
    password_hash TEXT,
    phone_number TEXT,
    rights_level TEXT, -- Add the new column for rights level
    created_at TIMESTAMP,
    last_login TIMESTAMP
);

CREATE TABLE Dishes (
    dish_id SERIAL PRIMARY KEY,
    week_number INTEGER,
    day_of_week TEXT,
    dish_name TEXT,
    description TEXT,
    price NUMERIC,
    image_url TEXT
);

CREATE TABLE UserFavorites (
    user_id INTEGER REFERENCES Users(user_id),
    dish_id INTEGER REFERENCES Dishes(dish_id),
    PRIMARY KEY (user_id, dish_id)
);

CREATE TABLE Orders (
    order_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES Users(user_id),
    order_date TIMESTAMP,
    total_amount NUMERIC,
    pickup_time TIMESTAMP,
    status TEXT
);

CREATE TABLE OrderItems (
    order_item_id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES Orders(order_id),
    dish_id INTEGER REFERENCES Dishes(dish_id),
    quantity INTEGER
);

CREATE TABLE Reviews (
    review_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES Users(user_id),
    rating INTEGER,
    comment TEXT,
    review_date TIMESTAMP
);

CREATE TABLE ContactRequests (
    request_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES Users(user_id),
    request_type TEXT,
    message TEXT,
    request_date TIMESTAMP
);
