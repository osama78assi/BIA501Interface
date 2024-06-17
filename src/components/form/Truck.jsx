function Truck({ truck }) {
  const { truckName, truckCapacity, payload, totalWeight, totalQuantity } =
    truck;

  return (
    <div className={`w-[80%] p-2 mx-auto space-y-3`}>
      <div>
        <h5 className="font-semibold text-xl mb-1">
          Truck {truckName} details:{" "}
        </h5>
        <div className="flex flex-col pl-4">
          <div>
            <span className="font-bold text-blue-400 mr-3">Capacity: </span>
            <span className="!text-black">{truckCapacity}</span>
          </div>
          <div>
            <span className="font-bold text-blue-400 mr-3">Total Weight: </span>
            <span className="!text-black">{totalWeight}</span>
          </div>
          <div>
            <span className="font-bold text-blue-400 mr-3">
              Total Quantity:{" "}
            </span>
            <span className="!text-black">{totalQuantity}</span>
          </div>
        </div>
      </div>

      <div>
        <h5 className="font-semibold text-xl">Truck {truckName} payload: </h5>
        <div className="divide-y-2 divide-gray-400">
          {payload.map((goods, i) => (
            <div
              key={`${i}-${goods[0]}`}
              className={`pt-3 ${
                i != payload.lenth - 1 ? "mb-1" : ""
              } w-[95%] mx-auto`}
            >
              <div>
                <span className="font-bold text-blue-400 mr-3">Name: </span>
                <span className="!text-black">{goods[0]}</span>
              </div>
              <div>
                <span className="font-bold text-blue-400 mr-3">Weight: </span>
                <span className="!text-black">{goods[1]}</span>
              </div>
              <div>
                <span className="font-bold text-blue-400 mr-3">
                  {" "}
                  Quantity:{" "}
                </span>
                <span className="!text-black">{goods[2]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Truck;
