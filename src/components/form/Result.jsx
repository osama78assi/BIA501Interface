import { useSelector } from "react-redux";
import Goods from "./Goods";
import Truck from "./Truck";

function Result() {
  const {
    trucks,
    goods,
    populationsCount = 0,
    generationsCount = 0,
  } = useSelector((state) => state.trucks.solution);
  console.log(trucks, goods)
  return (
    <div id="result-solve">
      <div className="w-full p-3">
        <h3 className="pl-5 text-3xl my-5">Solution</h3>
        <p className="pl-3 text-lg">
          {generationsCount == 0
            ? "The solution done using Dynamic Programming"
            : `The solution done using Genetic Algorithm with populations of ${populationsCount} and generations of ${generationsCount}`}
        </p>
      </div>

      <div className="block w-full h-[1px] bg-gray-400 my-4" />

      <div className="w-full p-3">
        <h3 className="pl-5 text-3xl my-5">Trucks</h3>
        <div className="divide-y-2 divide-gray-400">
          {trucks.map((truck, i) => (
            <Truck key={`${truck.truckName}-${i}`} truck={truck} />
          ))}
        </div>
      </div>

      <div className="block w-full h-[1px] bg-gray-400 my-4" />

      <div className="w-full p-3 divide-gray-400">
        <h3 className="pl-5 text-3xl my-5">Goods</h3>
        {goods.length ? (
          <div className="divide-y-2 divide-gray-400">
            {goods.map((item, i) => (
              <Goods key={`${item[0]}-${i}`} item={item} />
            ))}
          </div>
        ) : (
          <p className="font-semibold pl-4 text-l">No goods left...</p>
        )}
      </div>
    </div>
  );
}

export default Result;
