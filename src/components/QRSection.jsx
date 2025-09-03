import React from "react";

const QRSection = () => {
    return (
        <div className="p-6 flex flex-col justify-between h-full">
            <div>
                <h3 className="text-xl font-medium text-gray-500 uppercase mb-6">
                    QR
                </h3>

                {/* QR + Details side by side */}
                <div className="flex justify-center items-center space-x-10">
                    {/* QR Image */}
                    <div className="p-2 rounded-lg border">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/4/41/QR_Code_Example.svg"
                            alt="QR Code"
                            className="w-32 h-32 object-contain"
                        />
                    </div>

                    {/* Details */}
                    <div className="text-left max-w-xs">
                        <h4 className="font-semibold text-gray-800 mb-2">
                            Order QR
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li className="flex items-start">
                                <span className="mr-2">•</span>Receive Payment
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">•</span>Order new QRs
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">•</span>Download QR
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Divider + Button at bottom */}
            <div>
                <div className="border-t border-gray-300 my-6"></div>
                <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                    View more
                </button>
            </div>
        </div>
    );
};

export default QRSection;
