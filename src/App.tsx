import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import ApplicationRoute from "./router";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <BrowserRouter>
      <ApplicationRoute />
    </BrowserRouter>
  );
}

export default App;
