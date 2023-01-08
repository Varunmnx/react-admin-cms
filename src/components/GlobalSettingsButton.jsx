import React from "react";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

export const GlobalSettingsButton = () => {
  return (
    <div className="flex realtive dark:bg-main-dark-bg">
      <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
                    <button className=" text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white rounded-[50%]" style={{ background: "blue" }} >
                        <FiSettings />
                    </button>
            </TooltipComponent>
      </div>
    </div>
  );
};
