# Webtoon Management Backend (RESTful API)

## Overview
This project is a backend system that manages webtoon data using RESTful APIs. It allows users to perform CRUD (Create, Read, Update, Delete) operations on webtoon entries, including details such as title, character name, character ID, and description.

## Features
1. **Create** a new webtoon entry.
2. **Retrieve** all webtoons or a specific webtoon by `characterId`.
3. **Update** an existing webtoon.
4. **Delete** a webtoon entry by `characterId`.
5. Allows **duplicate `characterId` values** for flexibility in managing data.

## Prerequisites
Before running this project, ensure that you have the following installed:
- **Node.js** (version 14 or later)
- **MongoDB** (local or cloud-based)

## Installation
1. Install the required dependencies:
   ```bash
   npm install
## Endpoints

### 1. Create a Webtoon
**POST** `http://localhost:5000`

### 2. Retrieve All Webtoons
**GET** `http://localhost:5000`

### 3. Retrieve Webtoon by Character ID
**GET** `http://localhost:5000/characterId`

### 4. Delete Webtoon by Character ID
**DELETE** `http://localhost:5000/characterId`

## Project Structure

The project is organized into the following folders:

1. **src/**: Contains all the source code.
2. **controllers/**: Contains the controller logic for handling webtoon-related requests.
   - `webtoonController.js`: Defines the logic for creating, reading, updating, and deleting webtoons.
3. **models/**: Contains the Mongoose schema for the Webtoon model.
   - `webtoonModel.js`: Defines the schema for webtoon data.
4. **routes/**: Contains the routes for the webtoon-related endpoints.
   - `webtoonRoutes.js`: Defines the routes for handling API requests.
5. **db/**: Contains the database connection logic.
   - `db.js`: Connects to the MongoDB database using Mongoose.

## Dependencies

1. **express**: Web framework for Node.js
2. **mongoose**: MongoDB object modeling tool
3. **dotenv**: Loads environment variables from a `.env` file
