// src/admin/AdminLayout.jsx
import { NavLink, Outlet, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
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
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    if (!window.confirm("Sign out of admin?")) return;
    await signOut();
    navigate("/admin/login", { replace: true });
  }

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
          {user?.email && (
            <p className="admin-user-email" title={user.email}>
              {user.email}
            </p>
          )}

          <Link to="/" className="admin-back-link">
            ← Back to site
          </Link>

          <button
            type="button"
            className="admin-logout-btn"
            onClick={handleLogout}
          >
            Sign out
          </button>
        </div>
      </aside>

      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
}