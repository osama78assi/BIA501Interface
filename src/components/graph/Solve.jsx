import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowSolve } from "../../stateSlices/graphSlice";
import { checkConnected } from "../../util/helperGraph";
import CheckNode from "./CheckNode";
import Empty from "./Empty";
import GraphError from "./GraphError";
import Header from "./Header";
import SolveBtn from "./SolveBtn";

function Solve() {
  const graph = useSelector((state) => state.graph.graph);
  const nodes = useSelector((state) => state.graph.nodes);
  const path = useSelector((state) => state.graph.path);
  const isSolving = useSelector((state) => state.graph.isSolving);
  const problem = useSelector((state) => state.graph.problem);
  const edges = useSelector((state) => state.graph.edges);
  const isFull = edges.length == (nodes.length * (nodes.length - 1)) / 2;
  const dispatch = useDispatch();
  // Start point
  const [selectedNode, setSelectedNode] = useState("");
  // All nodes the user want to find
  const [wantedNode, setWantedNode] = useState("");
  const [err, setErr] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.classList.add("show-dashboard");
    }
  }, []);

  // To check if there is a path at least
  useEffect(() => {
    if (wantedNode != "" && selectedNode != "") {
      const isConnected = checkConnected(graph, selectedNode, wantedNode);
      if (!isConnected) {
        setErr("It must has at least single path between start and end!");
      } else {
        setErr("");
      }
      return;
    }
    // Maybe he cleared the path or for any reason check if there is already error then clear it
    setErr("");
  }, [wantedNode, selectedNode, graph]);

  function handleClose() {
    if (ref.current) {
      ref.current.classList.remove("show-dashboard");
      const timer = setTimeout(() => {
        dispatch(setShowSolve(false));
        clearTimeout(timer);
      }, 1000);
    }
  }

  return (
    <div ref={ref} className={`graph-dashboard solve`}>
      <Header title="Find Shortest Path" handleClose={handleClose}>
        <label
          htmlFor="select-node"
          {...(path.length && { "data-path": "Clear the path first" })}
        >
          Select start point
        </label>
        <select
          value={selectedNode}
          onChange={function (e) {
            setSelectedNode(e.target.value);
            setWantedNode("");
          }}
          disabled={!nodes.length || isSolving || path.length}
          name="select-node"
          id="select-node"
        >
          <option value="" disabled={true}>
            Select node
          </option>
          {nodes.map((node) => (
            <option key={`option-${node}`} value={node}>
              The node &quot;{node}&quot;
            </option>
          ))}
        </select>
      </Header>

      {problem == "shortestPath" && (
        <div className="dashboard-body">
          {!nodes.length ? (
            <Empty>No nodes yet create the graph first</Empty>
          ) : (
            <div className="node-details">
              <h1 className="title">
                {selectedNode == ""
                  ? "Select start point first"
                  : "Select end point"}
              </h1>
              {selectedNode != "" &&
                nodes.map(
                  (node) =>
                    node != selectedNode && (
                      <CheckNode
                        key={`check-${node}`}
                        node={node}
                        val={wantedNode}
                        dis={wantedNode && wantedNode != node}
                        onCheck={setWantedNode}
                      />
                    )
                )}
            </div>
          )}
          {err && (
            <GraphError>
              At least there must be single path between start and end
            </GraphError>
          )}
          <SolveBtn
            parentRef={ref}
            wantedNode={wantedNode}
            start={selectedNode}
            dis={err.length}
          />
        </div>
      )}

      {problem == "TSP" && (
        <div className="dashboard-body">
          {!isFull ? (
            <GraphError>Make the graph full first</GraphError>
          ) : (
            <div className="node-details">
              <h1 className="title">The Graph is ready to solve (TSP)</h1>
            </div>
          )}
          <SolveBtn parentRef={ref} start={selectedNode} dis={!isFull || !selectedNode}/>
        </div>
      )}
    </div>
  );
}

export default Solve;
