
import { useSelector } from "react-redux";

function CheckNode({ node, dis, onCheck, val }) {
  const isSolving = useSelector((state) => state.graph.isSolving);
  return (
    <div>
      <label htmlFor={`check-${node}`}>Node {node}</label>
      <input
        type="checkbox"
        onChange={() => onCheck((existNode) => existNode == node ? "" : node)}
        name={`check-${node}`}
        checked={val == node}
        id={`check-${node}`}
        disabled={dis || isSolving}
      />
    </div>
  );
}

export default CheckNode;
