# WikiDB - REST API 📚


[![GitHub stars](https://img.shields.io/github/stars/shreyamalogi/wikiDB.svg?style=social)](https://github.com/shreyamalogi/wikiDB/stargazers)

### Project Details: 💻🌐📅✍️

- **Functionality:** Provides a simple REST API for managing articles in a wiki-like database.
- **Tech Stack:** ``Nodejs`` ``Expressjs`` ``Ejs`` ``Postman``  ``robo3t`` ``mongoose`` ``mongodb``
- **Author:** [@shreyamalogi](https://github.com/shreyamalogi/)
- **Year of Project:** 2022

---


# Introduction

A simple REST API built from scratch by **Shreya Malogi** with Express.js, MongoDB, and Mongoose for handling articles in a wiki-like database.

##  Challenges and Solutions 🚀💻

### 1. EJS Templating
- **Challenge:** Implementing dynamic content rendering in HTML templates.
- **Solution:** Integrated EJS (Embedded JavaScript) as the templating engine, allowing server-side rendering and dynamic content display. 🌐🔍

### 2. RESTful Routing
- **Challenge:** Creating a robust routing system for handling CRUD operations.
- **Solution:** Implemented RESTful routes using Express.js, providing a clean and organized structure for handling different types of requests. 🚀🌐

### 3. Postman and Robo3T Integration
- **Challenge:** Testing API endpoints and interacting with the database during development.
- **Solution:** Leveraged Postman for API testing, ensuring the correct functionality of routes. Utilized Robo3T for database visualization and management, streamlining the development and debugging process. 🧪🛠️


### How to run?

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project-directory>
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up MongoDB:

   - Ensure that MongoDB is running on your local machine.
   - Update the connection string in `mongoose.connect` to match your MongoDB configuration.

5. Run the application:

   ```bash
   node app.js
   ```

6. Open your web browser and visit [http://localhost:3000](http://localhost:3000) to interact with the API.

### API Endpoints

#### Articles

#### GET /articles

- Retrieves all articles in the database.

#### POST /articles

- Creates a new article.
- Requires `title` and `content` in the request body.

#### DELETE /articles

- Deletes all articles in the database.

#### Specific Article

#### GET /articles/:articleTitle

- Retrieves a specific article by title.

#### PATCH /articles/:articleTitle

- Updates the content of a specific article.
- Requires `newContent` in the request body.

#### PUT /articles/:articleTitle

- Updates the content of a specific article (overwrite).
- Requires `newContent` in the request body.

#### DELETE /articles/:articleTitle

- Deletes a specific article by title.


###  EASY Explanation:

Think of this application as a magical toy box, and it has special routes or paths to perform these actions:

- **Create (POST):** You tell the box, "Hey, I have a new toy!" and the box adds it.
- **Read (GET):** You ask the box, "What toys do I have?" and the box shows you all of them.
- **Update (PATCH and PUT):** You say, "I want to change something about this toy," and the box does it.
- **Delete (DELETE):** You say, "I don't want this toy anymore," and the box removes it.

So, the application helps you manage your magical toy box by creating, reading, updating, and deleting toys using these special paths or routes. It's like having a wizard friend who listens to what you want to do with your toys and makes it happen! 🧙‍♂️📦🪄

### Project Structure

- `public`: Contains static files.
- `views`: EJS templates for rendering pages.
- `models`: Defines MongoDB schema and model for articles.
- `app.js`: Main application file.

### How to Use

1. Open [http://localhost:3000](http://localhost:3000) in your web browser.
2. Interact with the API using tools like Postman.
3. Explore the different routes mentioned above.

Feel free to customize and enhance the API based on your requirements!

### how you can make ?
[click here](https://github.com/shreyamalogi/REST-API/blob/main/rest%20api%20overview.pdf)


### Contribution - Show Your Support (Star This) ⭐🌟📜✨

Feeling inspired by the world of web development? Contribute to this project and be part of the magic.

Don't forget to star the repository! ⭐🌟

## License 🕊️

This project is released under the MIT License, allowing you to share the magic responsibly!

MIT License

Copyright (c) 2022 Shreya Malogi

Stay Enchanted! 🌍💙




