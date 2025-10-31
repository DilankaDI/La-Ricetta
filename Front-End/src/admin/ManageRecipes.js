import React, { useEffect, useState } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";
import "./admin.css";

const ManageRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Error loading recipes:", err));
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure to delete this recipe?")) return;

    await fetch(`http://localhost:5000/api/recipes/${id}`, { method: "DELETE" });
    setRecipes(recipes.filter((r) => r._id !== id));
  };

  return (
    <div className="admin-dashboard">
      <AdminSidebar />
      <div className="admin-content">
        <AdminNavbar />
        <div className="admin-main">
          <h2>Manage Recipes</h2>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Author</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {recipes.length > 0 ? (
                recipes.map((r) => (
                  <tr key={r._id}>
                    <td>{r.title}</td>
                    <td>{r.category}</td>
                    <td>{r.author}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(r._id)}
                        className="admin-delete-btn"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No recipes found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageRecipes;
