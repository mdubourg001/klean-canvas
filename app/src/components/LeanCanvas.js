import React, { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";
import Box from "./Box";
import useCanvasLocalStorage from "../hooks/useCanvasLocalStorage";

const LeanCanvas = () => {
  const [canvas, setCanvas] = useState({
    "1": "",
    "1bis": "",
    "2": "",
    "2bis": "",
    "3": "",
    "3bis": "",
    "4": "",
    "5": "",
    "6": "",
    "7": "",
    "8": "",
    "9": ""
  });
  const debouncedCanvas = useDebounce(canvas, 3000);
  const [save, clear, retrieve] = useCanvasLocalStorage(canvas);

  useEffect(() => {
    const lsSavedWork = retrieve();
    if (lsSavedWork !== null) setCanvas(lsSavedWork);
  }, []);

  useEffect(() => {
    // auto-saving canvas in localStorage on save
    window.addEventListener("beforeunload", () => save(canvas));
    return window.removeEventListener("beforeunload", () => save(canvas));
  }, [canvas]);

  useEffect(() => {
    save();
  }, [debouncedCanvas]);

  return (
    <div className="w-full h-90-vh max-h-90-vh flex flex-col bg-white rounded-lg shadow-lg">
      <div className="h-2/3 flex">
        <div className="w-1/5 flex flex-col">
          <div className="h-2/3">
            <Box
              title="Problem"
              subtitle="What problems does your idea solves ?"
              cssClasses="border-t-0 border-l-0 border-b-0 rounded-tl-lg"
              tabIndex={1}
              content={canvas["1"]}
              updateModel={value => setCanvas({ ...canvas, "1": value })}
            />
          </div>
          <div className="h-1/3">
            <Box
              cssClasses="border-l-0 border-t-0"
              title="Existing alternatives"
              subtitle="How are these problems solved today ?"
              tabIndex={1}
              content={canvas["1bis"]}
              updateModel={value => setCanvas({ ...canvas, "1bis": value })}
            />
          </div>
        </div>

        <div className="w-1/5 flex flex-col">
          <div className="h-1/2">
            <Box
              cssClasses="border-t-0"
              title="Solution"
              subtitle="What are your solutions for these problems ?"
              tabIndex={4}
              content={canvas["4"]}
              updateModel={value => setCanvas({ ...canvas, "4": value })}
            />
          </div>
          <div className="h-1/2">
            <Box
              title="Key metrics"
              subtitle="How to tell that your business is going well ?"
              tabIndex={8}
              content={canvas["8"]}
              updateModel={value => setCanvas({ ...canvas, "8": value })}
            />
          </div>
        </div>

        <div className="w-1/5">
          <div className="h-2/3">
            <Box
              cssClasses="border-t-0 border-b-0"
              title="Unique value proposition"
              subtitle="How are you different from your concurrents ?"
              tabIndex={3}
              content={canvas["3"]}
              updateModel={value => setCanvas({ ...canvas, "3": value })}
            />
          </div>
          <div className="h-1/3">
            <Box
              cssClasses="border-t-0"
              title="High-level concept"
              subtitle="Your X for Y analogy"
              tabIndex={3}
              content={canvas["3bis"]}
              updateModel={value => setCanvas({ ...canvas, "3bis": value })}
            />
          </div>
        </div>

        <div className="w-1/5">
          <div className="h-1/2">
            <Box
              cssClasses="border-t-0"
              title="Unfair advantage"
              subtitle="Something that can't be easily copied by concurrence"
              tabIndex={9}
              content={canvas["9"]}
              updateModel={value => setCanvas({ ...canvas, "9": value })}
            />
          </div>
          <div className="h-1/2">
            <Box
              title="Channels"
              subtitle="What are your paths to customers ?"
              tabIndex={5}
              content={canvas["5"]}
              updateModel={value => setCanvas({ ...canvas, "5": value })}
            />
          </div>
        </div>

        <div className="w-1/5">
          <div className="h-2/3">
            <Box
              cssClasses="border-t-0 border-r-0 border-b-0 rounded-tr-lg"
              title="Customer segments"
              subtitle="List your target customers and users"
              tabIndex={2}
              content={canvas["2"]}
              updateModel={value => setCanvas({ ...canvas, "2": value })}
            />
          </div>
          <div className="h-1/3">
            <Box
              cssClasses="border-r-0 border-t-0"
              title="Early adopters"
              subtitle="Characteristics of your ideal customer"
              tabIndex={2}
              content={canvas["2bis"]}
              updateModel={value => setCanvas({ ...canvas, "2bis": value })}
            />
          </div>
        </div>
      </div>

      <div className="h-1/3 flex">
        <div className="w-1/2">
          <Box
            cssClasses="border-b-0 border-l-0 rounded-bl-lg"
            title="Costs"
            subtitle="List your fixed and variable costs"
            tabIndex={7}
            content={canvas["7"]}
            updateModel={value => setCanvas({ ...canvas, "7": value })}
          />
        </div>
        <div className="w-1/2">
          <Box
            cssClasses="border-b-0 border-r-0 rounded-br-lg"
            title="Revenues"
            subtitle="List your sources of revenue"
            tabIndex={6}
            content={canvas["6"]}
            updateModel={value => setCanvas({ ...canvas, "6": value })}
          />
        </div>
      </div>
    </div>
  );
};

export default LeanCanvas;
