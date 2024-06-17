import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSolveWay } from "../../stateSlices/graphSlice";
import Btn from "../ui/Btn";
import BtnsContainer from "../ui/BtnsContainer";

function GraphAlgorithms() {
  const problem = useSelector((state) => state.graph.problem);
  const solveWay = useSelector((state) => state.graph.solveWay);
  const dispatch = useDispatch();
  const isSolving = useSelector((state) => state.graph.isSolving);

  function handleClickAStar() {
    if (solveWay != "A*") dispatch(setSolveWay("A*"));
  }

  function handleClickGenetic() {
    if (solveWay != "genetic") dispatch(setSolveWay("genetic"));
  }

  useLayoutEffect(() => {
    if (problem == "TSP") {
      dispatch(setSolveWay("genetic"));
    }
  }, [problem]);

  return (
    <BtnsContainer>
      <Btn
        active={solveWay == "A*"}
        disabled={isSolving || problem != "shortestPath"}
        onClick={handleClickAStar}
      >
        A*
      </Btn>
      <Btn
        active={solveWay == "genetic"}
        disabled={isSolving}
        onClick={handleClickGenetic}
      >
        Genetic
      </Btn>
    </BtnsContainer>
  );
}

export default GraphAlgorithms;
