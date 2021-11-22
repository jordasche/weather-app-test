import WeatherCard from "../WeatherCard/WeatherCard";
import { useEffect, useState } from "react";

export default function WeatherWidget(props) {
   const [forecasts, setForecasts] = useState([]);
   const [todaysWeather, setTodaysWeather] = useState({});
   const todaysDate = new Date();
   const [loadingData, setLoadingData] = useState(true);

   useEffect(() => {
      let forecastData;
      let todaysData;
      let todaysNotFound = true;
      const getData = async () => {
         forecastData = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&cnt=40&units=metric&appid=4939a302d4cda8da3083f7219fa36b06`
         );
         forecastData = await forecastData.json();
         todaysData = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=4939a302d4cda8da3083f7219fa36b06`
         );
         todaysData = await todaysData.json();

         setForecasts(
            forecastData.list.filter((item, i) => {
               if (
                  todaysDate.setHours(0, 0, 0, 0) !==
                     new Date(item.dt_txt).setHours(0, 0, 0, 0) &&
                  item.dt_txt.includes("15:00:00")
               )
                  return item;
            })
         );

         setTodaysWeather(todaysData);

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
                     forecast={todaysWeather}
                     width="100%"
                     day="Today"
                  />
               </div>
               <div className="weather-widget__bottom">
                  {forecasts.map((forecast, i) => {
                     //returns weather card for 4 days
                     if (i < 4) {
                        return (
                           <WeatherCard
                              forecast={forecast}
                              key={i}
                              width="100%"
                           />
                        );
                     }
                  })}
               </div>
            </div>
         )}
      </>
   );
}
