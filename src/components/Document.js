// Import the main component
// import { View } from "@react-18-pdf/renderer";
import { Viewer, SpecialZoomLevel, ZoomEvent } from "@react-pdf-viewer/core";
import { fullScreenPlugin } from "@react-pdf-viewer/full-screen";

// Import styles
import "@react-pdf-viewer/full-screen/lib/styles/index.css";
// import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { Worker } from "@react-pdf-viewer/core";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";

import { useState } from "react";

// Your render function

const Document = () => {
  // const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [zoomLevel, setZoomlevel] = useState(SpecialZoomLevel.PageFit);
  //   const handleZoom = (e: ZoomEvent) => {
  //     console.log(`Zoom to ${e.scale}`);
  // };
  const fullScreenPluginInstance = fullScreenPlugin();
  // type Zoom = (scale: number | SpecialZoomLevel) => void;
  const handleZoom = (e) => {
    console.log(`Zoom to ${e.scale}`);
  };

  return (
    <div>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
        <div
          style={{
            // border: "1px solid rgba(0, 0, 0, 0.3)",
            height: "750px",
            width: "750px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Viewer
            plugins={[fullScreenPluginInstance]}
            fileUrl="Zhalok_Rahman_Resume_29-10-2022-10-03-49.pdf"
            defaultScale={zoomLevel}
            onZoom={(e) => {
              setZoomlevel(e.scale);
              console.log(e.scale);
            }}
          />
        </div>

        {/* <div style={{ height: "750px" }}>
          <Viewer fileUrl="Zhalok_Rahman_Resume_29-10-2022-10-03-49.pdf" />
        </div> */}
      </Worker>
    </div>
  );
};

export default Document;
