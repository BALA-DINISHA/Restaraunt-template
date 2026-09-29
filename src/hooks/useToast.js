// src/hooks/useToast.js
import { useState, useCallback } from "react";

export function useToast() {
  const [toast, setToast] = useState(null);

  const show = useCallback((message) => {
    setToast({ message, id: Date.now() });
  }, []);

  const clear = useCallback(() => setToast(null), []);

  return { toast, show, clear };
}