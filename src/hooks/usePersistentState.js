// src/hooks/usePersistentState.js
import { useState } from "react";

export function usePersistentState(key, initial) {
  const storageKey = `restaurant:${key}`;

  const [value, setValue] = useState(() => {
    try {
      const raw = window.localStorage.getItem(storageKey);
      return raw ? JSON.parse(raw) : initial;
    } catch {
      return initial;
    }
  });

  const [savedSnapshot, setSavedSnapshot] = useState(() => {
    try {
      const raw = window.localStorage.getItem(storageKey);
      return raw ?? JSON.stringify(initial);
    } catch {
      return JSON.stringify(initial);
    }
  });

  const [lastSavedAt, setLastSavedAt] = useState(() => {
    try {
      const ts = window.localStorage.getItem(`${storageKey}:ts`);
      return ts ? Number(ts) : null;
    } catch {
      return null;
    }
  });

  const isDirty = JSON.stringify(value) !== savedSnapshot;

  function save() {
    try {
      const serialized = JSON.stringify(value);
      const now = Date.now();
      window.localStorage.setItem(storageKey, serialized);
      window.localStorage.setItem(`${storageKey}:ts`, String(now));
      setSavedSnapshot(serialized);
      setLastSavedAt(now);
    } catch (err) {
      console.error("Failed to save", err);
    }
  }

  function reset() {
    try {
      window.localStorage.removeItem(storageKey);
      window.localStorage.removeItem(`${storageKey}:ts`);
    } catch {}
    setValue(initial);
    setSavedSnapshot(JSON.stringify(initial));
    setLastSavedAt(null);
  }

  return { value, setValue, save, reset, isDirty, lastSavedAt };
}