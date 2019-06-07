import React, { useState } from "react";

const DEFAULT_TEXTAREA_FONT_SIZE = 13;

const Box = ({
  title,
  subtitle,
  cssClasses,
  tabIndex,
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
    if (e.target.offsetHeight < styleHeight) {
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
      className={`w-full h-full flex flex-col px-4 py-3 border border-gray-200 ${cssClasses}`}
      style={
        focused
          ? {
              backgroundColor: "#edf2f7",
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
        <h3 className="text-xs font-title uppercase">
          <span className="text-main-orange">({tabIndex})</span> {title}
        </h3>
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
