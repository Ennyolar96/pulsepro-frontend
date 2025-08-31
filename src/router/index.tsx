import Careers from "@/admin/career";
import Courses from "@/admin/course";
import SingleCourse from "@/admin/course/single-course";
import Dashboard from "@/admin/dashboard";
import Event from "@/admin/event";
import SingleEvent from "@/admin/event/single-event";
import AdminGallery from "@/admin/gallary";
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
import Student from "@/admin/student";
import Staffs from "@/admin/staff";
import Blogs from "@/admin/news";

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
      <Route path="/" key="admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="courses" element={<Courses />} />
        <Route path="courses/:slug" element={<SingleCourse />} />
        <Route path="events" element={<Event />} />
        <Route path="events/:slug" element={<SingleEvent />} />
        <Route path="careers" element={<Careers />} />
        <Route path="careers/:slug" element={<Event />} />
        <Route path="gallery" element={<AdminGallery />} />
        <Route path="students" element={<Student />} />
        <Route path="staffs" element={<Staffs />} />
        <Route path="blogs" element={<Blogs />} />
      </Route>
    </Routes>
  );
}
