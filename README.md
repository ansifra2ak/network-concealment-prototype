# Network Concealment — Research Visualization Prototype

A portfolio-safe frontend prototype for visualizing concepts from a network concealment research project focused on topology reconnaissance, selective obfuscation, and attacker-specific network views.

## Public Portfolio Scope

This repository contains the **frontend visualization prototype** supplied with the project snapshot. It is intentionally limited to code that can be demonstrated safely and verified from the provided files.

The supplied snapshot does **not** contain the experimental Mininet/Open vSwitch backend, RTT measurement scripts, `tc/netem` obfuscation logic, experiment datasets, or generated results. Those components are therefore not represented here as runnable code.

## What Is Implemented Here

- React + TypeScript + Vite frontend
- Interactive static network-topology visualization using React Flow
- Dashboard and topology navigation
- Prototype status cards
- Clear frontend-only / backend-not-connected state

## Research Context

The broader project investigates how an attacker can infer network structure from observable path behaviour and how selective network obfuscation can alter the attacker's perceived topology while preserving legitimate connectivity.

See [`docs/RESEARCH_OVERVIEW.md`](docs/RESEARCH_OVERVIEW.md) for a high-level description of the research workflow and public-scope boundaries.

## Tech Stack

- React
- TypeScript
- Vite
- React Flow
- React Router

## Run Locally

```bash
cd frontend
npm install
npm run dev
```

For a production build:

```bash
npm run build
```

## Repository Structure

```text
.
├── README.md
├── docs/
│   └── RESEARCH_OVERVIEW.md
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   └── styles/
    ├── package.json
    └── tsconfig.json
```

## Portfolio Note

This public repository is a curated portfolio version. It separates demonstrable frontend work from research components that are not present in the supplied project snapshot, avoiding claims that cannot be verified from the public code.
