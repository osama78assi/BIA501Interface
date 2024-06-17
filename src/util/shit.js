export function dfs(node, graph, callback) {
  const visited = {};

  function helper(currentNode) {
    if (!visited[currentNode]) {
      visited[currentNode] = true;
      for (let node1 of graph[currentNode] || []) {
        const nextNode = node1[0];
        const thereIsStop = callback?.(nextNode, currentNode); // Call the function conditionally, pass the current node and parent
        // In some conditions you want to stop traversal
        if (thereIsStop) return;
        if (!visited[nextNode]) helper(nextNode); // Pruning in some way
      }
    }
  }

  helper(node);
}