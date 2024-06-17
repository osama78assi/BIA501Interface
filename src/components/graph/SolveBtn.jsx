import { useDispatch, useSelector } from "react-redux";
import { setShowSolve, solve } from "../../stateSlices/graphSlice";

function SolveBtn({ parentRef, wantedNode, start, dis = false }) {
  const isSolving = useSelector((state) => state.graph.isSolving);
  const dispatch = useDispatch();
  const target = typeof wantedNode == "string" ? wantedNode : null;

  function handleSolve() {
    if (target) dispatch(solve({ start, end: target }));
    else dispatch(solve({ start }));
    if (parentRef.current) {
      parentRef.current.classList.remove("show-dashboard");
    }

    const timer = setTimeout(() => {
      dispatch(setShowSolve(false)); // Rise the solve interface
      clearTimeout(timer);
    }, 1000);
  }

  return (
    <div className="solve-btn-container">
      <button
        onClick={handleSolve}
        className="solve-btn"
        disabled={
          // if there isn't a target or start point or it's solving or disabled by the user
          (target != null ? !target || !start || isSolving : !start) || dis
        }
      >
        Solve
      </button>
      ;
    </div>
  );
}

export default SolveBtn;
