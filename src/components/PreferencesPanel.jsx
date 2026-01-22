import React, { useState, useRef } from "react";

export default function PreferencesPanel() {
  const [saved, setSaved] = useState(false);
  const statusRef = useRef();

  function handleSave() {
    setSaved(true);
    setTimeout(() => {
      statusRef.current?.focus();
    }, 0);
  }

  return (
    <div>
      <button onClick={handleSave}>Salvar Preferências</button>
      {saved && (
        <div ref={statusRef} tabIndex={-1} role="status">
          Preferências salvas!
        </div>
      )}
    </div>
  );
}