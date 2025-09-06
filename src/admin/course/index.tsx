import { useSearchParams } from "react-router-dom";
import AddCourse from "./add-course";
import CoursesPage from "./course";

export default function Careers() {
  const [searchParams] = useSearchParams();
  const isUpload = searchParams.has("upload-course");

  if (isUpload) {
    return <AddCourse />;
  } else {
    return <CoursesPage />;
  }
}
