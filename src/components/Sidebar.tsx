import logo from "../assets/img/pathpal-logo.svg";
import { FiChevronRight } from "react-icons/fi";
import { useContext, useEffect, useState } from "react";
import {
  MapDataContextType,
  NavigationContextType,
  ObjectItem,
} from "@/utils/types";
import { MapDataContext, NavigationContext } from "../pages/Map";

import { navigateToObject } from "@/utils/navigationHelper";

interface ParsedObjects {
  [key: string]: {
    len: number;
    results: ObjectItem[];
  };
}

function Sidebar() {
  const { navigation, setNavigation, setIsEditMode } = useContext(
    NavigationContext
  ) as NavigationContextType;
  const { objects } = useContext(MapDataContext) as MapDataContextType;
  const [parsedObjects, setParsedObjects] = useState<ParsedObjects>({});
  const [isRotating, setIsRotating] = useState(false);
  useEffect(() => {
    const groupedObjects = () => {
      const data: ParsedObjects = {};
      objects.forEach((object) => {
        const firstLetter = object.name.charAt(0).toUpperCase();
        if (!data[firstLetter]) {
          data[firstLetter] = {
            len: 0,
            results: [],
          };
        }
        data[firstLetter].results.push(object);
        data[firstLetter].len += 1;
      });
      setParsedObjects(data);
    };
    groupedObjects();
  }, [objects]);

  function handleObjectNavigation(selectedObjectName: string) {
    const object = objects.find((obj) => obj.name === selectedObjectName);
    setIsEditMode(false);
    if (!object) return;
    console.log(object);
    navigateToObject(object.name, navigation, setNavigation);
  }

  return (
    <aside className="flex flex-col rounded-none w-[35rem] h-screen p-3 bg-gray-900 shadow-xl shadow-gray-800 -translate-x-full transform transition-transform duration-150 ease-in lg:translate-x-0 lg:shadow-md">
      <header className="flex flex-col mb-4 pr-1 border-b py-2 w-full border-gray-600">
        <div className="flex items-center flex-none mr-10">
          <div className="rounded-md w-16 h-16 p-4 bg-gray-700 center">
            <img
              src={logo}
              alt="Guide Way"
              className={`${isRotating ? "rotate" : ""}`}
              onClick={() => setIsRotating(true)}
              onAnimationEnd={() => setIsRotating(false)}
            />
          </div>
          <div className="flex flex-col ml-2">
            <p className="text-2xl font-semibold text-white">Guide Way</p>
            <div className="text-center">
  <p className="text-xs font-semibold text-blue-200">Navigate Indoor</p>
  <p className="text-xs font-semibold text-blue-200 mt-2">Spaces</p>
</div>
          </div>
        </div>
      </header>
      <div className="overflow-auto h-full">
        {Object.keys(parsedObjects)
          .sort()
          .map((letter, index) => (
            <div key={index} className="mb-4">
              <header className="p-2">
                <h2 className="text-2xl font-bold text-white">
                  {letter}
                  <span className="ml-2 text-sm font-medium text-gray-400">
                    - {parsedObjects[letter].len}{" "}
                    {parsedObjects[letter].len === 1 ? "Result" : "Results"}
                  </span>
                </h2>
              </header>
              <div className="flex flex-col">
                {parsedObjects[letter].results.map((item) => (
                  <div
                    key={item.id?.toString()}
                    data-product={item.name}
                    className="flex bg-gray-800 m-1 px-4 py-2 shadow-sm rounded-md cursor-pointer hover:bg-gray-700"
                    onClick={() => handleObjectNavigation(item.name)}
                  >
                    <div className="m-1">
                      <p className="text-xs 2xl:text-sm font-semibold text-gray-300">
                        {item.name}
                      </p>
                      <p className="text-xs 2xl:text-sm text-gray-500">
                        {item.desc}
                      </p>
                    </div>
                    <div className="center ml-auto h-auto center text-xl text-blue-400">
                      <FiChevronRight />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </aside>
  );
}

export default Sidebar;
