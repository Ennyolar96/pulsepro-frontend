import { Route, Routes } from "react-router-dom";
import Home from "../page/home";
import Galleries from "../page/galleries";
import HomePage from "../page";
import RootLayout from "../layout/root-layout";
import News from "../page/news";
import SingleBlog from "../page/single-blog";
import Training from "../page/training";
import AboutUs from "../page/about-us";
import ContactUs from "../page/contact-us";
import Career from "../page/career";
import NotFound from "../page/notfound";
import SingleTraining from "@/page/single-training";
import Dashboard from "@/admin/dashboard";
import AdminLayout from "@/layout/admin-layout";

export default function ApplicationRoute() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<RootLayout />}>
        <Route path="galleries" element={<Galleries />} />
        <Route path="news" element={<News />} />
        <Route path="new/:slug" element={<SingleBlog />} />
        <Route path="training" element={<Training />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="career" element={<Career />} />
        <Route path="training/:slug" element={<SingleTraining />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
