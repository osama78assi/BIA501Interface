import { useSelector } from "react-redux";
import Node from "./Node";

function Nodes() {
  const nodesStyle = useSelector((state) => state.graph.nodesStyle)
  const path = useSelector((state) => state.graph.path)
  const curSnapshot = useSelector((state) => state.graph.curSnapshot)


  if (curSnapshot == 0) {
    return nodesStyle.map(function ({ styling, node }) {
      return <Node key={node} node={node} styling={styling} />;
    });
  }

  // To get visited node in order
  const visited = {};
  path.forEach((node, i) => {
    if (i < curSnapshot) visited[node] = 1;
  });

  return nodesStyle.map(function ({ styling, node }) {
    return (
      <Node key={node} node={node} visited={visited[node]} styling={styling} />
    );
  });
}

export default Nodes;
