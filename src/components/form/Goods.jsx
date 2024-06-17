function Goods({ item }) {
  // ["", weight, quantity]
  const [name, weight, quantity] = item;

  return (
    <div className={`w-[80%] p-2 mx-auto space-y-3`}>
      <div>
        <h5 className="font-semibold text-xl mb-1">{name} details: </h5>
        <div className="flex flex-col pl-4">
          <div>
            <span className="font-bold text-blue-400 mr-3">Weight: </span>
            <span className="!text-black">{weight}</span>
          </div>
          <div>
            <span className="font-bold text-blue-400 mr-3">Quantity: </span>
            <span className="!text-black">{quantity}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Goods;
