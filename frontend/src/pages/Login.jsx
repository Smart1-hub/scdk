import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "http://localhost:5000/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (data.token) {

        localStorage.setItem(
          "token",
          data.token
        );

        localStorage.setItem(
          "role",
          data.role
        );

        navigate("/admin");

      } else {

        alert("Login failed");

      }

    } catch (error) {

      console.error(error);

    }

  };

  return (

    <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">

      <form
        onSubmit={handleLogin}
        className="bg-slate-900 p-10 rounded-3xl w-[400px]"
      >

        <h1 className="text-4xl font-bold mb-8">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 rounded-xl bg-slate-800 mb-4"
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 rounded-xl bg-slate-800 mb-6"
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value,
            })
          }
        />

        <button
          className="w-full bg-cyan-500 py-4 rounded-xl font-bold"
        >
          Login
        </button>

      </form>

    </div>

  );

}