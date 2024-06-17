import { Card, FormControl, Input, InputLabel } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  setGenerationsCount,
  setPopulationsCount,
} from "../../stateSlices/trucksSlice";

function FormDataDisplay() {
  const goods = useSelector((state) => state.trucks.goods);
  const generationsCount = useSelector(
    (state) => state.trucks.generationsCount
  );
  const populationsCount = useSelector(
    (state) => state.trucks.populationsCount
  );
  const trucks = useSelector((state) => state.trucks.trucks);
  const dispatch = useDispatch();

  function handleGenerations(e) {
    if (isNaN(e.target.value)) {
      return;
    }
    dispatch(
      setGenerationsCount(
        +e.target.value % 2 == 0 ? +e.target.value : +e.target.value + 1
      )
    );
  }

  function handlePopulations(e) {
    if (isNaN(e.target.value)) {
      return;
    }
    dispatch(
      setPopulationsCount(
        +e.target.value >= 1 ? +e.target.value : -e.target.value
      )
    );
  }

  return (
    <div className="">
      <Card className="text-center p-5 my-5 w-fit mx-auto ">
        <h1 className="!text-blue-400 font-bold">
          Are you sure this is the data you want to submit?
        </h1>
      </Card>

      <Card className="py-10 px-20 flex flex-row gap-6">
        <Card className="!shadow-sm mt-5 !bg-blue-300 px-5 py-3 min-w-[25rem]">
          <div className="max-h-[50dvh] overflow-y-auto">
            {Array.isArray(goods) &&
              goods.map((item, index) => {
                return (
                  <Card
                    key={index}
                    className="px-5 mr-5 py-3 flex flex-row justify-around items-center mt-5"
                  >
                    <div>
                      <p className="font-semibold text-blue-400">Name: </p>
                      <p className="font-semibold text-blue-400">Weight: </p>
                      <p className="font-semibold text-blue-400">Quantity: </p>
                    </div>
                    <div>
                      <p>{item[0]}</p>
                      <p>{item[1]}</p>
                      <p>{item[2]}</p>
                    </div>
                  </Card>
                );
              })}
          </div>
        </Card>

        <Card className="!shadow-sm mt-5 !bg-blue-300 px-5 py-3 min-w-[25rem]">
          <div className="max-h-[50dvh] overflow-y-auto">
            {Array.isArray(trucks) &&
              trucks.map((item, index) => {
                return (
                  <Card
                    key={index}
                    className="px-5 py-3 mr-5 flex flex-row justify-around items-center mt-5"
                  >
                    <div>
                      <p className="font-semibold text-blue-400">Name: </p>
                      <p className="font-semibold text-blue-400">Capacity: </p>
                    </div>
                    <div>
                      <p>{item.name}</p>
                      <p>{item.capacity}</p>
                    </div>
                  </Card>
                );
              })}
          </div>
        </Card>
      </Card>

      <Card className="!bg-blue-300 my-10 mx-20 min-w-[25rem] py-3 px-5">
        <div className="max-h-[50dvh] px-5 py-3 overflow-y-auto bg-white rounded-lg">
          <h3 className="font-bold text-lg p-3">
            This data is important for genetic solve
          </h3>

          <div className="p-3">
            <FormControl className="!w-full">
              <InputLabel htmlFor="genertion">
                Generations count{" "}
                <strong className="!text-red-600">* Even Numbers</strong>
              </InputLabel>
              <Input
                id="genertion"
                className="w-full"
                value={generationsCount}
                onChange={handleGenerations}
                onBlur={(e) =>
                  e.target.value == 0 ? dispatch(setGenerationsCount(50)) : null
                }
              />
            </FormControl>

            <FormControl className="!w-full !mt-4">
              <InputLabel htmlFor="population">Populations count</InputLabel>
              <Input
                id="population"
                className="w-full"
                value={populationsCount}
                onChange={handlePopulations}
                onBlur={(e) =>
                  e.target.value == 0 ? dispatch(setPopulationsCount(50)) : null
                }
              />
            </FormControl>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default FormDataDisplay;
