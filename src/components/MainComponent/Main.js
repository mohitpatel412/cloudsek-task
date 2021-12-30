import React, { useState } from "react";
import Box from "../Box/Box";
import Input from "../Input/Input";

const Main = () => {
  const [row, setRow] = useState(2);
  const [col, setCol] = useState(2);
  const [makeMatrix, setMakeMatrix] = useState(false);
  const [matrixDetails, setMatrixDetails] = useState([]);
  const [storeHouseCoordinates, setstoreHouseCoordinates] = useState([]);
  const [res, setRes] = useState([]);

  const handleMakeMatrix = (e) => {
    e.preventDefault();
    console.log(row, col);

    setMakeMatrix(!makeMatrix);
    setMatrixDetails([]);
    setRes([]);
  };

  console.log(row, col);
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
    console.log(storeHouseCoordinates);
    var mn = Number.MAX_VALUE;
    for (let i = 0; i < storeHouseCoordinates.length; i++) {
      let dist = 0;

      for (let j = 0; j < matrixDetails.length; j++) {
        if (matrixDetails[j][2] !== "House") {
          console.log(matrixDetails[j][2]);
          dist += Math.sqrt(
            (matrixDetails[j][0] - storeHouseCoordinates[i][0]) ** 2 +
              (matrixDetails[j][1] - storeHouseCoordinates[i][1]) ** 2
          );
        }
      }
      //   console.log(dist);
      console.log(mn);
      if (dist < mn) {
        mn = dist;
        setRes([
          storeHouseCoordinates[i][0],
          storeHouseCoordinates[i][1],
          dist,
        ]);
      }
    }
  };

  return (
    <div className="mx-2">
      <Input row={row} col={col} setCol={setCol} setRow={setRow} />
      <div className="text-center">
        <button
          onClick={handleMakeMatrix}
          className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
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
              gridTemplateRows: `repeat(${row}, 115px)`,
              gridTemplateColumns: `repeat(${col}, 115px)`,
            }}
          >
            {matrix.map((item, idx) => {
              return <div key={idx}>{item}</div>;
            })}
          </div>
        </div>
      ) : null}

      <div className="text-center md:p-6 p-3">
        <button
          onClick={handleCalculateBest}
          className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        >
          Calculate Best House
        </button>
      </div>
      <div>{`${res[0]} ${res[1]} ${res[2]}`}</div>
    </div>
  );
};

export default Main;
