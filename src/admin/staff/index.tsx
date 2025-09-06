import { useSearchParams } from "react-router-dom";
import CreateStaff from "./create-staff";
import StaffsPage from "./staffs";

export default function Blogs() {
  const [searchParams] = useSearchParams();
  const isUpload = searchParams.has("create-staff");

  if (isUpload) {
    return <CreateStaff />;
  } else {
    return <StaffsPage />;
  }
}
