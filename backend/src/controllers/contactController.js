import pool from "../config/db.js";

/* =====================================
   SEND CONTACT MESSAGE
===================================== */

export const sendContactMessage = async (req, res) => {

  try {

    const {
      fullName,
      email,
      message,
    } = req.body;

    const result = await pool.query(
      `
      INSERT INTO contact_messages
      (full_name, email, message)
      VALUES ($1, $2, $3)
      RETURNING *;
      `,
      [
        fullName,
        email,
        message,
      ]
    );

    res.json({
      success: true,
      message: "Message sent successfully",
      data: result.rows[0],
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: "Failed to send message",
    });

  }

};

/* =====================================
   GET CONTACT MESSAGES
===================================== */

export const getContactMessages = async (req, res) => {

  try {

    const result = await pool.query(`
      SELECT *
      FROM contact_messages
      ORDER BY created_at DESC
    `);

    res.json(result.rows);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: "Failed to fetch contact messages",
    });

  }

};