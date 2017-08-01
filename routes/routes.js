var dateParser = require('../date.js');

var appRouter = function(app) {
  app.get("/", function(req, res) {
    res.render('index');
  });
  app.get("/:date", function(req, res) {
    var date = dateParser(req.params.date);
    res.json(date);
  });
};

module.exports = appRouter;