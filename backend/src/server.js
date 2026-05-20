import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import pool from "./config/db.js";

import projectRoutes from "./routes/projectRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

/* =====================================
   MIDDLEWARE
===================================== */

app.use(cors());

app.use(express.json());

/* =====================================
   ROOT ROUTE
===================================== */

app.get("/", async (req, res) => {

  try {

    const result = await pool.query(
      "SELECT PostGIS_Version();"
    );

    res.json({
      message: "SCD Enterprise Backend Running",
      postgis: result.rows[0].postgis_version,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: "Database connection failed",
    });

  }

});

/* =====================================
   API ROUTES
===================================== */

app.use("/projects", projectRoutes);

app.use("/dashboard", dashboardRoutes);

app.use("/services", serviceRoutes);

app.use("/contact", contactRoutes);

/* =====================================
   SERVER
===================================== */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});