import React, { useRef, useState } from "react";
import LeanCanvas from "./components/LeanCanvas";
import DocPanel from "./components/DocPanel";
import Alert from "./components/Alert";
import Footer from "./components/Footer";

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

      <div className="w-full xl:w-5/6 mx-auto z-10 px-4 pb-20">
        <div className="flex justify-between items-center pt-6 pb-16">
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

            <div className="border-l border-gray-800 w-1 mx-3" />

            <button
              onClick={() => importNode.current.click()}
              className="rounded-l border border-r-0 border-gray-800 shadow focus:shadow-md pl-5 pr-4 py-1"
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
              <b className="text-gray-800 text-sm">{"{}"} &nbsp;JSON import</b>
            </button>

            <button
              onClick={() => canvasNode.current.saveCanvasAsJsonFile()}
              className="rounded-r bg-gray-800 shadow focus:shadow-md pl-4 pr-5 py-1"
            >
              <b className="text-white text-sm">{"{}"} &nbsp;JSON export</b>
            </button>

            <button
              onClick={() => canvasNode.current.saveCanvasAsPng()}
              className="rounded bg-gray-800 shadow focus:shadow-md px-6 py-1 ml-3"
            >
              <b className="text-white text-sm">PNG export</b>
            </button>
          </div>
        </div>

        <LeanCanvas ref={canvasNode} />
      </div>

      {/* <DocPanel /> */}
      <Footer />
    </>
  );
};

export default App;
