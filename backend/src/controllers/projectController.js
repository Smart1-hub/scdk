import pool from "../config/db.js";

/* =====================================
   GET PROJECTS
===================================== */

export const getProjects = async (req, res) => {

  try {

    const result = await pool.query(`
      SELECT
        id,
        name,
        description,
        ST_AsGeoJSON(location)::json AS location
      FROM projects
    `);

    res.json(result.rows);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: "Failed to fetch projects",
    });

  }

};

/* =====================================
   CREATE PROJECT
===================================== */

export const createProject = async (req, res) => {

  try {

    const {
      name,
      description,
      longitude,
      latitude,
    } = req.body;

    const result = await pool.query(
      `
      INSERT INTO projects
      (name, description, location)
      VALUES (
        $1,
        $2,
        ST_SetSRID(
          ST_MakePoint($3, $4),
          4326
        )
      )
      RETURNING *;
      `,
      [
        name,
        description,
        longitude,
        latitude,
      ]
    );

    res.json(result.rows[0]);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: "Failed to create project",
    });

  }

};