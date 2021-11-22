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
         case "Drizzle":
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
               <i className="far fa-snowflake" style={{ color: "#2e4369" }}></i>
            );
         case "Thunderstorm":
            return <i className="far fa-bolt" style={{ color: "#FFE168" }}></i>;
         default:
            return <i className="fas fa-sun" style={{ color: "#FFE168" }}></i>;
      }
   };

   return (
      <>
         {props.type === "large" ? (
            //  Large card
            <div
               className="weather-card-large"
               style={{ width: props.width, height: props.height }}
            >
               <div className="weather-card-large__day">
                  {props.day === "Today"
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
            //  Small card
            <div
               className="weather-card"
               style={{ width: props.width, height: props.height }}
            >
               <div className="weather-card__day">
                  {props.day === "Today"
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
