import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./constants/routes_constant";
import Home from "./pages/Home";
import LegalInfo from "./pages/LegalInfo";
import CaseStudiesAndBlogs from "./pages/CaseStudiesAndBlogs";
import LegalBot from "./pages/LegalBot";
import UI from "./pages/UI";
import Navbar from "./components/navbar/Navbar";
import SignUpOptions from "./pages/SignUpOptions";
import "./App.css";

export const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path={ROUTES.Home} element={<Home />} />
        <Route path={ROUTES.LegalInfo} element={<LegalInfo />} />
        <Route
          path={ROUTES.CaseStudiesAndBlogs}
          element={<CaseStudiesAndBlogs />}
        />
        <Route path={ROUTES.LegalBot} element={<LegalBot />} />
        <Route path={ROUTES.UI} element={<UI />} />
        <Route path={ROUTES.SignUpOptions} element={<SignUpOptions />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  );
};

export default App;
