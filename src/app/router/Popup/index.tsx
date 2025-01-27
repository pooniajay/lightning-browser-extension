import { createRoot } from "react-dom/client";

import "react-loading-skeleton/dist/skeleton.css";
import "~/app/styles/index.css";

import Popup from "./Popup";
import { getTheme } from "~/app/utils";

// Get the active theme and apply corresponding Tailwind classes to the document
getTheme();

const container = document.getElementById("popup-root") as HTMLElement;
const root = createRoot(container);
root.render(<Popup />);
