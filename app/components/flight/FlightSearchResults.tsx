import FlightDetails from './Booked';

const FlightSearchResults = () => {
  return (
    <div className="p-6 space-y-4">
      <FlightDetails
        airlineLogo="/qantas-logo.png" // Dummy airline logo path
        departure={{
          time: "20:10",
          airport: "LHR",
          date: "Wed 13 Nov",
        }}
        arrival={{
          time: "06:30",
          airport: "SYD",
          date: "Fri 15 Nov",
        }}
        duration="23H 20M"
        price={2097.8} // Price in USD
        stops="Non Stop"
        baggageIncluded={true}
        specialSavings={true}
      />

      <FlightDetails
        airlineLogo="/delta-logo.png" // Another airline logo
        departure={{
          time: "15:00",
          airport: "JFK",
          date: "Mon 10 Dec",
        }}
        arrival={{
          time: "18:45",
          airport: "LAX",
          date: "Mon 10 Dec",
        }}
        duration="6H 45M"
        price={349.99} // Another price example
        stops="Non Stop"
        baggageIncluded={false}
        specialSavings={false}
      />

      <FlightDetails
        airlineLogo="/emirates-logo.png"
        departure={{
          time: "09:30",
          airport: "DXB",
          date: "Thu 5 Jan",
        }}
        arrival={{
          time: "13:00",
          airport: "LHR",
          date: "Thu 5 Jan",
        }}
        duration="7H 30M"
        price={1500.0}
        stops="1 Stop"
        baggageIncluded={true}
        specialSavings={false}
      />

      <FlightDetails
        airlineLogo="/american-airlines-logo.png"
        departure={{
          time: "14:20",
          airport: "MIA",
          date: "Fri 2 Feb",
        }}
        arrival={{
          time: "17:55",
          airport: "ORD",
          date: "Fri 2 Feb",
        }}
        duration="3H 35M"
        price={240.5}
        stops="Non Stop"
        baggageIncluded={true}
        specialSavings={false}
      />
    </div>
  );
};

export default FlightSearchResults;
