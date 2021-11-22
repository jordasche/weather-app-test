import Head from "next/head";
import WeatherWidget from "../components/UI/WeatherWidget/WeatherWidget";
import { useState } from "react";

export default function Home() {
   const [activeCity, setActiveCity] = useState([true, false, false]);

   const handleCityClick = (selectedCity) => {
      switch (selectedCity) {
         case 0:
            setActiveCity([true, false, false]);
            break;
         case 1:
            setActiveCity([false, true, false]);
            break;
         case 2:
            setActiveCity([false, false, true]);
            break;

         default:
            break;
      }
   };
   return (
      <div className="container">
         <Head>
            <title>Weather App</title>
            <meta name="description" content="A simple weather app" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />\
            <link
               rel="preconnect"
               href="https://fonts.gstatic.com"
               crossOrigin
            />
            <link
               href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,500&family=Roboto:wght@100;300;400;500;700&display=swap"
               rel="stylesheet"
            ></link>
            <link
               href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600&family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,500&family=Roboto:wght@100;300;400;500;700&display=swap"
               rel="stylesheet"
            />
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="/fontaw/css/all.min.css" />
         </Head>

         <nav className="city__selector">
            <h1
               className={`city__selector-city ${
                  activeCity[0] ? "city__selector-city--active" : ""
               }`}
               onClick={() => handleCityClick(0)}
            >
               Mississauga
            </h1>
            <h1
               className={`city__selector-city ${
                  activeCity[1] ? "city__selector-city--active" : ""
               }`}
               onClick={() => handleCityClick(1)}
            >
               Dubai
            </h1>
            <h1
               className={`city__selector-city ${
                  activeCity[2] ? "city__selector-city--active" : ""
               }`}
               onClick={() => handleCityClick(2)}
            >
               London
            </h1>
         </nav>
         <WeatherWidget active={activeCity[0]} city="mississauga" />
         <WeatherWidget active={activeCity[1]} city="dubai" />
         <WeatherWidget active={activeCity[2]} city="london" />

         <main className="main"></main>
      </div>
   );
}
