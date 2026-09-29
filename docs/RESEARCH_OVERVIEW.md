# Research Overview

## Project Theme

**Network Concealment — Topology Reconnaissance & Selective Obfuscation**

The project studies the relationship between network-topology inference and defensive concealment. The research idea is to observe how an attacker may infer shared paths or topology structure from network measurements, then selectively manipulate the attacker's observable view while maintaining legitimate network operation.

## High-Level Research Workflow

1. **Topology setup** — define a controlled network environment.
2. **Reconnaissance** — collect path/latency observations from an attacker perspective.
3. **Inference** — use correlation in observations to infer shared-path or topology relationships.
4. **Selective obfuscation** — alter attacker-visible network behaviour so the inferred topology differs from the underlying topology.
5. **Legitimate-view preservation** — keep normal hosts operating on the intended network view.
6. **Evaluation** — compare concealment behaviour against latency/QoS overhead across repeated trials.

## Public Repository Boundary

The uploaded project snapshot contains the frontend prototype but does not contain the Mininet/Open vSwitch experiment code, RTT collection scripts, Linux `tc/netem` rules, datasets, or experiment outputs. This public portfolio repository therefore does not claim those components are runnable here.

The frontend is presented as a visualization/prototyping layer for the broader research concept.

## Future Integration Areas

These are research directions, not implemented features in this public snapshot:

- Mininet / Open vSwitch experiment orchestration
- RTT-based topology inference
- Linux `tc/netem` selective delay manipulation
- Dynamic topology-obfuscation strategies
- Probe/anomaly detection
- SDN-based control
- Experiment logging and analytics
