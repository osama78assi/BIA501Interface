import { Button } from "@mui/material";
import TruckForm from "./TruckForm";
import { useDispatch, useSelector } from "react-redux";
import { setStage } from "../../stateSlices/formSlice";

function TruckSlide() {
  const trucks = useSelector((state) => state.trucks.trucks);
  const stage = useSelector((state) => state.form.stage);
  const dispatch = useDispatch()

  return (
    <>
      <div
        className={`${
          stage !== 0 ? "absolute top-0 bottom-0 w-full z-[100]" : ""
        }`}
      />
      <h1 className="mt-10 font-bold text-blue-400 text-3xl text-center">
        Enter your data then proceed
      </h1>
      <TruckForm />
      <div className="mx-auto w-fit mt-10">
        <Button
          className="w-52 max-w-52 h-16 max-h-16 !text-xl "
          onClick={() => dispatch(setStage(1))}
          disabled={!trucks.length}
        >
          Commit Trucks
        </Button>
      </div>
    </>
  );
}

export default TruckSlide;
