import { useSearchParams } from "react-router-dom";
import UploadNews from "./create-news";
import BlogsPage from "./news";

export default function Blogs() {
  const [searchParams] = useSearchParams();
  const isUploadNews = searchParams.has("upload-news");

  if (isUploadNews) {
    return <UploadNews />;
  } else {
    return <BlogsPage />;
  }
}
