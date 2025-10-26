import React from "react";
import "./settings.css";
import { FaUser, FaLock, FaBell, FaGlobe, FaSignOutAlt } from "react-icons/fa";

export default function Settings() {
  return (
    <div className="settings-container">
      <div className="settings-header">
        <h1>Settings</h1>
        <p>Manage your profile, preferences, and account security</p>
      </div>

      <div className="settings-content">
        {/* Profile Section */}
        <section className="settings-section">
          <h2><FaUser /> Profile</h2>
          <div className="settings-item">
            <label>Display Name</label>
            <input type="text" placeholder="Enter your display name" />
          </div>
          <div className="settings-item">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="settings-item">
            <label>Profile Picture</label>
            <input type="file" />
          </div>
        </section>

        {/* Security Section */}
        <section className="settings-section">
          <h2><FaLock /> Security</h2>
          <div className="settings-item">
            <label>Change Password</label>
            <button>Update Password</button>
          </div>
          <div className="settings-item">
            <label>Two-Factor Authentication</label>
            <button>Enable</button>
          </div>
        </section>

        {/* Notifications */}
        <section className="settings-section">
          <h2><FaBell /> Notifications</h2>
          <div className="settings-item toggle">
            <label>Email Notifications</label>
            <input type="checkbox" />
          </div>
          <div className="settings-item toggle">
            <label>Recipe Updates</label>
            <input type="checkbox" />
          </div>
        </section>

        {/* Language / Preferences */}
        <section className="settings-section">
          <h2><FaGlobe /> Preferences</h2>
          <div className="settings-item">
            <label>Language</label>
            <select>
              <option>English</option>
              <option>Italiano</option>
              <option>Sinhala</option>
            </select>
          </div>
          <div className="settings-item">
            <label>Theme</label>
            <select>
              <option>Light</option>
              <option>Dark</option>
              <option>System Default</option>
            </select>
          </div>
        </section>

        {/* Logout */}
        <section className="settings-section logout">
          <button className="logout-btn"><FaSignOutAlt /> Log Out</button>
        </section>
      </div>
    </div>
  );
}
