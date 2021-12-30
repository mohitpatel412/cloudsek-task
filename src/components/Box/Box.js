import React from "react";

const Box = (props) => {
  const [showModal, setShowModal] = React.useState(false);
  const [assets, setAssets] = React.useState("");
  const [disabled, setDisabled] = React.useState(false);
  //   console.log(assets);
  const handlesetMatrix = (e) => {
    props.matrixDetails.push([
      props.dimensions[0],
      props.dimensions[1],
      assets,
    ]);
    setDisabled(true);
  };

  //   console.log(props.matrixDetails);

  return (
    <div className="py-2">
      <div className="p-2 mt-2 border-2 border-gray-700 rounded-md">
        <>
          <button
            className={
              disabled
                ? `bg-gray-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`
                : `bg-green-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`
            }
            type="button"
            onClick={() => setShowModal(true)}
            disabled={disabled}
          >
            {assets !== "" ? (
              <div>{assets}</div>
            ) : (
              <div>Select ({props.dimensions})</div>
            )}
          </button>
          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <h3 className="text-3xl font-semibold">Select One</h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>

                    <div className="relative p-6 flex-auto">
                      <div className="flex flex-col p-2 border-2 border-pink-500 rounded-md bg-pink-400 bg-opacity-30 items-center justify-center">
                        <button onClick={(e) => setAssets("House")}>
                          <img
                            src="/assets/images/house.png"
                            alt="House"
                            className="h-20 w-20"
                          />
                        </button>
                      </div>

                      <div>
                        <label className="text-gray-700" for="row">
                          Others :
                        </label>
                        <input
                          id="assets"
                          name="assets"
                          type="text"
                          value={assets}
                          onChange={(e) => setAssets(e.target.value)}
                          className="block w-full px-4 py-2 mt-2 border-black text-gray-700 bg-white border-2 rounded-md focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={(e) => {
                          setShowModal(false);
                          handlesetMatrix();
                        }}
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </>
      </div>
    </div>
  );
};

export default Box;
