import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import NetworkTopology from "./pages/NetworkTopology";

function PrototypePage({ title }: { title: string }) {
  return (
    <div className="prototype-page">
      <h1>{title}</h1>
      <p>This module is not implemented in the public frontend prototype.</p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/topology" element={<NetworkTopology />} />
        <Route path="/threat" element={<PrototypePage title="Threat Detection" />} />
        <Route path="/obfuscation" element={<PrototypePage title="Obfuscation Engine" />} />
        <Route path="/simulation" element={<PrototypePage title="Simulation" />} />
        <Route path="/analytics" element={<PrototypePage title="Analytics" />} />
        <Route path="/logs" element={<PrototypePage title="Logs" />} />
        <Route path="/settings" element={<PrototypePage title="Settings" />} />
      </Routes>
    </BrowserRouter>
  );
}
