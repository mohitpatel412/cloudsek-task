import React, { useState } from "react";
import Box from "../Box/Box";
import Input from "../Input/Input";

const Main = () => {
  const [row, setRow] = useState(2);
  const [col, setCol] = useState(2);
  const [makeMatrix, setMakeMatrix] = useState(false);
  const [matrixDetails, setMatrixDetails] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [storeHouseCoordinates, setstoreHouseCoordinates] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [res, setRes] = useState([]);
  const [count, setCount] = useState(1);

  const handleMakeMatrix = (e) => {
    e.preventDefault();
    // console.log(row, col);
    if (col > 10) {
      alert("Keep column below or equal to 10");
      return;
    }

    setMakeMatrix(!makeMatrix);
    setMatrixDetails([]);
    setRes([]);
    if (disabled === true) {
      setDisabled(false);
    }
    setCount(1);
  };

  //   console.log(row, col);
  //console.log(matrixDetails);
  //   let matrix = new Array(Number(col))
  //     .fill(0)
  //     .map(() => new Array(Number(row)).fill(<Box />));

  let matrix = [];
  // let storeHouseCoordinates = [];

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      matrix.push(
        <Box
          matrixDetails={matrixDetails}
          setMatrixDetails={setMatrixDetails}
          dimensions={[i, j]}
          res={[res[0], res[1]]}
        />
      );
    }
  }

  const handleCalculateBest = () => {
    // console.log(matrixDetails);
    for (let i = 0; i < matrixDetails.length; i++) {
      //   console.log(matrixDetails[i][2]);
      if (matrixDetails[i][2] === "House") {
        storeHouseCoordinates.push(matrixDetails[i]);
      }
    }
    // console.log(storeHouseCoordinates);
    var mn = Number.MAX_VALUE;
    for (let i = 0; i < storeHouseCoordinates.length; i++) {
      let dist = 0;

      for (let j = 0; j < matrixDetails.length; j++) {
        if (matrixDetails[j][2] !== "House" || matrixDetails[j][2] !== "") {
          //   console.log(matrixDetails[j][2]);
          dist += Math.sqrt(
            (matrixDetails[j][0] - storeHouseCoordinates[i][0]) ** 2 +
              (matrixDetails[j][1] - storeHouseCoordinates[i][1]) ** 2
          );
        }
      }
      //   console.log(dist);
      //   console.log(mn);
      if (dist <= mn) {
        mn = dist;
        setCount(count + 1);
        setRes([
          storeHouseCoordinates[i][0],
          storeHouseCoordinates[i][1],
          dist,
        ]);
      }
    }

    setDisabled(true);
  };

  return (
    <div className="mx-2">
      {makeMatrix ? null : (
        <Input row={row} col={col} setCol={setCol} setRow={setRow} />
      )}

      <div className="text-center">
        <button
          onClick={handleMakeMatrix}
          className="px-4 py-2 my-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        >
          {makeMatrix === false ? "Make Matrix" : "Remove Matrix"}
        </button>
      </div>

      {makeMatrix === true ? (
        // <div className={`grid grid-cols-${col} gap-4`}>
        //   {matrix.map((mat, idx) => {
        //     return <div key={idx}>{mat}</div>;
        //   })}
        // </div>
        // <div className="flex flex-wrap justify-center">
        //   {[...Array(row)].map(() => (
        //     <div className="text-center">
        //       {[...Array(col)].map(() => (
        //         <div className="md:px-4 px-2">
        //           <Box />
        //         </div>
        //       ))}
        //     </div>
        //   ))}
        // </div>
        // <div className="flex flex-wrap justify-center">
        //   {matrix.map((row, idx1) => (
        //     <div className="text-center">
        //       {row.map((col, idx2) => (
        //         <div className="md:px-4 px-2">{col}</div>
        //       ))}
        //     </div>
        //   ))}
        // </div>
        <div className="flex flex-col items-center justify-center">
          <div
            className={`grid gap-4`}
            style={{
              gridTemplateRows: `repeat(${row}, 120px)`,
              gridTemplateColumns: `repeat(${col}, 120px)`,
            }}
          >
            {matrix.map((item, idx) => {
              return <div key={idx}>{item}</div>;
            })}
          </div>
        </div>
      ) : null}

      {makeMatrix ? (
        <div className="text-center md:p-6 p-3">
          <button
            onClick={handleCalculateBest}
            // disabled={disabled}
            className={
              disabled
                ? "px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-500 rounded-md hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-80"
                : "px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            }
          >
            Calculate Best House
          </button>
        </div>
      ) : null}

      {res[0] === undefined ? (
        <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md">
          <div className="flex items-center justify-center w-12 bg-blue-500">
            <svg
              className="w-6 h-6 text-white fill-current"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z" />
            </svg>
          </div>

          <div className="px-4 py-2 -mx-3">
            <div className="mx-3">
              <span className="font-semibold text-blue-500 ">Info</span>
              <p className="text-sm text-gray-600 ">
                Answer will be displayed here!!
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md ">
          <div className="flex items-center justify-center w-12 bg-emerald-500">
            <svg
              className="w-6 h-6 text-white fill-current"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
            </svg>
          </div>

          <div className="px-4 py-2 -mx-3">
            <div className="mx-3">
              <span className="font-semibold text-emerald-500 ">
                Best House is with{" "}
                <span className="text-red-500 font-bold">RED</span> box
              </span>
              <p className="text-sm text-gray-600 ">
                {`The best House is at Coordinates`}{" "}
                <span className="font-bold text-lg text-pink-500">{`${res[0]} ${res[1]}`}</span>
              </p>
            </div>
          </div>
        </div>
      )}
      {/* <div>{`${res[0]} ${res[1]} ${res[2]}`}</div> */}
    </div>
  );
};

export default Main;
