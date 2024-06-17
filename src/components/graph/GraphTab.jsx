import { useSelector } from "react-redux";
import { HashLoader } from "react-spinners";
import Graph from "./Graph";
import GraphAlgorithms from "./GraphAlgorithms";
import GraphGenetic from "./GraphGenetic";
import GraphProblem from "./GraphProblem";

function GraphTab() {
  const responseErr = useSelector((state) => state.graph.responseErr);
  const isSolving = useSelector((state) => state.graph.isSolving);

  return (
    <div
      id="graph"
      className={`transition-all absolute py-6 overflow-auto h-full translate-y-0 -rotate-0 z-[100] opacity-1 duration-1000 w-full `}
    >
      <div className="grid grid-cols-2 py-4 p-8">
        <div className="py-4">
          <h1 className="mt-10 font-bold text-blue-400 text-3xl text-center mb-4 mx-auto">
            Chose the Problem
          </h1>
          <GraphProblem />
        </div>

        <div className="py-4">
          <h1 className="mt-10 font-bold text-blue-400 text-3xl text-center mb-4 mx-auto">
            Chose the solution way
          </h1>
          <GraphAlgorithms />
        </div>

        <GraphGenetic />
      </div>
      {isSolving && (
        <div className="flex justify-center items-center w-full py-6">
          <HashLoader className="custom-animation" />
        </div>
      )}
      {responseErr && (
        <p className="bg-red-400 text-white py-3 px-2 rounded-lg my-6 w-[80%] mx-auto">
          {responseErr}
        </p>
      )}

      <Graph />
    </div>
  );
}

export default GraphTab;
