import { useSelector } from "react-redux";
import Result from "./Result";
import TruckSolutionType from "./TruckSolutionType";
import TruckSolveBtn from "./TruckSolveBtn";
import { HashLoader } from "react-spinners";

function FillTrucks() {
  const isSolving = useSelector((state) => state.trucks.isSolving);
  const err = useSelector((state) => state.trucks.err);
  const solution = useSelector((state) => state.trucks.solution);

  return (
    <div
      id="result"
      className={`transition-all overflow-auto px-6 w-full h-full duration-1000 translate-y-0 -rotate-0 z-[100] opacity-1`}
    >
      <h1 className="mt-10 font-bold text-blue-400 text-3xl text-center mb-4 mx-auto">
        Chose the way of solving
      </h1>
      <TruckSolutionType />
      <TruckSolveBtn />

      <div className="w-full h-[1px] bg-gray-400 my-3 basis-full" />

      {isSolving && (
        <div className="flex justify-center items-center w-full">
          <HashLoader className="custom-animation" />
        </div>
      )}
      {err && (
        <p className="bg-red-400 text-white py-3 px-2 rounded-lg">{err}</p>
      )}
      {!isSolving && solution?.trucks && <Result />}
    </div>
  );
}

export default FillTrucks;
