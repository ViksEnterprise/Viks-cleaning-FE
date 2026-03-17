import React from "react";
import { BsCheck, BsExclamation, BsX } from "react-icons/bs";

interface ModelPopUPProps {
  display: boolean;
  type: string;
  res: string;
  onClose: () => void;
}

const ModelPopUP: React.FC<ModelPopUPProps> = ({
  display,
  type,
  res,
  onClose,
}) => {
  if (!display) {
    return;
  }

  return (
    <div className="fixed w-full h-full z-4 top-0 start-0 bg-black/45 flex items-center justify-center p-4">
      <div className="bg-white w-sm h-54 rounded-lg p-3 flex relative items-center flex-col justify-center gap-3">
        <div className="absolute top-0 end-0 p-1">
          <BsX className="cursor-pointer" size={30} onClick={onClose} />
        </div>
        {type && (
          <div
            className={
              type == "error"
                ? "flex h-24 w-24 rounded-full bg-red-500 items-center justify-center text-white"
                : "flex h-24 w-24 rounded-full bg-green-500 items-center justify-center text-white"
            }
          >
            {type == "error" ? (
              <BsExclamation size={150} />
            ) : (
              <BsCheck size={150} />
            )}
          </div>
        )}
        <span className="text-gray-700 md:text-base text-sm font-medium text-center">
          {res}
        </span>
      </div>
    </div>
  );
};

export default ModelPopUP;
