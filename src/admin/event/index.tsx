import { useSearchParams } from "react-router-dom";
import EventsPage from "./event";
import AddEvent from "./add-event";

export default function Blogs() {
  const [searchParams] = useSearchParams();
  const isUpload = searchParams.has("upload-event");

  if (isUpload) {
    return <AddEvent />;
  } else {
    return <EventsPage />;
  }
}
