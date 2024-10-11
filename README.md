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
