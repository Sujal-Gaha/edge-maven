# Edge Maven

A React-based tool for solving Dijkstra's algorithm problems and beyond.
## Description

Edge-Maven is a web application built with React that allows users to create custom graphs and solve shortest path problems using Dijkstra's algorithm. The tool is designed to be user-friendly, allowing users to input nodes and edges dynamically through an interactive interface. While the primary focus is on Dijkstra's algorithm, the project aims to expand to include other graph algorithms in the future.

---
## Features

- **Graph Creation**: Users can create custom graphs by adding nodes and weighted edges.
- **Dijkstra's Algorithm**: The application computes the shortest path from a source node to all other reachable nodes.
- **Interactive UI**: An intuitive interface for easy interaction with the graph.
- **Visualization**: Visual representation of the graph, including the shortest paths once computed.

---
## Installation

To run Edge-Maven locally, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/Sujal-Gaha/edge-maven.git
cd edge-maven
```

2. Install dependencies:

```bash
yarn
```

3. Start the development server:

```bash
yarn dev:frontend # for frontend server
yarn dev:backend # for backend server
```

---
## Usage

1. **Adding Nodes**: Click on "Add Node" to create new nodes.
2. **Adding Edges**: Click on "Add Edge" and select the source and target nodes, then enter a weight for the edge.
3. **Running Dijkstra's Algorithm**:
   - Select a source node from the dropdown menu.
   - Click "Compute Shortest Path."
4. **View Results**: The application will display the shortest path distances from the source to all other reachable nodes.

---
## License

Edge-Maven is open source under the MIT License.