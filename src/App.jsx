import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { HashLoader } from "react-spinners";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import store from "./store";
const Form = lazy(() => import("./pages/Form"));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="relative overflow-y-hidden overflow-x-hidden h-[100%]">
          <Header />
          <div className="applayout">
            <Suspense
              fallback={
                <div className="w-full h-screen bg-white top-0 bottom-0 absolute flex justify-center items-center ">
                  <HashLoader className="custom-animation" />
                </div>
              }
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/form" element={<Form />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
