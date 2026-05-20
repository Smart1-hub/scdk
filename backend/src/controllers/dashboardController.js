import pool from "../config/db.js";

export const getDashboardStats = async (req, res) => {

  try {

    const totalProjects = await pool.query(
      "SELECT COUNT(*) FROM projects"
    );

    res.json({
      totalProjects: totalProjects.rows[0].count,
      activeSurveys: 12,
      infrastructureAssets: 48,
      planningZones: 6,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: "Failed to load dashboard stats",
    });

  }

};