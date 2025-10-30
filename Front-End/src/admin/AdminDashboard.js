import React from "react";
import { Link } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";
import "./admin.css";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <AdminSidebar />
      <div className="admin-content">
        <AdminNavbar />
        <div className="admin-main">
          <h1>Welcome, Admin!</h1>
          <div className="admin-cards">
            <div className="admin-card">
              <h3>Users</h3>
              <p>Manage website users</p>
              <Link to="/admin/users">View</Link>
            </div>
            <div className="admin-card">
              <h3>Recipes</h3>
              <p>View or delete recipes</p>
              <Link to="/admin/recipes">Manage</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
