import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

/* PUBLIC PAGES */
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";

/* AUTH */
import Login from "../pages/Login";
import ProtectedRoute from "./ProtectedRoute";

/* ADMIN */
import AdminDashboard from "../pages/admin/AdminDashboard";
import ProjectsManagement from "../pages/admin/ProjectsManagement";
import IoTManagement from "../pages/admin/IoTManagement";
import Analytics from "../pages/admin/Analytics";
import UsersManagement from "../pages/admin/UsersManagement";

export default function AppRoutes() {

  return (

    <BrowserRouter>

      <Routes>

        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/portfolio" element={<Portfolio />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/dashboard" element={<Dashboard />} />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />

        {/* PROTECTED ADMIN ROUTES */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/projects"
          element={
            <ProtectedRoute>
              <ProjectsManagement />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/iot"
          element={
            <ProtectedRoute>
              <IoTManagement />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/analytics"
          element={
            <ProtectedRoute>
              <Analytics />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>

  );

}