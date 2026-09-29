import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import NetworkCanvas from "../components/Topology/NetworkCanvas";

import "./Dashboard.css";

export default function NetworkTopology() {
  return (
    <div className="dashboard">
      <Sidebar />
      <main className="main">
        <Header />
        <h2>Network Topology</h2>
        <p className="section-description">
          Interactive visualization of the static demo topology included in this portfolio build.
        </p>
        <NetworkCanvas />
      </main>
    </div>
  );
}
