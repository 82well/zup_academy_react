import React, { useEffect } from "react";

export default function AdvancedPanel({ onLoaded }) {
  useEffect(() => {
    onLoaded?.();
  }, [onLoaded]);
  return <div>Gráfico avançado carregado!</div>;
}