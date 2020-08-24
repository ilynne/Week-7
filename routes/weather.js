const { Router } = require("express");
const router = Router();
const weatherDao = require('../daos/weather')

const isValidQuery = async (req, res, next) => {
  const { name } = req.query
  if (!name) {
    res.redirect("/weather");
  } else {
    next();
  }
}

router.get("/location", isValidQuery, async (req, res, next) => {
  const { name } = req.query
  const weather = await weatherDao.getWeatherForLocation(name)
  const temperature = weather ? weather.temperature : 'not available'
  if (weather) {
    res.render('location', { name, temperature })
  } else {
    res.status(404).render('location', { name, temperature });
  }
});

router.get("/", async (req, res, next) => {
  res.sendFile('index.html');
});


module.exports = router;
