const API_KEY = "7432dfe305df7dc51991890195e9aa72";

function onGeoOk(position){
  console.log(position);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const URL = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  console.log(URL);
  
}

function onGeoError(){
  console.log("We couldn't get your location!");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);