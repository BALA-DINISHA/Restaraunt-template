// src/admin/AdminProfile.jsx
import { useRestaurant } from "../context/RestaurantContext";
import { useToast } from "../hooks/useToast";
import AdminField from "../components/AdminField";
import AdminSaveBar from "../components/AdminSaveBar";
import Toast from "../components/Toast";

export default function AdminProfile() {
  const { profile, setProfile, profileState } = useRestaurant();
  const { save, reset, isDirty, lastSavedAt } = profileState;
  const { toast, show, clear } = useToast();

  function update(field, value) {
    setProfile((prev) => ({ ...prev, [field]: value }));
  }

  return (
    <section className="admin-page">
      <header className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Restaurant Profile</h1>
          <p className="admin-page-subtitle">
            Name, tagline, and logo used across the site.
          </p>
        </div>

        <AdminSaveBar
          isDirty={isDirty}
          lastSavedAt={lastSavedAt}
          onSave={save}
          onDiscard={reset}
          onToast={show}
        />
      </header>

      <div className="admin-card">
        <AdminField
          label="Restaurant name"
          value={profile.name}
          onChange={(v) => update("name", v)}
          placeholder="Aroma"
        />
        <AdminField
          label="Tagline"
          value={profile.tagline}
          onChange={(v) => update("tagline", v)}
          placeholder="Fine Indian dining since 2010"
        />
        <AdminField
          label="Logo URL"
          value={profile.logo}
          onChange={(v) => update("logo", v)}
          placeholder="/images/logo.svg"
        />
      </div>

      {toast && <Toast key={toast.id} message={toast.message} onDone={clear} />}
    </section>
  );
}