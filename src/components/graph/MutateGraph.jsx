import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurSnapshot,
  setPath,
  setShowDashboard,
  setShowSolve,
} from "../../stateSlices/graphSlice";

// Button responsible of show the create/edit the graph
const MutateGraph = memo(function MutateGraph() {
  const graph = useSelector((state) => state.graph.graph);
  const showDashboard = useSelector((state) => state.graph.showDashboard);
  const path = useSelector((state) => state.graph.path);
  const showSolve = useSelector((state) => state.graph.showSolve);
  const dispatch = useDispatch();

  // WARNING: this when the graph is taken by props
  // const [content, setContent] = useState("");
  // const initialRender = useRef(true);

  // useEffect(() => {
  //   // if (!initialRender.current) {
  //     // if (!abslouteEdges.length) setContent("Create Graph");
  //     // else setContent("Mutate Graph");
  //   // }
  //   // initialRender.current = false;
  // }, [abslouteEdges]);

  function handleShowDashboard() {
    if (!showDashboard) {
      dispatch(setShowDashboard(true));
    }
  }

  function handleShowSolve() {
    if (!showSolve) {
      dispatch(setShowSolve(true));
    }
  }

  function handleClearPath() {
    if (!path.length) return;
    dispatch(setPath([]));
    // Navigate to snapshot 0 when the user currently in any snapshot
    dispatch(setCurSnapshot(0));
  }

  return (
    <div className="mutate-graph">
      <button
        onClick={handleShowDashboard}
        disabled={showDashboard || showSolve}
      >
        {/* {content} */}
        {!Object.keys(graph).length ? "Create graph" : "Modify graph"}
      </button>
      <button
        className="traversal-btn"
        onClick={handleShowSolve}
        disabled={showDashboard || showSolve}
      >
        Traversal
      </button>
      <button
        className="clear-btn"
        onClick={handleClearPath}
        disabled={showDashboard || !path.length}
      >
        Clear path
      </button>
    </div>
  );
});

export default MutateGraph;
