import React, { useRef, useState, useEffect } from "react";

import LeanCanvas from "./components/LeanCanvas";
import Hints from "./components/Hints";
import Alert from "./components/Alert";
import Footer from "./components/Footer";
import { FIRST_VISIT_KEY } from "./hooks/useCanvasLocalStorage";

const App = () => {
  const canvasNode = useRef();
  const importNode = useRef();
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [hints, setHints] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem(FIRST_VISIT_KEY)) {
      setHints([
        ...hints,
        "All of your work is automatically stored in your localStorage ! So you can come and go as you please, you will always find the work you left behind 😉"
      ]);
      localStorage.setItem(FIRST_VISIT_KEY, true);
    }
  }, [setHints]);

  return (
    <>
      {showClearConfirm && (
        <Alert
          content="All of your current work will be lost ! Are you sure ?"
          triggerClosing={() => setShowClearConfirm(false)}
          onOkClick={() => {
            canvasNode.current.clearCanvas();
            setShowClearConfirm(false);
          }}
          onCancelClick={() => setShowClearConfirm(false)}
        />
      )}

      <div className="hidden sm:block fixed right-0 bottom-0 w-full sm:w-1/2 z-20 lg:w-2/5 p-5">
        <Hints hints={hints} set={setHints} />
      </div>

      <div className="w-full xl:w-5/6 mx-auto z-10 px-4 pb-20">
        <div className="flex justify-between items-center pt-6 pb-10 sm:pb-14 lg:pb-16">
          <h1 className="flex items-center text-4xl font-serif font-title">
            <span className="text-red-400 mr-2 sm:mr-0">(k)</span>
            <span className="text-gray-800 hidden sm:block">lean-canvas</span>
          </h1>

          <div className="flex items-stretch">
            <button
              onClick={() => setShowClearConfirm(true)}
              className="rounded bg-red-500 shadow focus:shadow-md px-6 py-1"
            >
              <b className="text-white text-sm">Clear</b>
            </button>

            <div className="hidden sm:block border-l border-gray-800 w-1 mx-3" />

            <button
              onClick={() => importNode.current.click()}
              className="hidden sm:block rounded-l border border-r-0 border-gray-800 shadow focus:shadow-md px-4 py-1"
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
              <b className="text-gray-800 text-sm">JSON import</b>
            </button>

            <button
              onClick={() => canvasNode.current.saveCanvasAsJsonFile()}
              className="hidden sm:block rounded-r bg-gray-800 shadow focus:shadow-md px-4 py-1"
            >
              <b className="text-white text-sm">JSON export</b>
            </button>

            <button
              onClick={() => canvasNode.current.saveCanvasAsPng()}
              className="rounded bg-gray-800 shadow focus:shadow-md px-6 py-1 ml-3"
            >
              <b className="text-white text-sm">PNG export</b>
            </button>
          </div>
        </div>

        <div
          style={{
            width: "100%"
          }}
          className="overflow-x-scroll sm:overflow-x-auto"
        >
          <LeanCanvas ref={canvasNode} />
        </div>
      </div>

      {/* <DocPanel /> */}
      <Footer />
    </>
  );
};

export default App;
