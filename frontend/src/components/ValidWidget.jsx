const ValidWidget = ({ children, setState, actions }) => {
  return (
    <div className="flex flex-col ml-[10px]">
      <button
        onClick={() => actions.handleCorrect()}
        className="w-[10rem] my-1 px-4 py-2 bg-green-600 rounded-lg"
      >
        Correct
      </button>
      <button
        onClick={() => setState((state) => ({ ...state, no: true }))}
        className="w-[10rem] my-1 px-4 py-2 bg-red-600 rounded-md"
      >
        Wrong
      </button>
    </div>
  );
};

export default ValidWidget;
