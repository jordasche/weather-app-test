import Head from "next/head";
import Image from "next/image";
import WeatherCard from "../WeatherCard/WeatherCard";
import { useEffect, useState } from "react";

export default function WeatherWidget(props) {
   const [forecasts, setForecasts] = useState([]);
   const todaysDate = new Date();
   const [loadingData, setLoadingData] = useState(true);

   useEffect(() => {
      let data;
      let todaysNotFound = true;
      const getData = async () => {
         data = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&cnt=34&units=metric&appid=4939a302d4cda8da3083f7219fa36b06`
         );

         data = await data.json();

         setForecasts(
            data.list.filter((item, i) => {
               if (
                  todaysDate.setHours(0, 0, 0, 0) ===
                     new Date(item.dt_txt).setHours(0, 0, 0, 0) &&
                  todaysNotFound
               ) {
                  todaysNotFound = false;
                  return item;
               } else if (item.dt_txt.includes("18:00:00")) return item;
            })
         );
         console.log(forecasts);
         setLoadingData(false);
      };

      getData();
      setLoadingData(true);
   }, []);

   return (
      <>
         {loadingData ? (
            <></>
         ) : (
            <div
               className={`weather-widget ${
                  props.active ? "weather-widget--active" : ""
               }`}
            >
               <div className="weather-widget__top">
                  {/* returns weather card for today */}
                  <WeatherCard
                     type="large"
                     forecast={forecasts[0]}
                     width="100%"
                  />
               </div>
               <div className="weather-widget__bottom">
                  {forecasts
                     .filter((forecast, i) => {
                        //removes first day
                        return i > 0;
                     })
                     .map((forecast, i) => {
                        //returns weather card for 4 days
                        return (
                           <WeatherCard
                              forecast={forecast}
                              key={i}
                              width="100%"
                           />
                        );
                     })}
               </div>
            </div>
         )}
      </>
   );
}
