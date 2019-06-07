import React, { useRef, useState } from "react";
import LeanCanvas from "./components/LeanCanvas";
import DocPanel from "./components/DocPanel";
import Alert from "./components/Alert";

const App = () => {
  const canvasNode = useRef();
  const importNode = useRef();
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  return (
    <>
      {showClearConfirm && (
        <Alert
          content="All your current work will be lost ! Are you sure ?"
          triggerClosing={() => setShowClearConfirm(false)}
          onOkClick={() => {
            canvasNode.current.clearCanvas();
            setShowClearConfirm(false);
          }}
          onCancelClick={() => setShowClearConfirm(false)}
        />
      )}

      <div className="overflow-y-scroll overflow-x-hidden">
        <div className="container mx-auto z-10">
          <div className="flex justify-between items-center pt-6 pb-16">
            <h1
              className="text-4xl font-serif"
              style={{ transform: "rotate(-2deg)" }}
            >
              <span className="text-teal-700">(k)</span>
              <span className="text-white">lean-canvas</span>
            </h1>

            <div className="flex items-stretch">
              <button
                onClick={() => setShowClearConfirm(true)}
                className="rounded bg-orange-500 shadow focus:shadow-md px-6 py-2"
              >
                <b className="text-white text-sm">Clear</b>
              </button>

              <div className="border-l border-orange-600 w-1 mx-3" />

              <button
                onClick={() => importNode.current.click()}
                className="rounded-l bg-orange-200 border border-r-0 border-teal-500 shadow focus:shadow-md pl-5 pr-4 py-2"
              >
                <input
                  ref={importNode}
                  type="file"
                  className="hidden"
                  accept="application/json"
                  onChange={e => {
                    canvasNode.current.importJSONCanvas(
                      e.target.files.length > 0 ? e.target.files[0] : undefined
                    );
                    e.target.value = "";
                  }}
                />
                <b className="text-teal-700 text-sm">
                  {"{}"} &nbsp;JSON import
                </b>
              </button>

              <button
                onClick={() => canvasNode.current.saveCanvasAsJsonFile()}
                className="rounded-r bg-teal-700 shadow focus:shadow-md pl-4 pr-5 py-2"
              >
                <b className="text-white text-sm">{"{}"} &nbsp;JSON export</b>
              </button>

              <button
                onClick={() => canvasNode.current.saveCanvasAsPng()}
                className="rounded bg-teal-700 shadow focus:shadow-md px-6 py-2 ml-3"
              >
                <b className="text-white text-sm">PNG export</b>
              </button>
            </div>
          </div>

          <LeanCanvas ref={canvasNode} />
        </div>

        <DocPanel />
      </div>
    </>
  );
};

export default App;
