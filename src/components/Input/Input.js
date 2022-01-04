import React from "react";

const Input = (props) => {
  return (
    <div>
      <div className="text-center p-4">
        <div className="text-2xl">Instructions - </div>
        <div className="font-sans">
          Click on the House Icon to select{" "}
          <span className="font-bold">House</span> or you may type{" "}
          <span className="font-bold">House</span> in Others box as well!!
        </div>
        <div>
          And to choose any other assets, type it in{" "}
          <span className="font-bold">Others :</span> text box{" "}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 md:py-8 py-4 lg:mx-60 md:mx-36 mx-4">
        <div>
          <label className="text-gray-700" htmlFor="row">
            Enter Rows :
          </label>
          <input
            id="rows"
            name="rows"
            type="number"
            value={props.row}
            onChange={(e) => props.setRow(Number(e.target.value))}
            className="block w-full px-4 py-2 mt-2 border-black text-gray-700 bg-white border-2 rounded-md focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>

        <div>
          <label className="text-gray-700" htmlFor="column">
            Enter Column : (Max 10 - For Convenience)
          </label>
          <input
            id="column"
            name="column"
            type="number"
            value={props.col}
            onChange={(e) => props.setCol(Number(e.target.value))}
            className="block w-full px-4 py-2 mt-2 border-black border-2 text-gray-700 bg-white rounded-md focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
