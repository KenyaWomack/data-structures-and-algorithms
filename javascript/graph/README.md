# Challenge: List Insertions

## Author Kenya Womack

## Problem Domain

Implementing a graph data structure with an adjacency list representation, including methods to add nodes, add edges, retrieve nodes and their neighbors, and calculate the size of the graph.

## Approach & Efficiency

Big O
Time: O(1)
Space: determined by the number of nodes and edges in the graph

## Solution

### Append :

1. Create a class called "Graph" that has an adjacencyList property, initially set to an empty map.
2. Implement the "addNode" method:
    * Accept a value as an argument.
    * Check if the value already exists in the adjacencyList. If not, add it as a key with an empty array as its value.
    * Return the value.
3. Implement the "addEdge" method:
    * Accept two nodes, node1 and node2, as arguments, and an optional weight (default to 0).
    * Check if both node1 and node2 exist in the adjacencyList. If not, throw an error.
    * Retrieve the arrays of neighbors for node1 and node2 from the adjacencyList.
    * Add an object to each array, representing the connection to the other node, including the node value and weight.
4. Implement the "getNodes" method:
    * Return an array of all keys in the adjacencyList (representing all nodes in the graph).
5. Implement the "getNeighbors" method:
    * Accept a node as an argument.
    * Check if the node exists in the adjacencyList. If not, throw an error.
    * Return the array of neighbors for the given node.
6. Implement the "size" method:
    * Return the number of keys in the adjacencyList (representing the total number of nodes in the graph).

## Whiteboard Process

![lab35whiteboard](/whiteboard35.png)

## Collaborator

Coriana Williams, AI for test
