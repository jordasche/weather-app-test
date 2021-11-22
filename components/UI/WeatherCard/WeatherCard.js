import Head from "next/head";
import Image from "next/image";

export default function WeatherCard(props) {
   const todaysDate = new Date();

   const getDayString = (date) => {
      switch (date) {
         case 0:
            return "Sun";
         case 1:
            return "Mon";
         case 2:
            return "Tue";
         case 3:
            return "Wed";
         case 4:
            return "Thu";
         case 5:
            return "Fri";
         case 6:
            return "Sat";

         default:
            break;
      }
   };

   const getWeatherIcon = (condition) => {
      console.log("CONDITION");
      console.log(condition);
      switch (condition) {
         case "Clouds":
            return (
               <i className="fas fa-cloud" style={{ color: "#bddde3" }}></i>
            );
         case "Rain":
            return (
               <i
                  className="fas fa-cloud-showers-heavy"
                  style={{ color: "#bddde3" }}
               ></i>
            );
         case "Clear":
            return <i className="fas fa-sun" style={{ color: "#FFE168" }}></i>;
         case "Snow":
            return (
               <i class="far fa-snowflake" style={{ color: "#2e4369" }}></i>
            );
         default:
            break;
      }
   };

   return (
      <>
         {props.type === "large" ? (
            <div
               className="weather-card-large"
               style={{ width: props.width, height: props.height }}
            >
               <div className="weather-card-large__day">
                  {todaysDate.setHours(0, 0, 0, 0) ===
                  new Date(props.forecast.dt_txt).setHours(0, 0, 0, 0)
                     ? "Today"
                     : getDayString(new Date(props.forecast.dt_txt).getDay())}
               </div>
               <div className="weather-card-large__info">
                  <div className="weather-card-large__info-left">
                     <div className="weather-card__icon">
                        {getWeatherIcon(props.forecast.weather[0].main)}
                     </div>
                  </div>
                  <div className="weather-card-large__info-right">
                     <div className="weather-card__temperature">
                        {`${Math.round(props.forecast.main.temp)}°`}
                     </div>
                     <div className="weather-card__weather-text">
                        {props.forecast.weather[0].main}
                     </div>
                  </div>
               </div>
            </div>
         ) : (
            <div
               className="weather-card"
               style={{ width: props.width, height: props.height }}
            >
               <div className="weather-card__day">
                  {todaysDate.setHours(0, 0, 0, 0) ===
                  new Date(props.forecast.dt_txt).setHours(0, 0, 0, 0)
                     ? "Today"
                     : getDayString(new Date(props.forecast.dt_txt).getDay())}
               </div>
               <div className="weather-card__icon">
                  {getWeatherIcon(props.forecast.weather[0].main)}
               </div>
               <div className="weather-card__temperature">
                  {`${Math.round(props.forecast.main.temp)}°`}
               </div>
            </div>
         )}
      </>
   );
}