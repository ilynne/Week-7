const { Router } = require("express");
const router = Router();

router.get("/", (req, res, next) => {
  res.sendFile('index.html');
});

module.exports = router;