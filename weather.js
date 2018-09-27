var currentWeather = '';
var openWeatherKey = '22de199405e9bc855be8a60cd5dbae04';
function buildWeatherURL() {
  // queryURL is the url we'll use to query the API
  var queryURL = 'https://api.openweathermap.org/data/2.5/weather?';
  // https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=tjXP6z2au64OS8HUdvnnP2GgHf1t3JQeuDDTsxoo
  // Begin building an object to contain our API call's query parameters
  // Set the API key
  var queryParams = { "appid": openWeatherKey };

  // Grab text the user typed into the search input, add to the queryParams object
  // queryParams.q = $("#search-term")
  // .val()
  // .trim();
  queryParams.q = 'yellowstone,us'

  // Logging the URL so we have access to it for troubleshooting
  console.log("---------------\nURL: " + queryURL + "\n---------------");
  console.log(queryURL + $.param(queryParams));
  return queryURL + $.param(queryParams);
}
queryURL = buildWeatherURL();
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function (response) {
    console.log(response);
  var weather = (response.weather[0].description);
  currentWeather = `<div class='current-weather'>Current Weather: ${weather}</div>`
  // var description = (response.data[1].description);
  // $('#ys-sample').text(description)
  $content.append(currentWeather);
});
