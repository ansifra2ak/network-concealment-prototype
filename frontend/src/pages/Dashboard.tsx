import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import StatusCards from "../components/StatusCards/StatusCards";
import NetworkCanvas from "../components/Topology/NetworkCanvas";

import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <main className="main">
        <Header />
        <StatusCards />
        <section className="topology-section">
          <h2>Demo Topology</h2>
          <p className="section-description">
            Static portfolio visualization. No live network backend is connected.
          </p>
          <NetworkCanvas />
        </section>
      </main>
    </div>
  );
}
