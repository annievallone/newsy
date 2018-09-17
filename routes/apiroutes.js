
var request = require("request");
var cheerio = require("cheerio");
var db = require("../models");

module.exports = function (app) {
    app.post("/scrape", function (req, res) {
        // res.redirect('/route to scrape')
        console.log("DATE ON BACK END", req.body)
        var month = req.body.month
        //template literals or template string
        var URL = `https://www.events12.com/atlanta/${month}`
        console.log(URL)
        request(URL, function (err, data, html) {
            // console.log('DATA-----------------------------------------------:', html)
            var $ = cheerio.load(html);
            // var results = ;
            $("article").each(function (i, element) {
                var result = [];
                var title = $(element).find("a").text()
                var date = $(element).find(".date").text()
                var url = $(element).find("a").attr("href")
                result.push({ title: title, date: date, url: url })
                console.log(result)
                db.Article.create(result, function (dbArticle) {
                    console.log(dbArticle);
                    res.redirect('/')
                })
                // .catch(function (err) {

                // })
            });
        });

    })
};

/*
/article/:id
req.params.id
*/
