import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../stateSlices/graphSlice";

// Filter for only nodes or node with edges
const GraphFilter = memo(function GraphFilter({ elementsCount }) {
  const filter = useSelector((state) => state.graph.filter);
  const dispatch = useDispatch();

  function handleClick(e) {
    if (e.target.className.includes("graph-btn")) {
      if (!e.target.className.includes("active")) {
        if (filter == "graph") dispatch(setFilter("nodes"));
        else if (filter == "nodes") dispatch(setFilter("graph"));
      }
    }
  }

  return (
    <div
      className="graph-filter"
      data-count={elementsCount}
      onClick={handleClick}
    >
      <button className={`graph-btn ${filter == "graph" ? "active" : ""}`}>
        Graph
      </button>
      <button className={`graph-btn ${filter == "nodes" ? "active" : ""}`}>
        Nodes
      </button>
    </div>
  );
});

export default GraphFilter;
