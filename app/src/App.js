import React from "react";
import LeanCanvas from "./components/LeanCanvas";
import DocPanel from "./components/DocPanel";

const App = () => {
  return (
    <>
      <div className="container mx-auto z-10">
        <div className="flex justify-between items-center pt-3 pb-8">
          <h1
            className="text-4xl font-serif"
            style={{ transform: "rotate(-1deg)" }}
          >
            <span className="text-teal-700">(k)</span>
            <span className="text-white">lean-canvas</span>
          </h1>

          <div className="flex items-stretch">
            <button className="rounded bg-orange-500 shadow focus:shadow-lg px-6 py-2">
              <b className="text-white">Clear</b>
            </button>

            <div className="border-l border-orange-600 w-1 mx-3" />

            <button className="rounded bg-teal-700 shadow focus:shadow-lg px-6 py-2">
              <b className="text-white">⬆ &nbsp; Import</b>
            </button>

            <button className="rounded bg-teal-700 shadow focus:shadow-lg px-6 py-2 ml-3">
              <b className="text-white">💾 &nbsp; Export</b>
            </button>
          </div>
        </div>

        <LeanCanvas />
      </div>

      <DocPanel />
    </>
  );
};

export default App;
