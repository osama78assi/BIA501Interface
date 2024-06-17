import { KeyboardReturn } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setLevel, setStage } from "../../stateSlices/formSlice";
import { manipulateReady } from "../../stateSlices/trucksSlice";
import FormDataDisplay from "./FormDataDisplay";

function DataDisplay() {
  const stage = useSelector((state) => state.form.stage);
  const dispatch = useDispatch();

  return (
    <div
      className={`absolute transition-all duration-1000 h-full overflow-auto ease-out ${
        stage === 2
          ? "opacity-1 z-[101] translate-x-0 rotate-0"
          : "opacity-0 z-[99] -translate-x-96 -rotate-12"
      }`}
    >
      <div
        className={`${
          stage !== 2 ? "absolute top-0 bottom-0 w-full z-[100]" : null
        }`}
      ></div>
      <FormDataDisplay />
      <div className="flex flex-row justify-between">
        <div className="mx-auto w-fit mt-10">
          <Button
            className="w-52 max-w-52 h-16 max-h-16 !text-3xl"
            onClick={() => dispatch(setStage(1)) && dispatch(manipulateReady(false))}
          >
            <KeyboardReturn className="!fill-blue-600 !size-8" />
          </Button>
        </div>
        <div className="mx-auto w-fit mt-10">
          <Button
            className="w-52 max-w-52 h-16 max-h-16 !text-xl "
            onClick={() => dispatch(setLevel(1)) && dispatch(manipulateReady(true))}
          >
            Fill
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DataDisplay;
