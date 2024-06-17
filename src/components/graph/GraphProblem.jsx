import { useDispatch, useSelector } from "react-redux";
import { setProblem } from "../../stateSlices/graphSlice";
import Btn from "../ui/Btn";
import BtnsContainer from "../ui/BtnsContainer";

function GraphProblem() {
  const problem = useSelector((state) => state.graph.problem);
  const solveWay = useSelector((state) => state.graph.solveWay);
  const dispatch = useDispatch();
  const isSolving = useSelector((state) => state.graph.isSolving);

  function handleClickShort() {
    if (problem != "shortestPath") dispatch(setProblem("shortestPath"));
  }

  function handleClickTSP() {
    if (problem != "TSP") dispatch(setProblem("TSP"));
  }

  return (
    <BtnsContainer>
      <Btn
        active={problem == "shortestPath"}
        disabled={isSolving}
        onClick={handleClickShort}
      >
        Find Shortest Path
      </Btn>
      <Btn active={problem == "TSP"} disabled={isSolving} onClick={handleClickTSP}>
        Traversal All the graph
      </Btn>
    </BtnsContainer>
  );
}

export default GraphProblem;
