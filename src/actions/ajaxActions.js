// import { FETCH_WEATHER } from "./types";

//  export async function fetchWeather () {
//   const ids = {
//     Munich: 2867714,
//     London: 2643743,
//     California: 4350049,
//   };

//   const fetches = await Promise.all(
//     Object.values(ids).map((e) =>
//       fetch(
//         `https://api.openweathermap.org/data/2.5/forecast?id=${e}&appid=7841727ef5050281f8361e79d5e987ca`
//       ).then((e) => e.json()
//       .then(res=>console.log(res)))
//     )
//   );

//   return{
//     type: FETCH_WEATHER,
//     payload: {
//       Munich: fetches[0],
//       London: fetches[1],
//       California: fetches[2],
//     },
//   }
// };