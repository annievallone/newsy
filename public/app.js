

$("#save").on("click", function (event) {
    var id = $(element).find("id").text();
    $.post("/article/:id", user, function (result) {
        console.log(result);

    });
})

// $("#save").on("click", function (event) {
//     event.preventDefault();
//     let thisId = $(".card-title").attr("data-id");
//     var comment = $(element).find(".comment")

//     $.ajax({
//         method: "POST",
//         url: "/article/" + thisId,
//         data: {
//             id: $("#id").val(),
//             comment: $("#commnet").val()
//         }
//     }).then(function (data) {
//         console.log(data);

//         // $("#title").val("");
//         // $("#body").val("");
//         location.reload();
//     })
// })