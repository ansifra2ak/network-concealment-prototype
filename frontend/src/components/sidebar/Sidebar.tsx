import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const menuItems = [
  { name: "Dashboard", path: "/" },
  { name: "Network Topology", path: "/topology" },
  { name: "Threat Detection", path: "/threat" },
  { name: "Obfuscation Engine", path: "/obfuscation" },
  { name: "Simulation", path: "/simulation" },
  { name: "Analytics", path: "/analytics" },
  { name: "Logs", path: "/logs" },
  { name: "Settings", path: "/settings" },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="logo">NC</div>
      <nav aria-label="Prototype navigation">
        <ul>
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? "active-link" : "")}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
