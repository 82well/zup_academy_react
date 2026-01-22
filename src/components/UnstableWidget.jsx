import React from "react";

export default function UnstableWidget() {
  const [crash, setCrash] = React.useState(false);
  if (crash) throw new Error("Simulated error!");
  return (
    <div>
      <button onClick={() => setCrash(true)}>Forçar Erro</button>
      Widget instável funcionando.
    </div>
  );
}