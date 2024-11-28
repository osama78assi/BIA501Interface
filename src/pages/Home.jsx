import { ArrowRight } from "@mui/icons-material";
import { Button, Card } from "@mui/material";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="mt-20 flex flex-col justify-center items-center gap-6 h-full">
      <h1 className="font-bold text-center text-3xl">
        This Assignment Website Has Been done by:
      </h1>

      <Card className="w-9/12 py-10 min-h-96 flex justify-center items-center">
        <div className="w-11/12 flex flex-row flex-wrap justify-center items-center gap-4">
          <div className="bg-blue-400 flex justify-center items-center rounded-lg w-1/3 p-4">
            <Card className="w-11/12 py-4">
              <h3 className="text-center font-bold">Osama Assi</h3>
              <h3 className="text-center font-bold">osama_167541</h3>
            </Card>
          </div>
        </div>
      </Card>
      <NavLink className="group" to="/form">
        <Button>
          <div className="flex items-center text-xl">
            <p>Start Add & Fill Trucks</p>{" "}
            <ArrowRight className="!fill-blue-500 transition-transform duration-200 group-hover:translate-x-4" />
          </div>
        </Button>
      </NavLink>
    </div>
  );
}

export default Home;
