var db = require("../models");

module.exports = function (app) {
    app.get('/', function (req, res) {
        console.log("INSIDE HOME ROUTE")
        db.Article.find({}, function (err, dbArticle) {
            // console.log("inside home route promise---------------", dbArticle)
            res.render('home', { article: dbArticle })
        })

    })
    app.get("/articles", function (req, res) {
        db.Article.find({})
            .then(function (dbArticle) {
                res.json(dbArticle);
            })
            .catch(function (err) {
                res.json(err);
            });
    });


}