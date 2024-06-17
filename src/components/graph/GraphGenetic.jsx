import { FormControl, Input, InputLabel } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  setGenerationsCount,
  setPopulations,
} from "../../stateSlices/graphSlice";

function GraphGenetic() {
  const generationsCount = useSelector((state) => state.graph.generationsCount);
  const populationsCount = useSelector((state) => state.graph.populationsCount);
  const dispatch = useDispatch();

  function handleGenerations(e) {
    if (isNaN(e.target.value)) {
      return;
    }
    dispatch(
      setGenerationsCount(
        +e.target.value % 2 == 0 ? +e.target.value : +e.target.value+1
      )
    );
  }

  function handlePopulations(e) {
    if (isNaN(e.target.value)) {
      return;
    }
    dispatch(
      setPopulations(+e.target.value > 1 ? +e.target.value : -e.target.value)
    );
  }

  return (
    <div className="col-start-1 col-end-3 space-y-5 py-3">
      <FormControl className="!w-full">
        <InputLabel id="gen">Generations Count <strong className="!text-red-600">* Even Numbers</strong></InputLabel>
        <Input
          id="gen"
          className="w-full"
          value={generationsCount}
          onChange={handleGenerations}
          onBlur={(e) =>
            e.target.value == 0 ? dispatch(setGenerationsCount(50)) : null
          }
        />
      </FormControl>

      <FormControl className="!w-full">
        <InputLabel id="pop">Populations Count</InputLabel>
        <Input
          id="pop"
          className="w-full"
          value={populationsCount}
          onChange={handlePopulations}
          onBlur={(e) =>
            e.target.value == 0 ? dispatch(setPopulations(75)) : null
          }
        />
      </FormControl>
    </div>
  );
}

export default GraphGenetic;
