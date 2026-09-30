// src/admin/ProtectedRoute.jsx
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { isAuthed, loading } = useAuth();
  const location = useLocation();

  // Still checking session? Show a small loading state.
  if (loading) {
    return (
      <div className="admin-loading">
        <span>Loading…</span>
      </div>
    );
  }

  // Not logged in? Redirect to login, remembering where they wanted to go.
  if (!isAuthed) {
    return <Navigate to="/admin/login" replace state={{ from: location }} />;
  }

  // Logged in → render the protected content.
  return children;
}