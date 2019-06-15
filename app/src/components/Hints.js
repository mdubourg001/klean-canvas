import React from "react";

const Hints = ({ hints, set }) => {
  return (
    <>
      {hints.map(h => (
        <div
          key={h}
          className="hint w-full flex flex-col bg-gray-800 text-white opacity-90 rounded cursor-pointer px-6 py-4 mb-3"
          onClick={() => set(hints.filter(e => e !== h))}
        >
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-info"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12" y2="8" />
              </svg>

              <small className="font-bold ml-2">Hint</small>
            </div>

            <small className="hover:underline text-gray-300 cursor-pointer">
              Dismiss
            </small>
          </div>

          <small>{h}</small>
        </div>
      ))}
    </>
  );
};

export default Hints;
