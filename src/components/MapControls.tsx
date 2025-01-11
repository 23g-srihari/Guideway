import { useControls } from "react-zoom-pan-pinch";
import { FaPlus, FaMinus, FaExpandAlt } from "react-icons/fa";

function Controls() {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <div className="inline-flex rounded-md absolute right-4 bottom-4 invisible md:visible">
      <button
        className="control-btn bg-gray-800 hover:bg-gray-700 text-white rounded-l p-2 transition-all duration-200"
        aria-label="zoomIn"
        onClick={() => zoomIn()}
      >
        <FaPlus />
      </button>
      <button
        className="control-btn bg-gray-800 hover:bg-gray-700 text-white p-2 transition-all duration-200"
        aria-label="zoomOut"
        onClick={() => zoomOut()}
      >
        <FaMinus />
      </button>
      <button
        className="control-btn bg-gray-800 hover:bg-gray-700 text-white rounded-r p-2 transition-all duration-200"
        aria-label="resetTransform"
        onClick={() => resetTransform()}
      >
        <FaExpandAlt />
      </button>
    </div>
  );
}

export default Controls;
