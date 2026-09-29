import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  type Edge,
  type Node,
} from "reactflow";

import "reactflow/dist/style.css";

const nodes: Node[] = [
  { id: "gateway", position: { x: 80, y: 160 }, data: { label: "Gateway" } },
  { id: "node-a", position: { x: 340, y: 70 }, data: { label: "Node A" } },
  { id: "node-b", position: { x: 340, y: 250 }, data: { label: "Node B" } },
  { id: "server", position: { x: 620, y: 160 }, data: { label: "Server" } },
];

const edges: Edge[] = [
  { id: "gateway-a", source: "gateway", target: "node-a" },
  { id: "gateway-b", source: "gateway", target: "node-b" },
  { id: "a-server", source: "node-a", target: "server" },
  { id: "b-server", source: "node-b", target: "server" },
];

export default function NetworkCanvas() {
  return (
    <div className="network-canvas">
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}
