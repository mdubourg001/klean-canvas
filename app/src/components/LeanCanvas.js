import React, {
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef
} from "react";
import html2canvas from "html2canvas";

import useDebounce from "../hooks/useDebounce";
import Box from "./Box";
import useCanvasLocalStorage from "../hooks/useCanvasLocalStorage";
import Alert from "./Alert";

const initialCanvas = {
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
};

const LeanCanvas = forwardRef(({}, ref) => {
  const [canvas, setCanvas] = useState(initialCanvas);
  const [showInvalidJson, setShowInvalidJson] = useState(false);
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

  useImperativeHandle(ref, () => ({
    clearCanvas() {
      setCanvas(initialCanvas);
      save();
    },

    saveCanvasAsJsonFile() {
      // stolen from https://stackoverflow.com/questions/34156282/how-do-i-save-json-to-local-text-file
      const download = (content, fileName, contentType) => {
        const a = document.createElement("a");
        const file = new Blob([content], { type: contentType });
        const url = URL.createObjectURL(file);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
      };

      download(JSON.stringify(canvas), "lean-canvas.json", "application/json");
    },

    saveCanvasAsPng() {
      // canvas with textarea badly supports text wrapping so,

      const insertNextTo = (textarea, p) => {
        textarea.parentNode.insertBefore(p, textarea.nextSibling);
      };

      const textareaElements = Array.from(
        document.getElementsByTagName("textarea")
      );
      const pElements = [];

      // for each textarea, we create a p element and we assign it the content
      // of the textarea. Then we append it to the DOM
      textareaElements.forEach(textarea => {
        const p = document.createElement("p");
        p.appendChild(document.createTextNode(textarea.value));
        p.style.cssText = window.getComputedStyle(textarea, null).cssText;
        insertNextTo(textarea, p);
        pElements.push(p);

        textarea.style.display = "none";
      });

      html2canvas(document.querySelector("#canvas")).then(c => {
        const a = document.createElement("a");
        const imageData = c.toDataURL("image/png");
        a.href = imageData;
        a.download = "lean-canvas.png";
        a.click();

        pElements.forEach(p => p.remove());
        textareaElements.forEach(
          textarea => (textarea.style.display = "block")
        );
      });
    },

    importJSONCanvas(file) {
      if (file === undefined) return;

      const reader = new FileReader();
      reader.readAsBinaryString(file);
      reader.onloadend = () => {
        try {
          const loadedCanvas = JSON.parse(reader.result);
          for (let property in initialCanvas) {
            if (!loadedCanvas.hasOwnProperty(property)) throw SyntaxError;
          }
          setCanvas(loadedCanvas);
        } catch (SyntaxError) {
          setShowInvalidJson(true);
        }
      };
    }
  }));

  return (
    <>
      {showInvalidJson && (
        <Alert
          title="Oops !"
          content="The file provided isn't a valid JSON file..."
          okLabel="Ok"
          hideCancel={true}
          onOkClick={() => setShowInvalidJson(false)}
          onCancelClick={() => setShowInvalidJson(false)}
          triggerClosing={() => setShowInvalidJson(false)}
        />
      )}

      <div
        id="canvas"
        className="w-full h-90-vh max-h-90-vh flex flex-col bg-white rounded shadow-2xl"
      >
        <div className="h-2/3 flex">
          <div className="w-1/5 flex flex-col">
            <div className="h-2/3">
              <Box
                title="Problem"
                subtitle="What problems does your idea solves ?"
                cssClasses="border-t-0 border-l-0 border-b-0 rounded-tl"
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
                hideTabIndex
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
                hideTabIndex
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
                cssClasses="border-t-0 border-r-0 border-b-0 rounded-tr"
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
                hideTabIndex
                content={canvas["2bis"]}
                updateModel={value => setCanvas({ ...canvas, "2bis": value })}
              />
            </div>
          </div>
        </div>

        <div className="h-1/3 flex">
          <div className="w-1/2">
            <Box
              cssClasses="border-b-0 border-l-0 rounded-bl"
              title="Costs"
              subtitle="List your fixed and variable costs"
              tabIndex={7}
              content={canvas["7"]}
              updateModel={value => setCanvas({ ...canvas, "7": value })}
            />
          </div>
          <div className="w-1/2">
            <Box
              cssClasses="border-b-0 border-r-0 rounded-br"
              title="Revenues"
              subtitle="List your sources of revenue"
              tabIndex={6}
              content={canvas["6"]}
              updateModel={value => setCanvas({ ...canvas, "6": value })}
            />
          </div>
        </div>
      </div>
    </>
  );
});

export default LeanCanvas;
