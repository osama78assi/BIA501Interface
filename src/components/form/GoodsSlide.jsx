import { KeyboardReturn } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setStage } from "../../stateSlices/formSlice";
import GoodsForm from "./GoodsForm";

function GoodsSlide() {
  const goods = useSelector((state) => state.trucks.goods);
  const stage = useSelector((state) => state.form.stage);
  const dispatch = useDispatch();

  return (
    <>
      <div
        className={`${
          stage !== 1 ? "absolute top-0 bottom-0 w-full z-[100]" : ""
        }`}
      ></div>
      <GoodsForm className="absolute top-0" />
      <div className="flex flex-row justify-between">
        <div className="mx-auto w-fit mt-10">
          <Button
            className="w-52 max-w-52 h-16 max-h-16 !text-3xl"
            onClick={() => dispatch(setStage(0))}
          >
            <KeyboardReturn className="!fill-blue-600 !size-8" />
          </Button>
        </div>
        <div className="mx-auto w-fit mt-10">
          <Button
            className="w-52 max-w-52 h-16 max-h-16 !text-xl "
            onClick={() => dispatch(setStage(2))}
            disabled={!goods.length}
          >
            Commit Goods
          </Button>
        </div>
      </div>
    </>
  );
}

export default GoodsSlide;
