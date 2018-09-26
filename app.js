var $content = $('#content')

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAyokywaeTWJGdIlVUL08yV6do6usm9MwE",
  authDomain: "group-project-1-5af97.firebaseapp.com",
  databaseURL: "https://group-project-1-5af97.firebaseio.com",
  projectId: "group-project-1-5af97",
  storageBucket: "group-project-1-5af97.appspot.com",
  messagingSenderId: "97025325136"
};
firebase.initializeApp(config);

// keys
var NPSkey = '7MdKWFV9urqKPc9MCwPZQ0QNbopENRTWAYjJ7aKH';
var NPScategories = ['alerts','articles','campgrounds','events','lessonplans','newsreleases','parks','people','places','visitorscenters']
function buildNPSURL(category) {
  // queryURL is the url we'll use to query the API
  var queryURL = "https://api.nps.gov/api/v1/";
  queryURL+=category +'?';
  // https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=tjXP6z2au64OS8HUdvnnP2GgHf1t3JQeuDDTsxoo
  // Begin building an object to contain our API call's query parameters
  // Set the API key
  var queryParams = { "api_key": NPSkey };

  // Grab text the user typed into the search input, add to the queryParams object
  // queryParams.q = $("#search-term")
  // .val()
  // .trim();
  queryParams.q = 'yellowstone'
  queryParams.limit = 10;
  // Logging the URL so we have access to it for troubleshooting
  console.log("---------------\nURL: " + queryURL + "\n---------------");
  console.log(queryURL + $.param(queryParams));
  return queryURL + $.param(queryParams);
}
NPScategories.forEach(element => {

  var queryURL = buildNPSURL(element);
  var cat = element;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
  //   response.data.forEach(element => {
  // var description = element.description;
  // var designation = element.designation;
  // var directionsInfo = element.directionsInfo;
  // var directionsUrl = element.directionsUrl;
  // var fullName = element.fullName;
  // var id = element.id;
  // var latLong = element.latLong;
  // var name = element.name;
  // var parkCode = element.parkCode;
  // var states = element.states;
  // var url = element.url;
  // var weatherInfo = element.weatherInfo;
  // var parkDescription = `<h1>${cat}</h1>
  // <div class="park-name">Park name: ${name}</div>
  // <div class="park-fullName">Park fullName: ${fullName}</div>
  // <div class="park-description">Park description: ${description}</div>
  // <div class="park-designation">Park designation: ${designation}</div>
  // <div class="park-directionsInfo">Park directionsInfo: ${directionsInfo}</div>
  // <div class="park-directionsUrl">Park directionsUrl: ${directionsUrl}</div>
  // <div class="park-id">Park id: ${id}</div>
  // <div class="park-latLong">Park latLong: ${latLong}</div>
  // <div class="park-parkCode">Park parkCode: ${parkCode}</div>
  // <div class="park-states">Park states: ${states}</div>
  // <div class="park-url">Park url: ${url}</div>
  // <div class="park-weatherInfo">Park weatherInfo: ${weatherInfo}</div>
  // `;
  // $content.prepend(parkDescription)
    });
    });
  
});
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
  var weather = (response.weather[0].description);
  currentWeather = `<div class='current-weather'>Current Weather: ${weather}</div>`
  // var description = (response.data[1].description);
  // $('#ys-sample').text(description)
  $content.append(currentWeather);
});












