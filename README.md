# Census App

A web application for managing and analyzing census data, including vaccination status. The project consists of a React frontend, Node.js backend, and PostgreSQL database.

## Video Demonstration

Here is a video demonstration of the Census App:

https://github.com/Priyanshurajanand/Census-Management/assets/113886990/588fc27b-ecdb-4c85-a040-7c39d69b59de

## Table of Contents

- [Features](#features)
- [Setup and Installation](#setup-and-installation)
- [Running the Project](#running-the-project)
- [Codebase Documentation](#codebase-documentation)
- [References and Resources](#references-and-resources)

## Features

- Add, view, and analyze census data.
- Display trends in vaccination status.
- Responsive design using Tailwind CSS.
- Persistent data storage with PostgreSQL.

## Setup and Installation

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)
- PostgreSQL (v12 or later)

### Backend Setup

1.  Clone the repository:

    ```sh
    git clone https://github.com/Priyanshurajanand/Census-Managements.git
    cd census management
    ```

2.  Install backend dependencies:

    ```sh
    cd backend
    npm install
    ```

3.  Set up PostgreSQL:

        - Create a PostgreSQL database and user.
        - Update the database configuration in `backend/env`:

          ```sh
            DB_USER='postgres'
            DB_HOST='your_host'
            DB_NAME='database_name'
            DB_PASSWORD='your_password'
            DB_PORT='your_database_port'
            PORT=3000
        ```


4.  Start the backend server:

    ```sh
    npm start
    ```

### Frontend Setup

1. Install frontend dependencies:

   ```sh
   cd ../frontend
   npm install
   ```

2. Start the frontend development server:

   ```sh
   npm start
   ```

## Running the Project

1. Ensure the backend server is running:

   ```sh
   cd backend
   npm start
   ```

2. In a separate terminal, start the frontend server:

   ```sh
   cd frontend
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3001` or where your frontend is running .

## Codebase Documentation

### Backend

- **Entry Point**: `backend/index.js`
- **Routes**: Defined in `backend/index.js`
  - `/vote`: POST route to add person in census data.
  - `/data`: GET route to retrieve all census data.
  - `/counts`: GET route for line chart.
  - `/results`: GET route for bar graph.
- **Database Configuration**: `backend/db/config.js`

### Frontend

- **Entry Point**: `frontend/src/index.js`
- **Main Pages**:
  - `AddData.js`: Form component for adding data.
  - `Home.js`: Home page component for trend analysis.
- **Main Components**:

  - `header.js`: Navbar to route pages.
  - `CensusForm.js`: form to add data.
  - `CensusTable.js`: showng all data in table.
  - `LineChart.js`:Chart for no. of vaccinated/non-vaccinaated pepople vs age.
  - `BarChart.js`: Bar Graph for no. of people from each gender vs age.

- **Styles**: Managed using Tailwind CSS.

## References and Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html , stackoverflow.com/questions)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express Documentation](https://expressjs.com/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/ , youtube)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Chart Js](https://www.chartjs.org/docs/latest/getting-started/ , youtube , stackoverflow)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.
