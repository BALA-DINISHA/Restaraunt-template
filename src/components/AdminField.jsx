// src/components/AdminField.jsx
export default function AdminField({ label, value, onChange, placeholder, type = "text" }) {
  return (
    <label className="admin-field">
      <span className="admin-field-label">{label}</span>
      <input
        type={type}
        className="admin-field-input"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}