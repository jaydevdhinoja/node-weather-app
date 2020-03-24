const request = require('request'
)
const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/824d9c928671864245581d58e7d91072/'+ latitude + ',' + longitude +'?units=si'

    request({ url: url, json: true }, (error, response) => {

        if(error) {
            callback('Unable to connect to weather services!')
        } else if(response.body.error) {
            callback('Unable to find location. Try another search!')
        } else {
            callback(undefined, response.body.daily.data[0].summary + 'It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain')
        }
    })
}

module.exports = forecast