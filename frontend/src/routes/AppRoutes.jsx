import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

/* PUBLIC WEBSITE */
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Login from "../pages/Login";

/* ENTERPRISE CORE */
import Dashboard from "../pages/Dashboard";

/* ENTERPRISE DASHBOARD PAGES */
import GISDashboard from "../pages/dashboard/GISDashboard";
import Transportation from "../pages/dashboard/Transportation";
import Environment from "../pages/dashboard/Environment";
import Reports from "../pages/dashboard/Reports";
import Settings from "../pages/dashboard/Settings";
import ActivityPage from "../pages/dashboard/Activity";
import Analytics from "../pages/dashboard/Analytics";
import IoTDashboard from "../pages/dashboard/IoTDashboard";

/* ADMIN */
import AdminDashboard from "../pages/admin/AdminDashboard";
import ProjectsManagement from "../pages/admin/ProjectsManagement";
import IoTManagement from "../pages/admin/IoTManagement";

export default function AppRoutes() {

  return (

    <BrowserRouter>

      <Routes>

        {/* ================================= */}
        {/* PUBLIC WEBSITE */}
        {/* ================================= */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/portfolio"
          element={<Portfolio />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        {/* ================================= */}
        {/* ENTERPRISE PLATFORM */}
        {/* ================================= */}

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/dashboard/gis"
          element={<GISDashboard />}
        />

        <Route
          path="/dashboard/transport"
          element={<Transportation />}
        />

        <Route
          path="/dashboard/environment"
          element={<Environment />}
        />

        <Route
          path="/dashboard/reports"
          element={<Reports />}
        />

        <Route
          path="/dashboard/settings"
          element={<Settings />}
        />

        <Route
          path="/dashboard/activity"
          element={<ActivityPage />}
        />

        <Route
          path="/dashboard/analytics"
          element={<Analytics />}
        />

        <Route
          path="/dashboard/iot"
          element={<IoTDashboard />}
        />

        {/* ================================= */}
        {/* ADMIN SYSTEM */}
        {/* ================================= */}

        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

        <Route
          path="/admin/projects"
          element={<ProjectsManagement />}
        />

        <Route
          path="/admin/iot"
          element={<IoTManagement />}
        />

      </Routes>

    </BrowserRouter>

  );

}