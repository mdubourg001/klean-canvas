import React, { useState } from "react";

const DEFAULT_TEXTAREA_FONT_SIZE = 13;

const Box = ({
  title,
  subtitle,
  cssClasses,
  tabIndex,
  hideTabIndex,
  content, // content retrieved from localStorage from exemple
  updateModel
}) => {
  const [focused, setFocused] = useState(false);
  const [textAreaFontSize, setTextAreaFontSize] = useState(
    DEFAULT_TEXTAREA_FONT_SIZE
  );
  const [diffOuterScrollHeight, setDiffOuterScrollHeight] = useState(0);

  /* Scaling textarea font-size based on its scrollHeight 
     The goal is to always have the whole textarea content visible */
  const onTextareaInput = e => {
    e.target.style.height = e.target.scrollHeight + "px";
    const styleHeight = parseInt(e.target.style.height.replace("px", ""));
    if (e.target.value === "") setTextAreaFontSize(DEFAULT_TEXTAREA_FONT_SIZE);
    else if (e.target.offsetHeight < styleHeight) {
      if (styleHeight - e.target.offsetHeight > diffOuterScrollHeight) {
        setDiffOuterScrollHeight(styleHeight - e.target.offsetHeight);
        setTextAreaFontSize(textAreaFontSize - 1);
      }
    } else if (textAreaFontSize < DEFAULT_TEXTAREA_FONT_SIZE) {
      setDiffOuterScrollHeight(0);
    }
  };

  return (
    <div
      className={`w-full h-full flex flex-col px-5 py-4 border border-gray-200 ${cssClasses}`}
      style={
        focused
          ? {
              backgroundColor: "#fff5f5",
              borderColor: "transparent",
              boxShadow: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
              transition: "transform 0.3s ease"
            }
          : {
              boxShadow: "none",
              transition: "background-color 0.3s ease"
            }
      }
    >
      <div>
        <div className="flex items-center">
          {!hideTabIndex && (
            <div className="rounded-full w-6 h-6 bg-red-300 text-center shadow">
              <small className="text-white font-title">{tabIndex}</small>
            </div>
          )}
          <h3
            className={`text-xs font-title uppercase ${
              !hideTabIndex ? "ml-2" : ""
            }`}
          >
            {title}
          </h3>
        </div>
        <h4 className="text-xs text-gray-700 mb-2">{subtitle}</h4>
        <hr className="my-1 border-t border-gray-200" />
      </div>

      <textarea
        style={{
          resize: "none",
          maxHeight: "100%",
          fontSize: `${textAreaFontSize}px`,
          backgroundColor: "transparent"
        }}
        tabIndex={tabIndex}
        spellCheck="false"
        autoCorrect="false"
        className="w-full h-full focus:outline-none"
        value={content}
        onChange={e => {
          updateModel(e.target.value);
          onTextareaInput(e);
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
};

export default Box;
