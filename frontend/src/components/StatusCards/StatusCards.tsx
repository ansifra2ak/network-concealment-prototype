import "./StatusCards.css";

const cards = [
  { title: "Prototype", value: "Frontend Demo" },
  { title: "Demo Nodes", value: "4" },
  { title: "Backend", value: "Not Connected" },
  { title: "Simulation", value: "Not Running" },
];

export default function StatusCards() {
  return (
    <div className="cards">
      {cards.map((card) => (
        <div className="card" key={card.title}>
          <h2>{card.title}</h2>
          <p>{card.value}</p>
        </div>
      ))}
    </div>
  );
}
