import React, { useEffect, useState } from "react";

const ForecastPage: React.FC = () => {
  const [forecastData, setForecastData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchForecast = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=d619dfbd44bf4bf2a5981418251005&q=Dhaka&days=1&hour=1`
      );
      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message);
      }

      setForecastData(data.forecast?.forecastday[0]?.hour || []);
    } catch (err: any) {
      setError(err.message || "Failed to fetch forecast");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchForecast();
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501973801540-537f08ccae7d?auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      <div className="bg-black bg-opacity-60 min-h-screen text-white p-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-6 text-center">
            Hourly Forecast for Dhaka
          </h1>

          {error && (
            <p className="text-red-400 font-semibold text-center mb-4">
              {error}
            </p>
          )}

          {loading ? (
            <p className="text-center">Loading forecast...</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {forecastData.map((hour, idx) => (
                <div
                  key={idx}
                  className="bg-white bg-opacity-20 backdrop-blur-md p-4 rounded-xl shadow-md text-center text-white"
                >
                  <p className="font-bold text-lg">
                    {hour.time.split(" ")[1].slice(0, 5)}
                  </p>
                  <p className="text-2xl">{hour.temp_c}°C</p>
                  <img
                    src={hour.condition.icon}
                    alt={hour.condition.text}
                    className="mx-auto"
                  />
                  <p className="text-sm mt-1">{hour.condition.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForecastPage;
