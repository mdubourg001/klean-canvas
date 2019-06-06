import React, { useRef } from "react";
import LeanCanvas from "./components/LeanCanvas";
import DocPanel from "./components/DocPanel";

const App = () => {
  const canvasNode = useRef();

  return (
    <>
      <div className="container mx-auto z-10">
        <div className="flex justify-between items-center pt-6 pb-16">
          <h1
            className="text-4xl font-serif"
            style={{ transform: "rotate(-1deg)" }}
          >
            <span className="text-teal-700">(k)</span>
            <span className="text-white">lean-canvas</span>
          </h1>

          <div className="flex items-stretch">
            <button
              onClick={() => canvasNode.current.clearCanvas()}
              className="rounded bg-orange-500 shadow focus:shadow-md px-6 py-2"
            >
              <b className="text-white">Clear</b>
            </button>

            <div className="border-l border-orange-600 w-1 mx-3" />

            <button
              disabled
              className="rounded-l bg-teal-700 shadow focus:shadow-md px-3 py-2"
            >
              <b className="text-white">⬆ &nbsp; JSON import</b>
            </button>

            <button
              onClick={() => canvasNode.current.saveCanvasAsJsonFile()}
              className="rounded-r bg-teal-700 shadow focus:shadow-md px-3 py-2"
            >
              <b className="text-white">💾 &nbsp; JSON export</b>
            </button>

            <button
              onClick={() => canvasNode.current.saveCanvasAsPng()}
              className="rounded bg-teal-700 shadow focus:shadow-md px-6 py-2 ml-3"
            >
              <b className="text-white">🖼 &nbsp; PNG export</b>
            </button>
          </div>
        </div>

        <LeanCanvas ref={canvasNode} />
      </div>

      <DocPanel />
    </>
  );
};

export default App;
