import React from "react";

const DocPanel = () => {
  return (
    <div className="relative py-6">
      <div
        id="doc-panel-twisted"
        className="absolute bg-red-400 shadow-lg"
        style={{ height: "140%" }}
      />

      <div className="w-full lg:w-4/5 mx-auto py-16 px-4 lg:px-0">
        <div className="flex justify-between">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-serif text-white">
              About Lean Canvas
            </h2>

            <blockquote className="text-white italic pl-6 border-l-2 border-white mt-10">
              <span className="text-xl font-serif text-orange-500">" </span>{" "}
              Lean Canvas is a<b> 1-page business plan template</b> that helps
              you deconstruct your idea into its key assumptions using 9 basic
              building blocks.
              <br />
              <br />
              Unlike a business plan that takes too long to write, and more
              important, no one reads, a Lean Canvas is designed to help you
              create a quick snapshot of your idea, share it with someone for
              feedback, and refine it iteratively.
              <br />
              <br />
              <small className="text-orange-500">
                (Ash Maurya, creator of Lean Canvas)
              </small>
            </blockquote>
          </div>

          <div className="w-full md:w-1/3 flex flex-col items-center px-4">
            <div className="flex flex-col items-center">
              <div className="rounded-full w-6 h-6 bg-orange-500 text-center shadow">
                <small className="text-white font-title">1</small>
              </div>
              <b className="text-lg text-white mt-2 text-center">
                Fill the canvas following the order showed by orange circle
              </b>
            </div>

            <div className="flex flex-col items-center mt-10">
              <div className="rounded-full w-6 h-6 bg-orange-500 text-center shadow">
                <small className="text-white font-title">2</small>
              </div>
              <b className="text-lg text-white mt-2 text-center">
                Save your canvas as JSON to re-edit it later or as PNG to share
                it ! Everything you input is saved your in local storage
              </b>
            </div>

            <div className="flex flex-col items-center mt-10">
              <div className="rounded-full w-6 h-6 bg-orange-500 text-center shadow">
                <small className="text-white font-title">3</small>
              </div>
              <b className="text-lg text-white mt-2 text-center">Enjoy !</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocPanel;
