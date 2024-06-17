import { useLayoutEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "../../css/graph.css";
import GraphDashboard from "./GraphDashboard";
import GraphFilter from "./GraphFilter";
import MutateGraph from "./MutateGraph";
import NodesList from "./NodesList";
import Presentation from "./Presentation";
import Solve from "./Solve";

// Represent the whole graph container to not overflow
function Graph({ height = 600 }) {
  const showSolve = useSelector((state) => state.graph.showSolve);
  const showDashboard = useSelector((state) => state.graph.showDashboard);

  const dashboardRef = useRef(null);
  // Keep track of elements count for styling purpose
  // This will be accessed by main pieces only
  const elementsCount = useRef(4);

  useLayoutEffect(() => {
    dashboardRef.current.style.setProperty("--height-dashboard", `${height}px`);
  }, [height]);

  return (
    <div ref={dashboardRef} className="dashboard">
      <GraphFilter elementsCount={elementsCount} />
      {showDashboard && <GraphDashboard />}
      {showSolve && <Solve />}
      <Presentation elementsCount={elementsCount} />
      <NodesList elementsCount={elementsCount} />
      <MutateGraph />
    </div>
  );
}

export default Graph;
