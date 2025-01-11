import { useRouteDetails } from "@/hooks/useRouteDetails";
import { FaX } from "react-icons/fa6";
import { TbRoute } from "react-icons/tb";

function DesktopRouteDetails() {
  const { object, rightRouteLength, handleLeave } = useRouteDetails();

  return (
    <div className="md:w-fit md:visible invisible hidden md:flex flex-row pl-6">
      <div className="flex flex-inline rounded w-full bg-gray-800 navigation-info-pulse shadow-lg">
        <div className="w-12 h-12 center flex-none rounded-l text-blue-400 text-xl">
          <TbRoute />
        </div>
        <div className="flex flex-col max-w-32 h-full justify-center break-words">
          <p className="text-white text-sm font-semibold">{object?.name}</p>
        </div>
        <div className="flex flex-col h-full justify-center px-4">
          <p className="text-gray-300 text-xs">{rightRouteLength} m</p>
        </div>
        <div className="h-12 w-12 center flex-none rounded-r bg-gray-800 text-blue-400 text-xs">
          <button
            className="w-full h-8 center border-gray-600 border-l hover:bg-gray-700 rounded"
            onClick={handleLeave}
          >
            <FaX className="text-gray-400 hover:text-white transition-colors" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DesktopRouteDetails;
