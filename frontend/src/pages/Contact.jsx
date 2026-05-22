import { motion } from "framer-motion";
import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "http://localhost:5000/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      alert(data.message);

      setFormData({
        fullName: "",
        email: "",
        message: "",
      });

    } catch (error) {

      console.error(error);

      alert("Failed to send message");

    }

  };

  return (

    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full"></div>

      <Navbar />

      {/* HERO */}
      <section className="px-10 py-28 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto text-center"
        >

          <p className="text-cyan-400 uppercase tracking-widest">
            Contact Us
          </p>

          <h1 className="text-6xl font-extrabold mt-6">
            Let’s Build Smarter Cities Together
          </h1>

          <p className="text-slate-400 text-xl mt-8 max-w-4xl mx-auto leading-relaxed">

            Reach out to discuss GIS solutions,
            urban planning projects,
            smart-city systems,
            infrastructure analytics,
            and enterprise geospatial innovation.

          </p>

        </motion.div>

      </section>

      {/* CONTACT SECTION */}
      <section className="px-10 pb-28 relative z-10">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">

          {/* LEFT PANEL */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-slate-900/80 backdrop-blur-lg border border-slate-800 rounded-3xl p-10"
          >

            <h2 className="text-4xl font-extrabold">
              Contact Information
            </h2>

            <p className="text-slate-400 mt-6 leading-relaxed">

              Our team provides enterprise solutions in GIS,
              urban and regional planning,
              transportation systems,
              smart infrastructure,
              and environmental management.

            </p>

            <div className="mt-10 space-y-8">

              <div>

                <h3 className="text-cyan-400 text-lg font-semibold">
                  Office Address
                </h3>

                <p className="text-slate-300 mt-2">
                  Ibadan, Nigeria
                </p>

              </div>

              <div>

                <h3 className="text-cyan-400 text-lg font-semibold">
                  Email Address
                </h3>

                <p className="text-slate-300 mt-2">
                  scdk@yahoo.com
                </p>

              </div>

              <div>

                <h3 className="text-cyan-400 text-lg font-semibold">
                  Phone Number
                </h3>

                <p className="text-slate-300 mt-2">
                  +234 902 966 1645
                </p>

              </div>

            </div>

          </motion.div>

          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-slate-900/80 backdrop-blur-lg border border-slate-800 rounded-3xl p-10"
          >

            <h2 className="text-4xl font-extrabold">
              Send a Message
            </h2>

            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-6"
            >

              {/* FULL NAME */}
              <div>

                <label className="block text-slate-300 mb-3">
                  Full Name
                </label>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-950 border border-slate-700 focus:border-cyan-400 rounded-2xl px-5 py-4 outline-none transition duration-300"
                  placeholder="Enter your full name"
                />

              </div>

              {/* EMAIL */}
              <div>

                <label className="block text-slate-300 mb-3">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-950 border border-slate-700 focus:border-cyan-400 rounded-2xl px-5 py-4 outline-none transition duration-300"
                  placeholder="Enter your email address"
                />

              </div>

              {/* MESSAGE */}
              <div>

                <label className="block text-slate-300 mb-3">
                  Message
                </label>

                <textarea
                  rows="6"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-950 border border-slate-700 focus:border-cyan-400 rounded-2xl px-5 py-4 outline-none transition duration-300 resize-none"
                  placeholder="Write your message..."
                ></textarea>

              </div>

              {/* BUTTON */}
              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-950 py-4 rounded-2xl font-bold transition duration-300 shadow-lg hover:shadow-cyan-500/40"
              >

                Send Message

              </motion.button>

            </form>

          </motion.div>

        </div>

      </section>

      <Footer />

    </div>

  );

}