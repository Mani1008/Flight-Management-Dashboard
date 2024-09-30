import React from "react";

type FlightDetailsProps = {
  airlineLogo: string;
  departure: {
    time: string;
    airport: string;
    date: string;
  } | null; // Allow null values
  arrival: {
    time: string;
    airport: string;
    date: string;
  } | null;
  duration: string;
  price: number | null; // Allow null values for price
  stops: string;
  baggageIncluded: boolean;
  specialSavings: boolean;
};

const FlightDetails: React.FC<FlightDetailsProps> = ({
  airlineLogo,
  departure,
  arrival,
  duration,
  price,
  stops,
  baggageIncluded,
  specialSavings,
}) => {
  return (
    <div className="flex justify-between border p-4 rounded-lg shadow-md">
      <div className="flex flex-col">
        {specialSavings && (
          <div className="bg-gray-800 text-white text-xs py-1 px-2 mb-2 rounded-md w-max">
            🔥 Special Savings Inside
          </div>
        )}
        <div className="flex items-center mb-2">
          <img src={airlineLogo} alt="airline-logo" className="w-8 h-8 mr-2" />
          <div className="text-lg font-semibold">
            {departure?.airport} → {arrival?.airport}
          </div>
        </div>
        <div className="flex justify-between items-center mb-2">
          <div className="text-center">
            <p className="text-xl font-semibold">{departure?.time || "N/A"}</p>
            <p className="text-gray-500">{departure?.date || "N/A"}</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xs text-gray-500">{stops}</p>
            <p className="text-sm font-medium text-blue-600">{duration}</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-semibold">{arrival?.time || "N/A"}</p>
            <p className="text-gray-500">{arrival?.date || "N/A"}</p>
          </div>
        </div>
        <div>
          <button className="text-blue-500 text-sm">Flight Details ↓</button>
        </div>
      </div>

      <div className="flex flex-col justify-between text-right">
        <div>
          {/* Fallback value if price is null or undefined */}
          <p className="text-2xl font-semibold">
            ${price ? price.toFixed(2) : "N/A"}
          </p>
          <p className="text-gray-500 text-sm">Per Person</p>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
          Select
        </button>
        {baggageIncluded && (
          <div className="flex items-center mt-2">
            <img
              src="/baggage-icon.png"
              alt="baggage"
              className="w-6 h-6 mr-2"
            />
            <p className="text-xs text-gray-500">Baggage Included</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlightDetails;
