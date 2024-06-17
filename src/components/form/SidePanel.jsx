import { useDispatch, useSelector } from "react-redux";
import { setLevel } from "../../stateSlices/formSlice";

const SidePanel = () => {
  const level = useSelector((state) => state.form.level);
  const ready = useSelector((state) => state.trucks.ready);
  const solution = useSelector((state) => state.trucks.solution);
  const dispatch = useDispatch();

  return (
    <div className="w-[25rem] bg-white z-[101] shadow-xl shadow-blue-100 h-full">
      <div className="mt-[35lvh] w-80 fixed">
        <div
          className=" cursor-pointer group"
          onClick={() => dispatch(setLevel(0))}
        >
          <div
            className={`w-2/3 px-10 group-hover:w-5/6 rounded-r-full transition-all ease-out duration-300 py-3 mb-10 cursor-pointer  ${
              level === 0
                ? "!w-full bg-blue-600 text-white"
                : "bg-blue-300  text-black"
            }`}
          >
            Fill Trucks
          </div>
        </div>
        <div
          className={`w-full cursor-pointer group`}
          onClick={() => ready && dispatch(setLevel(1))}
        >
          <div
            className={`w-2/3 px-10 ${
              ready ? "group-hover:w-5/6" : ""
            } rounded-r-full ease-out transition-all duration-300 py-3 mb-10 cursor-pointer  ${
              level === 1
                ? "!w-full bg-blue-600 text-white"
                : "bg-blue-300 text-black"
            }
            ${!ready ? "gray !cursor-not-allowed" : ""}`}
          >
            Trucks Solution
          </div>
        </div>
        <div
          className="w-full cursor-pointer group"
          onClick={() => ready && solution?.goods && dispatch(setLevel(2))}
        >
          <div
            className={`w-2/3 px-10 ${
              ready && solution?.goods ? "group-hover:w-5/6" : ""
            } rounded-r-full ease-out transition-all duration-300 py-3 mb-10 cursor-pointer  ${
              level === 2
                ? "!w-full bg-blue-600 text-white"
                : "bg-blue-300 text-black"
            }
            ${!ready || !solution?.goods ? "gray !cursor-not-allowed" : ""}`}
          >
            Graph
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
