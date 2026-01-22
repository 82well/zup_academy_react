// src/App.jsx
import React, { Suspense, useState, useRef } from "react";
import MainMetrics from "./components/MainMetrics";
import PreferencesPanel from "./components/PreferencesPanel";
import InteractiveList from "./components/InteractiveList";
import ErrorBoundary from "./components/ErrorBoundary";
import { logError } from "./utils/logError";

const AdvancedPanel = React.lazy(() => import("./components/AdvancedPanel"));
const UnstableWidget = React.lazy(() => import("./components/UnstableWidget"));

export default function App() {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showUnstable, setShowUnstable] = useState(false);
  const advancedLoadTime = useRef();

  function handleShowAdvanced() {
    advancedLoadTime.current = performance.now();
    setShowAdvanced(true);
  }
  function handleAdvancedLoaded() {
    const elapsed = performance.now() - advancedLoadTime.current;
    console.log(`AdvancedPanel loaded in ${elapsed.toFixed(2)}ms`);
  }

  return (
    <div className="App-Header">
      <h1>Mini Dashboard</h1>
      <MainMetrics />
      <button onClick={handleShowAdvanced}>Mostrar Painel Avançado</button>
      <Suspense fallback={<div role="status">Carregando gráfico avançado...</div>}>
        {showAdvanced && (
          <AdvancedPanel onLoaded={handleAdvancedLoaded} />
        )}
      </Suspense>
      <PreferencesPanel />
      <InteractiveList />
      <button onClick={() => setShowUnstable(true)}>Simular Erro</button>
      <ErrorBoundary
        onError={(err, info) =>
          logError({
            component: "UnstableWidget",
            error: err,
            info,
            userId: "user-123",
          })
        }
        fallback={<div role="alert">Erro local no widget instável.</div>}
      >
        <Suspense fallback={<span role="status">Carregando widget instável...</span>}>
          {showUnstable && <UnstableWidget />}
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}