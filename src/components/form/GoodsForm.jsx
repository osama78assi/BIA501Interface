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
  addGoods,
  deleteAllGoods,
  deleteGoods,
  updateGoodsName,
  updateGoodsQuantity,
  updateGoodsWeight,
} from "../../stateSlices/trucksSlice";

function GoodsForm() {
  const goods = useSelector((state) => state.trucks.goods);

  const dispatch = useDispatch();

  function handleUpdateWeight(event, index) {
    if (isNaN(event.target.value)) {
      return;
    }
    dispatch(updateGoodsWeight(index, event.target.value));
  }

  function handleUpdateQuantity(event, index) {
    if (isNaN(event.target.value)) {
      return;
    }
    dispatch(updateGoodsQuantity(index, event.target.value));
  }

  return (
    <div>
      <Card className="text-center p-5 my-5 w-fit mx-auto ">
        <h1 className="!text-blue-400 font-bold">Goods</h1>
      </Card>
      <Card className="py-10 px-20">
        <FormGroup>
          <FormControl>
            <div className="flex-row flex items-center gap-16 select-none justify-center">
              <p>Add Some Goods</p>
              <Button
                onClick={() =>
                  dispatch(
                    addGoods(`Goods ${goods.length + 1}`, 5, 5, goods.length)
                  )
                }
                className="!bg-blue-300 py-1 px-3 text-black text-lg font-bold rounded-full"
              >
                <PlusOne />
              </Button>
            </div>
          </FormControl>
        </FormGroup>
        <Card className="!shadow-sm mt-5 !bg-blue-300 px-5 py-3 min-w-[50dvw]">
          <div className="flex flex-col gap-2 justify-between items-stretch flex-wrap max-h-[50dvh] overflow-x-scroll">
            {Array.isArray(goods) &&
              goods.map((item, index) => {
                return (
                  <Card
                    key={index}
                    className="px-5 py-3 flex flex-row justify-between items-center my-5"
                  >
                    <div className="flex flex-row gap-5">
                      <div>
                        <p className="font-semibold text-blue-400">Name: </p>
                        <p className="font-semibold text-blue-400">Weight: </p>
                        <p className="font-semibold text-blue-400">
                          Quantity:{" "}
                        </p>
                      </div>
                      <div>
                        <p>{item[0]}</p>
                        <p>{item[1]}</p>
                        <p>{item[2]}</p>
                      </div>
                    </div>

                    <div className="flex flex-row justify-between items-center gap-2">
                      <FormControl>
                        <InputLabel htmlFor={`item-name-${index}`}>Name</InputLabel>
                        <Input
                          id={`item-name-${index}`}
                          className="max-w-24"
                          value={item[0]}
                          onChange={(e) =>
                            dispatch(updateGoodsName(index, e.target.value))
                          }
                          onBlur={(e) =>
                            e.target.value == ""
                              ? dispatch(
                                  updateGoodsName(index, `Goods ${index + 1}`)
                                )
                              : null
                          }
                        />
                      </FormControl>

                      <FormControl>
                        <InputLabel htmlFor={`weight-${index}`}>Weight</InputLabel>
                        <Input
                          id={`weight-${index}`}
                          className="max-w-24"
                          onChange={(e) => handleUpdateWeight(e, index)}
                          value={item[1]}
                          onBlur={(e) =>
                            e.target.value == 0
                              ? dispatch(updateGoodsWeight(index, 5))
                              : null
                          }
                        />
                      </FormControl>

                      <FormControl>
                        <InputLabel htmlFor={`quantity-${index}`}>Quantity</InputLabel>
                        <Input
                          id={`quantity-${index}`}
                          className="max-w-24"
                          onChange={(e) => handleUpdateQuantity(e, index)}
                          value={item[2]}
                          onBlur={(e) =>
                            e.target.value == 0
                              ? dispatch(updateGoodsQuantity(index, 5))
                              : null
                          }
                        />
                      </FormControl>
                      <Button onClick={() => dispatch(deleteGoods(index))}>
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
            onClick={() => dispatch(deleteAllGoods())}
          >
            Delete All
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default GoodsForm;
