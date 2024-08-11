import Hompage from "./pages/Homepage";
import "./App.css";
import Header from "./components/Header";
import {
  BrowserRouter,
  Routes,
  Route,
  ScrollRestoration,
} from "react-router-dom";
import { allPages } from "./routes/index";
import Footer from "./components/Footer";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import { NavProvider, useNavContext } from "./helper/NavContext";
import { Toaster } from "react-hot-toast";
import Waitlist from "./pages/Waitlist";
import { useState } from "react";
import { ScrollToTop } from "./helper/ScrollToTop";
import OurPlatform from "./pages/OurPlatform";
import ContactUs from "./pages/ContactUs";
import CafToken from "./pages/CafToken";
import Blog from "./pages/Blog";
import Privacy from "./pages/Privacy";

function App() {
  const { showNav } = useNavContext();

  return (
    <div
      className={
        "relative font-robotoSlab " +
        `${showNav ? "min-h-screen " : "overflow-visible"}`
      }
    >
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path={"/home"} element={<Homepage />} />
          <Route path={"/"} element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path={"/join-waitlist"} element={<Waitlist />} />
          <Route path={"/Our-platform"} element={<OurPlatform />} />
          <Route path={"/contact-us"} element={<ContactUs />} />
          <Route path={"/caf-token"} element={<CafToken />} />
          <Route path={"/blog"} element={<Blog />} />
          <Route path={"/privacy"} element={<Privacy />} />
        </Routes>
        <Toaster
          position="top-right"
          toastOptions={{
            className:
              "font-robotoSlab text-sm md:text-base py-[20px!important] h-20 w-[85%] px-[14px!important] flex items-center gap-2 items-start",
          }}
        />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
