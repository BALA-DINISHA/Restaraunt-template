// src/components/AdminTextArea.jsx
export default function AdminTextArea({ label, value, onChange, rows = 4, placeholder }) {
  return (
    <label className="admin-field">
      <span className="admin-field-label">{label}</span>
      <textarea
        className="admin-field-input admin-field-textarea"
        value={value}
        rows={rows}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}