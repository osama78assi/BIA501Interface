import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGraph } from "../../stateSlices/graphSlice";
import Header from "./Header";

function GraphDashboardHeader({ onClose, onType, search }) {
  const graph = useSelector((state) => state.graph.graph);
  const path = useSelector((state) => state.graph.path);
  const isSolving = useSelector((state) => state.graph.isSolving);
  const nodes = useSelector((state) => state.graph.nodes);

  const [nodeToAdd, setNodeToAdd] = useState("");
  const [err, setErr] = useState("");
  // const nodes = Object.keys(graph);
  const dispatch = useDispatch();

  // validate node name
  function handleNodeName(e) {
    if (/\w/.test(e.target.value[e.target.value.length - 1])) {
      setNodeToAdd(e.target.value);
    }
  }

  // Add node to the graph
  function handleAddNode() {
    if (nodeToAdd.length) {
      if (!nodes.find((val) => val == nodeToAdd)) {
        const graphCopy = JSON.parse(JSON.stringify(graph));
        graphCopy[nodeToAdd] = []; // this node ready to connect to other nodes
        dispatch(setGraph(graphCopy));
        setErr("");
        setNodeToAdd("");
      } else {
        setErr("Node name already existed");
      }
    } else {
      setErr("Node name can't be empty");
    }
  }

  // More user-friendly
  function handleEnter(e) {
    if (e.key === "Enter") {
      handleAddNode();
      return;
    }
  }

  return (
    <Header handleClose={onClose} title="Dashboard">
      <input
        disabled={!nodes.length}
        type="text"
        name="search-nodes"
        id="search-nodes"
        placeholder="Search for nodes by name"
        value={search}
        onChange={(e) => onType(e)}
      />
      <div className="add-node">
        {path.length ? (
          <span>Clear the path first</span>
        ) : err ? (
          <span>{err}</span>
        ) : null}
        <input
          type="text"
          name="add-node"
          id="add-node"
          placeholder="Node name to add"
          value={nodeToAdd}
          onChange={handleNodeName}
          onKeyUp={handleEnter}
          disabled={isSolving || path.length}
        />
        <button onClick={handleAddNode} disabled={isSolving || path.length}>
          Add
        </button>
      </div>
    </Header>
  );
}

export default GraphDashboardHeader;
