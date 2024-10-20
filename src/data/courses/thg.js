import GraphInput from "../visualisation/thg/GraphInput";
import Graphe from "../visualisation/thg/graphe";
import React from "react";
export const thg = {
  id: 38,
  title: "Graph theory",
  description:
    "In this course you'll learn about the fundamental concepts and structures of graphs, including paths, cycles, trees, and networks. The course covers graph algorithms such as shortest path, spanning tree, and network flow algorithms. By the end of the course, you will be equipped with the knowledge to apply graph theory to solve complex problems.",
  comingSoon: false,
  isNew: true,
  chaptersTitles: [
    "Basic definitions",
    "Graph Representations",
    "Graph Algorithms",
    "Applications of Graph Theory",
  ],

  chapters: [
    {
      chapterId: 1,
      title: "Basic Definitions",
      chapterDescription:
        "Graph theory is a branch of mathematics focused on the study of graphs, which are structures made up of vertices (or nodes) connected by edges. Graphs are used to model pairwise relations between objects, making them a valuable tool in various fields such as computer science, biology, and social sciences.",
      subChapter: [
        {
          id: 101,
          title: "1 Basic Definitions",
          subChapterContent: (
            <div>
              <h4>
                <strong>1.1. Graphs: </strong>
              </h4>
              <p>
                Graphs are data structures composed of a set of vertices, with
                the aim of representing relationships between objects.
              </p>
              <br></br>
              <p>Real-life example of using Graphs:</p>
              <ul>
                <li>
                  <strong>- Social Networks: </strong> As mentioned earlier,
                  social media platforms like Facebook, Twitter, and LinkedIn
                  utilize graphs to represent connections between users.
                </li>
                <li>
                  <strong>- Transportation Networks: </strong> Road networks,
                  railway systems, and airline routes can be represented as
                  graphs, where nodes represent locations (such as cities or
                  stations) and edges represent the connections between them.
                </li>
                <li>
                  <strong>- Internet and Web: </strong> The World Wide Web can
                  be represented as a graph, where web pages are nodes and
                  hyperlinks between pages are edges.
                </li>
                <li>
                  <strong>- Recommendation Systems: </strong> Graphs are used in
                  recommendation systems to model relationships between users,
                  products, or content, helping to suggest relevant items based
                  on connections within the graph.
                </li>
              </ul>
              <br />
              <div className="flex items-center">
                <Graphe nodes={"1,2,2,3,3,1"} link={"--"} />
                <div>
                  <p>
                    <strong>This graph can be noted G(V,R)</strong>
                  </p>
                  <br></br>
                  <p>
                    <strong>V={"{1,2,3}"} set of vertices</strong>
                  </p>
                  <br></br>
                  <p>
                    <strong>R={"{(1,2),(2,3),(3,2)}"} set of relations</strong>
                  </p>
                </div>
              </div>
              <h4>
                <strong>1.2. Vertices (or Nodes): </strong>
              </h4>
              The elements of the set. (1 is a node or a vertex)
              <br />
              <br />
              <h4>
                <strong>1.3. Edges: </strong>
              </h4>
              The elements of the relations or links between vertices.
              <br />
              <br />
              <h4>
                <strong>1.4. Directed Graph: </strong>
              </h4>
              A graph where each edge has a direction.
              <Graphe
                nodes={"1,2,2,5,2,4,3,6,4,4,4,1,4,5,5,4"}
                link="->"
                type="BFS"
              />
              <h4>
                <strong>1.5. Undirected Graph: </strong>
              </h4>
              A graph where edges have no direction.
              <Graphe nodes={"1,2,2,3,3,1,4,5"} link={"--"} />
              <h4>
                <strong>1.6. Loop:</strong>
              </h4>
              An edge that connects a vertex to itself.
              <Graphe nodes={"A,B,B,B"} link="->" type="BFS" />
              <br />
              <h4>
                <strong>1.7. Order:</strong>
              </h4>
              Is the number of vertices. Example: Order 3.
              <Graphe nodes={"A,B,B,C"} link={"->"} type="BFS" />
              <h4>
                <strong>1.8. Vertex Degree:</strong>
              </h4>
              <p>Noted d(V), is the number of relations of the vertex.</p>
              <br />
              <h4>
                <strong>1.9. Regular Graph:</strong>
              </h4>
              <p>If the degree of all the vertices is equal.</p>
              <br />
              <h4>
                <strong>1.10. Partial Graph:</strong>
              </h4>
              A graph formed by removing some edges from a graph, but keeping
              all the vertices. Example:
              <p> - Graph G1:</p>
              <Graphe nodes={"1,2,2,3,3,4,4,1"} link={"--"} />
              <p> - Graph G2 : (Graph G2 is Partiel Graph of G1)</p>
              <Graphe nodes={"1,4,2,3"} link={"--"} />
              <br />
              <h4>
                <strong>1.11. Subgraph:</strong>
              </h4>
              A graph formed by a subset of vertices and edges of another graph.
              Example:
              <p> - Graph G1:</p>
              <Graphe nodes={"1,2,2,3,3,4,4,1"} link={"--"} />
              <p> - Graph G2 : (Graph G2 is SubGraph of G1)</p>
              <Graphe nodes={"1,2,2,3"} link={"--"} />
              <br />
              <h4>
                <strong>1.12. Successors and Predecessors:</strong>
              </h4>
              <p>
                - <strong>Successors:</strong> In a directed graph, the
                successors of a vertex are the vertices that can be reached by
                following the outgoing edges from that vertex.
                <br />
                Example: In the graph below, the successors of vertex 2 are
                vertices 5 and 4.
              </p>
              <Graphe nodes={"1,2,2,5,2,4,3,6"} link="->" />
              <p>
                - <strong>Predecessors:</strong> In a directed graph, the
                predecessors of a vertex are the vertices from which the
                incoming edges to that vertex originate.
                <br />
                Example: In the graph below, the predecessors of vertex 4 are
                vertices 2 and 3.
              </p>
              <Graphe nodes={"1,2,2,5,2,4,3,4"} link="->" />
              <br />
              <h4>
                <strong>1.13. Out-degree and In-degree:</strong>
              </h4>
              <p>
                - <strong>Out-degree:</strong> The number of edges leaving a
                vertex.
                <br />
                Example: In the graph below, the out-degree of vertex 2 is 2
                (edges to 4 and 5).
              </p>
              <Graphe nodes={"1,2,2,5,2,4,3,6"} link="->" />
              <p>
                - <strong>In-degree:</strong> The number of edges entering a
                vertex.
                <br />
                Example: In the graph below, the in-degree of vertex 4 is 2
                (edges from 2 and 3).
              </p>
              <Graphe nodes={"1,2,2,5,2,4,3,4"} link="->" />
              <br />
              <h4>
                <strong>1.14. Isolated Vertex:</strong>
              </h4>
              A vertex with no edges connected to it. It has an in-degree and
              out-degree of zero.
              <br />
              <h1 className=" my-4 text-lg font-bold  underline">
                Try it your self draw a graph :{" "}
              </h1>
              <GraphInput />
            </div>
          ),
        },
        {
          id: 102,
          title: "2 Types of Graphs",
          subChapterContent: (
            <div>
              <h4>
                <strong>2.1. Simple Graph:</strong>
              </h4>
              <p>
                A graph with no loops or multiple edges. Each pair of vertices
                is connected by at most one edge.
              </p>
              <Graphe nodes={"A,B,B,C,C,D"} link={"--"} />
              <br />

              <h4>
                <strong>2.2. Multigraph:</strong>
              </h4>
              <p>
                A graph that can have multiple edges (parallel edges) between
                the same pair of vertices.
              </p>
              <Graphe nodes={"A,B,A,B,B,C,B,C"} link={"->"} />
              <br />

              <h4>
                <strong>2.3. Pseudograph:</strong>
              </h4>
              <p>
                A graph that may contain both loops (an edge that connects a
                vertex to itself) and multiple edges between vertices.
              </p>
              <Graphe nodes={"A,A,A,B,B,B"} link={"->"} />
              <br />

              <h4>
                <strong>2.4. Complete Graph:</strong>
              </h4>
              <p>
                A graph in which every pair of distinct vertices is connected by
                a unique edge. Denoted as{" "}
                <strong>
                  K<sub>n</sub>
                </strong>
                , where <strong>n</strong> is the number of vertices.
              </p>
              <Graphe nodes={"A,B,A,C,A,D,B,C,B,D,C,D"} link={"--"} />
              <br />

              <h4>
                <strong>2.5. Bipartite Graph:</strong>
              </h4>
              <p>
                A graph whose vertices can be divided into two disjoint sets{" "}
                <strong>U</strong> and <strong>V</strong> such that no two
                vertices within the same set are adjacent. Represented as{" "}
                <strong>
                  K<sub>(m,n)</sub>
                </strong>{" "}
                where <strong>m</strong> and <strong>n</strong> are the number
                of vertices in the two sets.
              </p>
              <h4>
                <strong>2.6. Reflexive Graph:</strong>
              </h4>
              <p>
                A graph in which each vertex has a loop (an edge that connects a
                vertex to itself).
              </p>
              <Graphe nodes="A,A,A,B,A,C,B,B,C,C,C,A" link={"->"} type="BFS" />
              <br />

              <h4>
                <strong>2.7. Symmetric Graph:</strong>
              </h4>
              <p>
                If for every directed edge (arc) (x, y) in the graph, the
                reverse edge (y, x) also exists.
              </p>
              <Graphe nodes="A,B,A,C,B,A,B,C,C,A,C,B" link={"->"} type="BFS" />
              <br />

              <h4>
                <strong>2.8. Antisymmetric Graph:</strong>
              </h4>
              <p>
                If for every directed edge (arc) (x, y) in the graph, the
                reverse edge (y, x) does not exist unless x = y.
              </p>
              <Graphe nodes="1,3,2,1,2,3" link={"->"} type="BFS" />
              <br />

              <h4>
                <strong>2.9. Transitive Graph:</strong>
              </h4>
              <p>
                If for any two directed edges (x, y) and (y, z) in the graph,
                there is also a directed edge (x, z).
              </p>
              <Graphe nodes="A,B,B,C,A,C" link={"->"} type="BFS" />
              <br></br>
              <h1 className=" my-4 text-lg font-bold  underline">
                Try it your self draw a graph :{" "}
              </h1>
              <GraphInput />
            </div>
          ),
        },
        {
          id: 103,
          title: "1.3 Graph Representations",
          subChapterContent: (
            <div>
              <h4>
                <strong>1.3 Graph Representations</strong>
              </h4>

              <h5>
                <strong>1.3.1. Adjacency Matrix:</strong>
              </h5>
              <p>
                An adjacency matrix is a 2D array where each cell \( A[i][j] \)
                is 1 if there is an edge from vertex \( i \) to vertex \( j \),
                and 0 otherwise.
              </p>
              <div>
                <strong>Undirected Graph Example:</strong>
                <Graphe nodes={"A,B,B,C,C,D,D,A,A,C"} link={"--"} />
                <strong>Adjacency Matrix:</strong>
                <pre>{`
                    A  B  C  D
                  A [0, 1, 1, 1]
                  B [1, 0, 1, 0]
                  C [1, 1, 0, 1]
                  D [1, 0, 1, 0]
                `}</pre>
              </div>
              <div>
                <strong>Directed Graph Example:</strong>
                <Graphe nodes={"A,B,B,C,C,D,D,A,A,C"} link={"->"} />
                <strong>Adjacency Matrix:</strong>
                <pre>{`
                    A  B  C  D
                  A [0, 1, 1, 0]
                  B [0, 0, 1, 0]
                  C [0, 0, 0, 1]
                  D [1, 0, 0, 0]
                `}</pre>
              </div>
              <br />

              <h5>
                <strong>1.3.2. Adjacency List:</strong>
              </h5>
              <p>
                An adjacency list is a collection where each vertex has a list
                of vertices it is directly connected to by an edge.
              </p>
              <div>
                <strong>Undirected Graph Example:</strong>
                <Graphe nodes={"A,B,B,C,C,D,D,A,A,C"} link={"--"} />
                <strong>Adjacency List:</strong>
                <pre>{`
                  A: [B, C, D]
                  B: [A, C]
                  C: [A, B, D]
                  D: [A, C]
                `}</pre>
              </div>
              <div>
                <strong>Directed Graph Example:</strong>
                <Graphe nodes={"A,B,B,C,C,D,D,A,A,C"} link={"->"} />
                <strong>Adjacency List:</strong>
                <pre>{`
                  A: [B, C]
                  B: [C]
                  C: [D]
                  D: [A]
                `}</pre>
              </div>
              <br />

              <h5>
                <strong>1.3.3. Incidence Matrix:</strong>
              </h5>
              <p>
                An incidence matrix is a 2D array where rows represent vertices
                and columns represent edges. Each cell is 1 if the vertex is
                incident to the edge, and 0 otherwise.
              </p>
              <div>
                <strong>Undirected Graph Example:</strong>
                <Graphe nodes={"A,B,B,C,C,D,D,A,A,C"} link={"--"} />
                <strong>Incidence Matrix:</strong>
                <pre>{`
                      E1 E2 E3 E4 E5
                    A [1, 0, 1, 1, 0]
                    B [1, 1, 0, 0, 0]
                    C [0, 1, 1, 0, 1]
                    D [0, 0, 0, 1, 1]
                `}</pre>
              </div>
              <div>
                <strong>Directed Graph Example:</strong>
                <Graphe nodes={"A,B,B,C,C,D,D,A,A,C"} link={"->"} />
                <strong>Incidence Matrix:</strong>
                <pre>{`
                      E1 E2 E3 E4 E5
                    A [1, 0, 1, 0, 0]
                    B [0, 1, 0, 0, 0]
                    C [0, 0, 1, 1, 1]
                    D [1, 0, 0, 1, 0]
                `}</pre>
              </div>
              <br />
            </div>
          ),
        },
      ],
    },
  ],
  //fin
  path: "/courses/thg/learn",
  quiz: "/courses/thg/quiz", // quiz route will redirect to the next page if finished (congrats on every finish)
  next: "/courses/completed_path",
};
