import { useDispatch, useSelector } from "react-redux";
import { solve } from "../../stateSlices/trucksSlice";

function TruckSolveBtn() {
  const classes =
    "MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary css-1e6y48t-MuiButtonBase-root-MuiButton-root";
  const isSolving = useSelector((state) => state.trucks.isSolving);
  const dispatch = useDispatch();

  return (
    <button
      className={`${classes} !bg-green-800 !text-white !my-10 hover:!bg-green-700 !block w-96 !mx-auto`}
      onClick={() => dispatch(solve())}
      disabled={isSolving}
    >
      solve
    </button>
  );
}

export default TruckSolveBtn;
