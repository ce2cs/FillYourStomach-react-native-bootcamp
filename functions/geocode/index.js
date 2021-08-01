const { locations: locationsMock } = require("./geocode.mock");
const functions = require('firebase-functions');
const url = require("url");

module.exports.geocodeRequest = (request, response, client) => {
  const { city, mock } = url.parse(request.url, true).query;
  if (mock === 'true') {
    const locationMock = locationsMock[city.toLowerCase()];
    response.json(locationMock);
  } else {
    console.log(functions.config().geocode.key)
    client
      .geocode({
        params: {
          address: city,
          key: functions.config().geocode.key,
        },
        timeout: 10000,
      })
      .then((res) => {
        return response.json(res.data);
      })
      .catch((e) => {
        response.status(400);
        return response.send(e.response.data.error_message);
      });
  }
};