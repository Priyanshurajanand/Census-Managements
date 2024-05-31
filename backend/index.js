const express = require("express");
require('dotenv').config();
const cors = require("cors");
const { Pool } = require("pg");
const config = require("./db/config");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const pool = new Pool(config.database);

// POST API to add a person
app.post("/vote", async (req, res) => {
  const { name, is_vaccinated, birthdate, gender } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO people (name, is_vaccinated, birthdate, gender) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, is_vaccinated, birthdate, gender]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET API to fetch all census data
app.get("/data", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM people");
    res.status(200).json({ data: result.rows });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET API for line chart data
app.get("/counts", async (req, res) => {
  try {
    const vaccinatedResult = await pool.query(
      "SELECT EXTRACT(YEAR FROM AGE(birthdate)) as age, COUNT(*) FROM people WHERE is_vaccinated = true GROUP BY age ORDER BY age"
    );
    const notVaccinatedResult = await pool.query(
      "SELECT EXTRACT(YEAR FROM AGE(birthdate)) as age, COUNT(*) FROM people WHERE is_vaccinated = false GROUP BY age ORDER BY age"
    );

    res.json({
      vaccinated: vaccinatedResult.rows,
      notVaccinated: notVaccinatedResult.rows,
    });
  } catch (err) {
    console.error("Error occurred during GET /counts:", err.message, err.stack);
    res.status(500).send("Server error");
  }
});

// GET API for bar graph data
app.get("/results", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT COUNT(*) as count, gender, EXTRACT(YEAR FROM AGE(birthdate)) as age FROM people GROUP BY gender, age ORDER BY age"
    );
    res.status(200).json({ data: result.rows });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
