// src/admin/AdminLayout.jsx
import { NavLink, Outlet, Link } from "react-router-dom";
import "../styles/admin.css";

const NAV = [
  { to: "/admin",           label: "Dashboard", end: true },
  { to: "/admin/profile",   label: "Profile" },  
  { to: "/admin/hero",      label: "Hero" },
  { to: "/admin/about",     label: "About" },
  { to: "/admin/signature", label: "Signature" },
  { to: "/admin/gallery",   label: "Gallery" },
  { to: "/admin/contact",   label: "Contact" },
  { to: "/admin/footer",    label: "Footer" },
];

export default function AdminLayout() {
  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <span className="admin-brand-dot" />
          <span>Admin</span>
        </div>

        <nav className="admin-nav">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `admin-nav-link ${isActive ? "is-active" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="admin-sidebar-footer">
          <Link to="/" className="admin-back-link">
            ← Back to site
          </Link>
        </div>
      </aside>

      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
}