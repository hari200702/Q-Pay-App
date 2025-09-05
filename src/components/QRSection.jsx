import React from "react";
import { useNavigate } from "react-router-dom";

const QRSection = () => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate("/qr");
  };

  return (
    <div className="p-4 md:p-6 flex flex-col h-full">
      <div>
        <h3 className="text-lg md:text-xl font-medium text-gray-500 uppercase mb-4 md:mb-6">
          QR
        </h3>

        <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-6 md:space-x-10 space-y-6 sm:space-y-0">
          <div className="p-2 rounded-lg border">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/QR_Code_Example.svg"
              alt="QR Code"
              className="w-28 md:w-32 h-28 md:h-32 object-contain"
            />
          </div>

          <div className="text-center sm:text-left max-w-xs">
            <h4 className="font-semibold text-gray-800 mb-2 text-sm md:text-base">
              Order QR
            </h4>
            <ul className="text-xs md:text-sm text-gray-600 space-y-1 md:space-y-2">
              <li className="flex items-start justify-center sm:justify-start">
                <span className="mr-2">•</span>Receive Payment
              </li>
              <li className="flex items-start justify-center sm:justify-start">
                <span className="mr-2">•</span>Order new QRs
              </li>
              <li className="flex items-start justify-center sm:justify-start">
                <span className="mr-2">•</span>Download QR
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex-1"></div>

      <div className="mt-6 md:mt-8">
        <div className="border-t border-gray-300 mb-4 md:mb-6"></div>
        <button
          onClick={handleViewMore}
          className="w-full bg-green-600 text-white py-2.5 md:py-3 rounded-lg font-medium hover:bg-green-700 transition-colors text-sm md:text-base"
        >
          View more
        </button>
      </div>
    </div>
  );
};

export default QRSection;
