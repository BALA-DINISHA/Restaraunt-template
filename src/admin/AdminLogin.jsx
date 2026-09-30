// src/admin/AdminLogin.jsx
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/admin.css";

export default function AdminLogin() {
  const { signIn, isAuthed } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Where to go after login — default to /admin
  const redirectTo = location.state?.from?.pathname || "/admin";

  // Already logged in? Just go there.
  if (isAuthed) {
    navigate(redirectTo, { replace: true });
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    const result = await signIn(email.trim(), password);

    if (!result.ok) {
      setError(result.message || "Login failed. Check your credentials.");
      setSubmitting(false);
      return;
    }

    navigate(redirectTo, { replace: true });
  }

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <header className="admin-login-header">
          <span className="admin-login-brand-dot" />
          <h1 className="admin-login-title">Aroma Admin</h1>
          <p className="admin-login-subtitle">Sign in to manage your site.</p>
        </header>

        <form className="admin-login-form" onSubmit={handleSubmit} noValidate>
          <label className="admin-field">
            <span className="admin-field-label">Email</span>
            <input
              type="email"
              className="admin-field-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@aroma.com"
              autoComplete="email"
              required
            />
          </label>

          <label className="admin-field">
            <span className="admin-field-label">Password</span>
            <input
              type="password"
              className="admin-field-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              autoComplete="current-password"
              required
            />
          </label>

          {error && (
            <p className="admin-login-error" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="admin-btn admin-btn--primary admin-login-submit"
            disabled={submitting || !email || !password}
          >
            {submitting ? "Signing in…" : "Sign in"}
          </button>
        </form>

        <p className="admin-login-note">
          Protected by Supabase Auth.
        </p>
      </div>
    </div>
  );
}