
var request = require("request");
var cheerio = require("cheerio");
var db = require("../models");

module.exports = function (app) {
    app.post("/scrape", function (req, res) {

        var month = req.body.month

        var URL = `https://www.events12.com/atlanta/${month}`

        request(URL, function (err, data, html) {
            var $ = cheerio.load(html);
            var results = [];
            $("article").each(function (i, element) {
                var title = $(element).find("a").text()
                var date = $(element).find(".date").text()
                var url = $(element).find("a").attr("href")
                results.push({ title: title, url: url, date: date })
            });
            db.Article.insertMany(results, function () {
                res.redirect('/')
            })
        });
    })
    // $.post("/article/:id", user, function (result) {
    //     var id = $(element).find("id").text();
    //     console.log(result);

    // });
    // app.post("/article/:id", function (req, res) {
    //     console.log(id)
    //     db.Comment.create(req.body)
    //         .then(function (dbComment) {
    //             return db.Article.findOneAndUpdate({ _id: req.params.id }, { $push: { comment: dbComment._id } }, { new: true });
    //         })
    //         .then(function (dbArticle) {
    //             res.send(dbArticle);
    //         })
    // });
    // app.delete("/article/:article_id/comment/:comment_id", function (req, res) {
    //     db.Comment.findOneAndRemove({ _id: req.params.comment_id }, function (err) {
    //         if (err) {
    //             console.log(err);
    //         } else {
    //             db.Article.findOneAndUpdate({ _id: req.params.article_id }, { $pull: { comment: req.params.comment_id } })
    //                 .then(function (err) {
    //                     if (err) {
    //                         console.log(err);
    //                     }
    //                     res.send("note deleted")
    //                 })
    //         }
    //     })
    // })
}


