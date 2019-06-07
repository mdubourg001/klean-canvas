import React from "react";

const Alert = ({
  title,
  content,
  okLabel,
  cancelLabel,
  triggerClosing,
  onOkClick,
  onCancelClick
}) => {
  return (
    <div
      className="absolute w-full h-full top-0 left-0 flex justify-center z-10 cursor-pointer"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
      onClick={triggerClosing}
    >
      <div
        className="w-5/6 sm:w-1/2 md:w-1/3 py-5 px-8 bg-white rounded-lg"
        style={{
          height: "fit-content",
          marginTop: "30vh"
        }}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <b className="font-title text-teal-700">
            {title ? title : "Do you confirm ?"}
          </b>

          <button className="text-teal-700" onClick={triggerClosing}>
            ✕
          </button>
        </div>
        <small className="text-gray-600">{content}</small>

        <div className="flex justify-end mt-10">
          <button
            onClick={onCancelClick}
            className="rounded border border-teal-400 bg-gray-200 shadow focus:shadow-md px-6 py-2"
          >
            <b className="text-teal-700 text-sm">
              {cancelLabel ? cancelLabel : "Cancel"}
            </b>
          </button>

          <button
            onClick={onOkClick}
            className="rounded bg-orange-500 shadow focus:shadow-md px-6 py-2 ml-2"
          >
            <b className="text-white text-sm">{okLabel ? okLabel : "Yes"}</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
