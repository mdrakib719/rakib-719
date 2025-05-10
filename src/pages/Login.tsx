import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PageLayout } from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";

const weatherBackgrounds: Record<string, string> = {
  sunny:
    "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/blog-images//pexels-pixabay-267149.jpg", // img1
  rainy:
    "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/blog-images//pexels-sidali-2028885.jpg", // img2
  cloudy:
    "https://czrzkrlkqywcczazeopo.supabase.co/storage/v1/object/public/blog-images//pexels-pixabay-86405.jpg", // img3
};

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [weather, setWeather] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=d619dfbd44bf4bf2a5981418251005&q=Dhaka`
        );
        const data = await response.json();
        setWeather(data.current);
      } catch (err) {
        console.error("Failed to fetch weather:", err);
      }
    };

    fetchWeather();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("log")
      .select("*")
      .eq("email", email)
      .eq("password", password)
      .single();

    if (error || !data) {
      setMessage("Invalid email or password");
    } else {
      setMessage("Login successful!");
      setTimeout(() => navigate("/dashboard"), 1000);
    }
  };

  // Determine image based on weather condition
  const getWeatherImage = (): string => {
    const condition = weather?.condition?.text?.toLowerCase() || "";
    if (condition.includes("sun")) return weatherBackgrounds.sunny;
    if (condition.includes("rain")) return weatherBackgrounds.rainy;
    if (condition.includes("cloud")) return weatherBackgrounds.cloudy;
    return weatherBackgrounds.cloudy; // default
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Login Form */}
      <div className="w-full md:w-1/2 bg-white flex flex-col justify-center items-center p-8 relative">
        {/* Weather display */}
        {weather && (
          <div className="flex items-center gap-4 mb-4 text-gray-700">
            <img src={weather.condition.icon} alt={weather.condition.text} />
            <div>
              <p className="text-lg font-semibold">Dhaka</p>
              <p>
                {weather.temp_c}°C — {weather.condition.text}
              </p>
            </div>
          </div>
        )}

        <h1 className="text-6xl font-bold text-center">
          <span className="text-blue-500">Wel</span>
          <span className="text-orange-500">come</span>
        </h1>

        <form onSubmit={handleLogin} className="w-full max-w-sm mt-10">
          <input
            type="email"
            placeholder="Name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded mb-4"
          />
          <div className="relative mb-4">
            <input
              type="password"
              placeholder="PIN"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-blue-500 cursor-pointer">
              Forgot?
            </span>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded font-semibold hover:bg-blue-600"
          >
            Log in
          </button>
          {message && (
            <p className="text-center mt-4 text-sm text-red-500">{message}</p>
          )}
          <div className="text-center text-gray-500 my-4">or continue with</div>
          <div className="flex justify-center gap-4">
            <button className="w-10 h-10 rounded-full bg-gray-200">f</button>
            <button className="w-10 h-10 rounded-full bg-gray-200">G</button>
            <button className="w-10 h-10 rounded-full bg-gray-200"></button>
          </div>
        </form>
      </div>

      {/* Right Image/Background Panel */}
      <div
        className="hidden md:flex w-1/2 relative"
        style={{
          backgroundImage: `url('${getWeatherImage()}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <nav className="absolute top-6 right-10 flex space-x-6 text-white text-sm">
          <a href="/" className="hover:text-blue-500">
            Home
          </a>
          <a href="/forecast" className="hover:underline">
            Forecast
          </a>
          <a href="#" className="hover:underline">
            Webcams
          </a>
          <a href="#" className="hover:underline">
            Live map
          </a>
        </nav>
      </div>
    </div>
  );
};

export default LoginPage;
