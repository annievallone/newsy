

$("#save").on("click", function (event) {
    var id = $(element).find("id").text();
    $.post("/article/:id", user, function (result) {
        //Currently returns the html as a string. Hotfix is to redirect user to intended url upon completion of post request via client js.
        console.log(result);

    });
})

$("#save").on("click", function (event) {
    event.preventDefault();
    let thisId = $(".title").attr("data-id");

    $.ajax({
        method: "POST",
        url: "/article/" + thisId,
        data: {
            title: $("#title").val(),
            body: $("#body").val()
        }
    }).then(function (data) {
        console.log(data);

        $("#title").val("");
        $("#body").val("");
        location.reload();
    })
})