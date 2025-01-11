import { useRouteDetails } from "@/hooks/useRouteDetails";
import { FaX } from "react-icons/fa6";
import { TbRoute } from "react-icons/tb";

function MobileRouteDetails() {
  const { object, rightRouteLength, handleLeave } = useRouteDetails();

  return (
    <div className="absolute bottom-0 left-0 right-0 mx-auto w-full bg-gray-800 border-t border-gray-600 shadow-lg rounded-t-lg overflow-hidden">
      <button className="absolute right-2 top-2 p-2 bg-gray-700 rounded-full" onClick={handleLeave}>
        <FaX className="text-white" />
      </button>

      <div className="p-4 pb-0">
        <h1 className="text-white text-xl font-semibold mb-1">
          {object?.name}
        </h1>
        <p className="text-gray-300 text-sm">{object?.categoryName}</p>
      </div>

      <div className="bg-gray-700 text-white px-3 py-1 center w-fit rounded-md text-sm font-semibold m-3">
        <TbRoute className="inline-block mr-1 text-blue-400" />
        {rightRouteLength} meters
      </div>
    </div>
  );
}

export default MobileRouteDetails;
