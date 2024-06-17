import { useDispatch, useSelector } from "react-redux";
import { setSolutionWay } from "../../stateSlices/trucksSlice";
import Btn from "../ui/Btn";
import BtnsContainer from "../ui/BtnsContainer";

function TruckSolutionType() {
  const solutionWay = useSelector((state) => state.trucks.solutionWay);
  const isSolving = useSelector((state) => state.trucks.isSolving);
  const dispatch = useDispatch();

  return (
    <BtnsContainer>
      <Btn
        active={solutionWay == "dp"}
        disabled={isSolving}
        onClick={() => solutionWay != "dp" && dispatch(setSolutionWay("dp"))}
      >
        Dynamic Programming
      </Btn>
      <Btn
        active={solutionWay == "genetic"}
        disabled={isSolving}
        onClick={() =>
          solutionWay != "genetic" && dispatch(setSolutionWay("genetic"))
        }
      >
        Genetic Algorithm
      </Btn>
    </BtnsContainer>
  );
}

export default TruckSolutionType;
