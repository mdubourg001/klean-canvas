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
              cssClasses="border-t-0 border-l-0 border-b-0"
            />
          </div>
          <div className="h-1/3">
            <Box
              cssClasses="border-l-0 border-t-0"
              title="Existing alternatives"
              subtitle="How are these problems solved today ?"
            />
          </div>
        </div>

        <div className="w-1/5 flex flex-col">
          <div className="h-1/2">
            <Box
              cssClasses="border-t-0"
              title="Solution"
              subtitle="What are your solutions for these problems ?"
            />
          </div>
          <div className="h-1/2">
            <Box
              title="Key metrics"
              subtitle="How to tell that your business is going well ?"
            />
          </div>
        </div>

        <div className="w-1/5">
          <div className="h-2/3">
            <Box
              cssClasses="border-t-0 border-b-0"
              title="Unique value proposition"
              subtitle="How are you different from your concurrents ?"
            />
          </div>
          <div className="h-1/3">
            <Box
              cssClasses="border-t-0"
              title="High-level concept"
              subtitle="Your X for Y analogy"
            />
          </div>
        </div>

        <div className="w-1/5">
          <div className="h-1/2">
            <Box
              cssClasses="border-t-0"
              title="Unfair advantage"
              subtitle="Something that can't be easily copied by concurrence"
            />
          </div>
          <div className="h-1/2">
            <Box
              title="Channels"
              subtitle="What are your paths to customers ?"
            />
          </div>
        </div>

        <div className="w-1/5">
          <div className="h-2/3">
            <Box
              cssClasses="border-t-0 border-r-0 border-b-0"
              title="Customer segments"
              subtitle="List your target customers and users"
            />
          </div>
          <div className="h-1/3">
            <Box
              cssClasses="border-r-0 border-t-0"
              title="Early adopters"
              subtitle="Characteristics of your ideal customer"
            />
          </div>
        </div>
      </div>

      <div className="h-1/3 flex">
        <div className="w-1/2">
          <Box
            cssClasses="border-b-0 border-l-0"
            title="Costs"
            subtitle="List your fixed and variable costs"
          />
        </div>
        <div className="w-1/2">
          <Box
            cssClasses="border-b-0 border-r-0"
            title="Revenues"
            subtitle="List your sources of revenue"
          />
        </div>
      </div>
    </div>
  );
};

export default LeanCanvas;
