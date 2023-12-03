

const CustomMessage = ({ children, setState, actions }) => {

  const handleClick = async () => {
    await actions.handleYes();
  }

  return (
    <div className="flex flex-col ml-[10px]">
      <button
        onClick={() => handleClick()}
        className="w-[10rem] my-1 px-4 py-2 bg-green-600 rounded-lg"
      >
        Yes
      </button>
      <button
        onClick={() => setState((state) => ({ ...state, no: true }))}
        className="w-[10rem] my-1 px-4 py-2 bg-red-600 rounded-md"
      >
        No
      </button>
    </div>
  );
}

export default CustomMessage
