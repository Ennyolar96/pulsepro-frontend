import Careers from "@/admin/career";
import Courses from "@/admin/course";
import Dashboard from "@/admin/dashboard";
import Event from "@/admin/event";
import AdminGallery from "@/admin/gallary";
import Blogs from "@/admin/news";
import Staffs from "@/admin/staff";
import Student from "@/admin/student";
import AdminLayout from "@/layout/admin-layout";
import SingleTraining from "@/page/single-training";
import { Route, Routes } from "react-router-dom";
import RootLayout from "../layout/root-layout";
import HomePage from "../page";
import AboutUs from "../page/about-us";
import Career from "../page/career";
import ContactUs from "../page/contact-us";
import Galleries from "../page/galleries";
import Home from "../page/home";
import News from "../page/news";
import NotFound from "../page/notfound";
import SingleBlog from "../page/single-blog";
import Training from "../page/training";
import AddCourse from "@/admin/course/add-course";

export default function ApplicationRoute() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/" key="root" element={<RootLayout />}>
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
      <Route path="/dashboard" key="admin" element={<AdminLayout />}>
        <Route path="" element={<Dashboard />} />
        <Route path="courses" element={<Courses />} />
        <Route path="events" element={<Event />} />
        <Route path="careers" element={<Careers />} />
        <Route path="gallery" element={<AdminGallery />} />
        <Route path="students" element={<Student />} />
        <Route path="staffs" element={<Staffs />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="add-course" element={<AddCourse />} />
      </Route>
    </Routes>
  );
}
