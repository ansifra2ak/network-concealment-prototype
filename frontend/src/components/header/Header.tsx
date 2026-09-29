import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div>
        <h1>Network Concealment Research Prototype</h1>
        <p>Topology visualization and portfolio interface</p>
      </div>
      <div className="header-status" aria-label="Backend status">
        <span className="status-dot" />
        Backend not connected
      </div>
    </header>
  );
}
