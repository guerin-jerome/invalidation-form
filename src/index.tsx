import ReactDOM from "react-dom/client";
import { CourseContext } from "./context/CourseContext";
import { Course } from "./containers/Course";
import "./global.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <CourseContext>
    <Course />
  </CourseContext>
);
