import { Suspense } from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { HashLoader } from "react-spinners";
import Header from "./components/header/Header";
import Form from "./pages/Form";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="relative overflow-y-hidden overflow-x-hidden h-[100%]">
          <Header />
          <div className="applayout">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/form" element={<Form />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
