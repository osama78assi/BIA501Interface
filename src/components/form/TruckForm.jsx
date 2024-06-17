import { PlusOne } from "@mui/icons-material";
import {
  Button,
  Card,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  addTruck,
  deleteAllTrucks,
  deleteTruck,
  updateTruckCapacity,
  updateTruckName,
} from "../../stateSlices/trucksSlice";

function TruckForm() {
  const trucks = useSelector((state) => state.trucks.trucks);

  const dispatch = useDispatch();

  function handleUpdateCapacity(event, index) {
    if (isNaN(event.target.value)) {
      return;
    }
    dispatch(updateTruckCapacity(index, event.target.value));
  }

  return (
    <div>
      <Card className="text-center p-5 my-5 w-fit mx-auto ">
        <h1 className="!text-blue-400 font-bold">Trucks</h1>
      </Card>
      <Card className="py-10 px-20">
        <FormGroup>
          <FormControl>
            <div className="flex-row flex items-center gap-16 select-none justify-center">
              <p>Add a Truck</p>
              <Button
                onClick={() =>
                  dispatch(
                    addTruck({
                      name: `Truck ${trucks.length + 1}`,
                      capacity: 5,
                    })
                  )
                }
                className="!bg-blue-300 py-1 px-3 text-black text-lg font-bold rounded-full"
              >
                <PlusOne />
              </Button>
            </div>
          </FormControl>
        </FormGroup>
        <Card className="!shadow-sm mt-5 !bg-blue-300 px-5 py-3 min-w-[60dvw]">
          <div className="flex flex-col gap-2 justify-between items-stretch flex-wrap max-h-[50dvh] overflow-x-scroll">
            {Array.isArray(trucks) &&
              trucks.map((item, index) => {
                return (
                  <Card
                    key={index}
                    className="px-5 py-3 flex flex-row justify-between items-center my-5 gap-3"
                  >
                    <div className="flex">
                      <div>
                        <p className="font-semibold text-blue-400">
                          Name: <span className="font-normal">{item.name}</span>
                        </p>
                        <p className="font-semibold text-blue-400">
                          Capacity:{" "}
                          <span className="font-normal">{item.capacity}</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-row justify-between items-center gap-2">
                      <FormControl>
                        <InputLabel htmlFor={`truck-name-${index}`}>Name</InputLabel>
                        <Input
                          id={`truck-name-${index}`}
                          className="max-w-24"
                          value={item.name}
                          onChange={(e) =>
                            dispatch(updateTruckName(index, e.target.value))
                          }
                          onBlur={(e) =>
                            e.target.value == ""
                              ? dispatch(
                                  updateTruckName(index, `Truck ${index + 1}`)
                                )
                              : null
                          }
                        />
                      </FormControl>
                      <FormControl>
                        <InputLabel htmlFor={`capacity-${index}`}>Capacity</InputLabel>
                        <Input
                          id={`capacity-${index}`}
                          className="max-w-24"
                          onChange={(e) => handleUpdateCapacity(e, index)}
                          onBlur={(e) =>
                            e.target.value == 0
                              ? dispatch(updateTruckCapacity(index, 5))
                              : null
                          }
                          value={item.capacity}
                        />
                      </FormControl>
                      <Button onClick={() => dispatch(deleteTruck(index))}>
                        Delete
                      </Button>
                    </div>
                  </Card>
                );
              })}
          </div>
        </Card>
        <div className="mx-auto w-fit mt-10">
          <Button
            className="w-52 max-w-52 h-16 max-h-16 !text-lg "
            onClick={() => dispatch(deleteAllTrucks())}
          >
            Delete All
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default TruckForm;
