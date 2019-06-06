import React from "react";
import Box from "./Box";

const LeanCanvas = () => {
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
            />
          </div>
          <div className="h-1/3">
            <Box
              cssClasses="border-l-0 border-t-0"
              title="Existing alternatives"
              subtitle="How are these problems solved today ?"
              tabIndex={1}
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
            />
          </div>
          <div className="h-1/2">
            <Box
              title="Key metrics"
              subtitle="How to tell that your business is going well ?"
              tabIndex={8}
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
            />
          </div>
          <div className="h-1/3">
            <Box
              cssClasses="border-t-0"
              title="High-level concept"
              subtitle="Your X for Y analogy"
              tabIndex={3}
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
            />
          </div>
          <div className="h-1/2">
            <Box
              title="Channels"
              subtitle="What are your paths to customers ?"
              tabIndex={5}
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
            />
          </div>
          <div className="h-1/3">
            <Box
              cssClasses="border-r-0 border-t-0"
              title="Early adopters"
              subtitle="Characteristics of your ideal customer"
              tabIndex={2}
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
          />
        </div>
        <div className="w-1/2">
          <Box
            cssClasses="border-b-0 border-r-0 rounded-br-lg"
            title="Revenues"
            subtitle="List your sources of revenue"
            tabIndex={6}
          />
        </div>
      </div>
    </div>
  );
};

export default LeanCanvas;
