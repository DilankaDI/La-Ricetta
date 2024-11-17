import React, { useState } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  sidebarClasses,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import {
  FaMoon,
  FaSun,
  FaBars,
  FaChevronRight,
  FaChevronLeft,
  FaUtensils,
  FaStar,
  FaPlusCircle,
  FaFileAlt,
  FaQuestionCircle,
} from "react-icons/fa";
import "./Sidenav.css";

const Sidenav = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sidebar
      collapsed={collapsed}
      className="pro-sidebar-container"
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: darkMode ? "#000000" : "#f0f0f0",
          color: darkMode ? "#b6c8d9" : "#1e1e2f",
          height: "100vh",
          transition: "width 0.3s",
          width: collapsed ? "80px" : "250px",
        },
      }}
    >
      <div className="sidenav-header">
        <button className="collapse-toggle" onClick={handleToggleCollapse}>
          {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
        <h3
          style={{
            color: darkMode ? "#ffffff" : "#1e1e2f",
            display: collapsed ? "none" : "block",
          }}
        >
          La Ricetta
        </h3>
        <button className="dark-mode-toggle" onClick={handleToggleDarkMode}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      <Menu
        menuItemStyles={{
          button: ({ active, disabled }) => ({
            backgroundColor: darkMode ? "#000000" : "#ffffff", // Background color
            color: active
              ? darkMode
                ? "#000000" // Black for Active in Dark Mode
                : "#000000" // Black for Active in Light Mode
              : darkMode
              ? "#ffffff" // White for Inactive in Dark Mode
              : "#000000", // Black for Inactive in Light Mode
            // borderRadius: '5px',
            // margin: '5px 0',
            transition: "color 0.3s, background-color 0.3s", // Smooth transition for hover effect
            "&:hover": {
              backgroundColor: darkMode ? "#333333" : "#e0e0e0", // Gray for Dark Mode hover, Light Gray for Light Mode hover
              color: darkMode ? "#b6c8d9" : "#000000", // Slightly lighter color on hover
            },
          }),
        }}
      >
        <SubMenu label="Recipes" icon={<FaBars />}>
          <MenuItem component={<Link to="#" />} icon={<FaUtensils />}>
            {" "}
            Latest Recipes
          </MenuItem>
          <MenuItem component={<Link to="#" />} icon={<FaStar />}>
            {" "}
            Top Rated Recipes
          </MenuItem>
        </SubMenu>
        <MenuItem component={<Link to="#" />} icon={<FaPlusCircle />}>
          {" "}
          How To Add Recipes{" "}
        </MenuItem>
        <MenuItem component={<Link to="#" />} icon={<FaFileAlt />}>
          {" "}
          Terms and Conditions{" "}
        </MenuItem>
        <MenuItem component={<Link to="#" />} icon={<FaQuestionCircle />}>
          {" "}
          F&Q{" "}
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default Sidenav;
