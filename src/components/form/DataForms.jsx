import DataDisplay from "./DataDisplay";
import GoodsSlide from "./GoodsSlide";
import Slide from "./Slide";
import TruckSlide from "./TruckSlide";

function DataForms() {
  return (
    <div
      id="data"
      className={`transition-all flex flex-col justify-center items-center h-full duration-1000 "translate-y-0 -rotate-0 z-[100] opacity-1`}
    >
      <Slide
        stage={0}
        satisfyClass="opacity-1 translate-x-0 rotate-0"
        unSatisfayClass="opacity-0 -translate-x-96 -rotate-12"
        additionalClassess="absolute z-[100] h-full overflow-auto transition-all duration-1000 ease-out"
      >
        <TruckSlide />
      </Slide>

      <Slide
        stage={1}
        satisfyClass="opacity-1 z-[101] translate-x-0 rotate-0"
        unSatisfayClass="opacity-0 z-[99] -translate-x-96 -rotate-12"
        additionalClassess="absolute transition-all h-full overflow-auto duration-1000 ease-out"
      >
        <GoodsSlide />
      </Slide>

      <DataDisplay />
    </div>
  );
}

export default DataForms;
