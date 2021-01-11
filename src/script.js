/* - - - CITY PHOTOS API - - - */

function showCity(result) {
  console.log(result.data.photos[0].image.web);
}

var city = "";

apiUrl = `https://api.teleport.org/api/urban_areas/slug:${city}/images`;

axios.get(apiUrl).then(showCity);
