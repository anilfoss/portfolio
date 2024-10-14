import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import SmoothScrollWrapper from "./SmoothScrollWrapper.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <SmoothScrollWrapper>
            <App />
        </SmoothScrollWrapper>
    </StrictMode>
);
