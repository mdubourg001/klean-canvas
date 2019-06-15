import React, { useEffect } from "react";

const Alert = ({
  title,
  content,
  okLabel,
  cancelLabel,
  hideCancel,
  hideOk,
  triggerClosing,
  onOkClick,
  onCancelClick
}) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => (document.body.style.overflowY = "scroll");
  }, []);

  return (
    <div
      className="absolute w-full top-0 left-0 flex justify-center z-10 cursor-pointer"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.3)", height: "110%" }}
      onClick={triggerClosing}
    >
      <div
        className="w-5/6 sm:w-1/2 md:w-1/3 py-5 px-8 bg-white rounded"
        style={{
          height: "fit-content",
          marginTop: "30vh"
        }}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <b className="font-title text-red-400">
            {title ? title : "Do you confirm ?"}
          </b>

          <button className="text-teal-700" onClick={triggerClosing}>
            ✕
          </button>
        </div>
        <small className="text-gray-800">{content}</small>

        <div className="flex justify-end mt-10">
          {!hideCancel && (
            <button
              onClick={onCancelClick}
              className="rounded border border-gray-300 bg-gray-200 shadow focus:shadow-md px-6 py-1"
            >
              <b className="text-gray-800 text-sm">
                {cancelLabel ? cancelLabel : "Cancel"}
              </b>
            </button>
          )}

          {!hideOk && (
            <button
              onClick={onOkClick}
              className="rounded bg-red-500 shadow focus:shadow-md px-6 py-1 ml-2"
            >
              <b className="text-white text-sm">{okLabel ? okLabel : "Yes"}</b>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Alert;
