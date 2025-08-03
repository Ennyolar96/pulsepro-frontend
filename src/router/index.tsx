import { Route, Routes } from "react-router-dom";
import Home from "../page/home";
import Galleries from "../page/galleries";
import HomePage from "../page";
import RootLayout from "../layout/root-layout";
import News from "../page/news";
import SingleBlog from "../page/single-blog";
import Training from "../page/training";

export default function ApplicationRoute() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<RootLayout />}>
        <Route path="/galleries" element={<Galleries />} />
        <Route path="/news" element={<News />} />
        <Route path="/new/:slug" element={<SingleBlog />} />
        <Route path="/training" element={<Training />} />
      </Route>
    </Routes>
  );
}
