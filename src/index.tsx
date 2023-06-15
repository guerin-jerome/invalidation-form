import ReactDOM from "react-dom/client";
import { Course } from "./components/Course";
import { CourseContext } from "./context/CourseContext";
import "./global.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <CourseContext>
    <Course />
  </CourseContext>
);
