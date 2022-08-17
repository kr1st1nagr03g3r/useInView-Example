import * as React from "react";
// @ts-ignore Wrong type
import { createRoot } from "react-dom/client";
import { useInView } from "react-intersection-observer";
import ScrollWrapper from "./elements/ScrollWrapper";
import "./styles.css";

function App() {
  const { ref, inView } = useInView({
    threshold: 0
  });

  return (
    <ScrollWrapper inView={inView}>
      <div ref={ref} className="inview-block">
        <h2>
          Element is inside the viewport: <strong>{inView.toString()}</strong>
        </h2>
      </div>
    </ScrollWrapper>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
