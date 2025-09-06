import { useSearchParams } from "react-router-dom";
import UploadCareer from "./uploadCareer";
import CareersPage from "./career";

export default function Careers() {
  const [searchParams] = useSearchParams();
  const isUpload = searchParams.has("upload-job");

  if (isUpload) {
    return <UploadCareer />;
  } else {
    return <CareersPage />;
  }
}
