const Weather = require('../models/weather');

module.exports = {};

module.exports.getWeatherForLocation = async (name) => {
  return await Weather.findOne({ name: name }).lean();
}
