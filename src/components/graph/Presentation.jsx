import { memo, useEffect, useLayoutEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurSnapshot, setErr } from "../../stateSlices/graphSlice";
import { isDirect, isValidGraph } from "../../util/helperGraph";
import Edges from "./Edges";
import Empty from "./Empty";
import GraphError from "./GraphError";
import NextSnapshot from "./NextSnapshot";
import Nodes from "./Nodes";
import PrevSnapshot from "./PrevSnapshot";

// Really the graph distributed on outline of a circle
const Presentation = memo(function Presentation({ elementsCount }) {
  const graph = useSelector((state) => state.graph.graph);
  const edges = useSelector((state) => state.graph.edges);
  const error = useSelector((state) => state.graph.error);
  const nodeSize = useSelector((state) => state.graph.nodeSize);
  const lengthForSide = useSelector((state) => state.graph.lengthForSide);
  const filter = useSelector((state) => state.graph.filter);
  const nodes = useSelector((state) => state.graph.nodes);
  const curSnapshot = useSelector((state) => state.graph.curSnapshot);
  const path = useSelector((state) => state.graph.path);

  const dispatch = useDispatch();
  // To make the component more flexible
  const graphRef = useRef(null);
  // Get nodes count
  const nodeLen = nodes.length;
  // Maximum edges mustn't exceed n * (n-1) / 2
  const edgesCount = edges.length;
  const isValid = isValidGraph(graph); // check if the graph is valid like (A -> B) and B isn't found
  // In our task the graph is undirected
  const notDirect = isDirect(graph, nodes);

  // Valdiation
  useLayoutEffect(() => {
    if (edgesCount > (nodeLen * (nodeLen - 1)) / 2) {
      dispatch(setErr("Maximum edges mustn't exceed n * (n-1) / 2"));
      // for development
      // throw new Error("Maximum edges mustn't exceed n * (n-1)");
    } else if (!isValid) {
      dispatch(setErr("There is a missing node"));
      dispatch(setErr("There is a missing node"));
      // throw new Error("There is a missing node")
    } else if (!notDirect) {
      dispatch(
        setErr(
          "The graph either direct or there is a lack of nodes (there is a node connected to undefined node)"
        )
      );
      // throw new Error(
      //   "The graph either direct or there is a lack of nodes (there is a node connected to undefined node)"
      // );
    } else {
      dispatch(setErr(""));
    }
  }, [edgesCount, nodeLen, notDirect]);

  // passing the important info for css file by the css variabels
  useEffect(() => {
    if (graphRef.current) {
      graphRef.current.style.setProperty("--node-size", `${nodeSize}px`);
      graphRef.current.style.setProperty("--nodes-count", nodeLen);
      graphRef.current.style.setProperty(
        "--length-for-node",
        `${lengthForSide}px`
      );
    }
  });

  if (error)
    return (
      <div className="graph-all">
        <div className="graph-container" data-count={elementsCount}>
          <GraphError>{error}</GraphError>
        </div>

        <div className="graph-pagination">
          <PrevSnapshot dis={true} />
          <span>Snapshot {curSnapshot + 1}</span>
          <NextSnapshot dis={true} />
        </div>
      </div>
    );

  if (!nodeLen) {
    return (
      <div className="graph-all">
        <div
          ref={graphRef}
          className="graph-container"
          data-count={elementsCount}
        >
          <Empty>No graph yet</Empty>
        </div>

        <div className="graph-pagination">
          <PrevSnapshot dis={true} />
          <span>Snapshot {curSnapshot + 1}</span>
          <NextSnapshot dis={true} />
        </div>
      </div>
    );
  }

  return (
    <div className="graph-all">
      <div
        ref={graphRef}
        className="graph-container"
        data-count={elementsCount}
      >
        <div className="nodes-container">
          <Nodes />

          {filter == "graph" && <Edges />}
        </div>
      </div>

      <div className="graph-pagination">
        <PrevSnapshot
          dis={curSnapshot == 0}
          handleSnapshot={() => dispatch(setCurSnapshot(curSnapshot - 1))}
        />
        <span>
          Snapshot {curSnapshot + 1} / {path.length + 1}{" "}
          <span className="solution-title">* Solution will be here</span>
        </span>
        <NextSnapshot
          dis={curSnapshot == path.length}
          handleSnapshot={() => dispatch(setCurSnapshot(curSnapshot + 1))}
        />
      </div>
    </div>
  );
});

export default Presentation;
