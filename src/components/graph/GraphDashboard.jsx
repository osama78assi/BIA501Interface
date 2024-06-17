import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowDashboard } from "../../stateSlices/graphSlice";
import GraphDashboardBody from "./GraphDashboardBody";
import GraphDashboardHeader from "./GraphDashboardHeader";

// Really graph dashboard
function GraphDashboard() {
  const showDashboard = useSelector((state) => state.graph.showDashboard);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef(null);

  function handleSearch(e) {
    if (/\w/.test(e.target.value[e.target.value.length - 1])) {
      setSearch(e.target.value);
    }
  }

  useEffect(() => {
    if (ref.current) {
      ref.current.classList.add("show-dashboard");
    }
    const timer = setTimeout(() => {
      setShow(true);
      clearTimeout(timer);
    }, 800);
  }, []);

  // Rise the dashboard then delete it
  function closeDashboar() {
    if (ref.current) {
      ref.current.classList.remove("show-dashboard");
      const bodyTimer = setTimeout(() => {
        setShow(false);
        clearTimeout(bodyTimer);
      }, 100);
      const timer = setTimeout(() => {
        dispatch(setShowDashboard(!showDashboard));
        clearTimeout(timer);
      }, 1000);
    }
  }

  return (
    <div ref={ref} className={`graph-dashboard`}>
      <GraphDashboardHeader
        onClose={closeDashboar}
        onType={handleSearch}
        search={search}
      />
      {show && <GraphDashboardBody filter={search} />}
    </div>
  );
}

export default GraphDashboard;
