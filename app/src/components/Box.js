import React from "react";
import BoxInputList from "./BoxInputList";

const Box = ({ title, subtitle, cssClasses }) => {
  return (
    <div
      className={`w-full h-full px-4 py-3 border border-gray-200 ${cssClasses}`}
    >
      <h3 className="font-emphasized uppercase">{title}</h3>
      <h4 className="text-xs text-gray-700 mb-2">{subtitle}</h4>
      <BoxInputList />
    </div>
  );
};

export default Box;
