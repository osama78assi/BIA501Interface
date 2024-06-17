import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import GraphTab from "../components/graph/GraphTab";
// import Results from "../components/form/Results";
import { useSelector } from "react-redux";
import DataForms from "../components/form/DataForms";
import FillTrucks from "../components/form/FillTrucks";
import SidePanel from "../components/form/SidePanel";

function Form() {
  const level = useSelector((state) => state.form.level);

  return (
    <div className="flex-row flex relative overflow-y-hidden overflow-x-hidden h-full">
      <div className="absolute top-0 bottom-0 w-full z-[100]"></div>

      <SidePanel />

      <div className="flex flex-col justify-start gap-10 items-center w-full relative font-[roboto] h-full">
        {level == 0 && <DataForms />}
        {level == 1 && <FillTrucks />}
        {level == 2 && <GraphTab />}
      </div>
    </div>
  );
}

export default Form;
