import ReactDOM from "react-dom/client";
import { CourseContext } from "./context/CourseContext";
import { Router } from "./routes/Router";
import "./global.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <CourseContext>
    <Router />
  </CourseContext>
);
