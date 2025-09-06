import { useSearchParams } from "react-router-dom";
import StudentsPage from "./student";
import CreateStudent from "./createStudent";

export default function Blogs() {
  const [searchParams] = useSearchParams();
  const isUpload = searchParams.has("create-student");

  if (isUpload) {
    return <CreateStudent />;
  } else {
    return <StudentsPage />;
  }
}
