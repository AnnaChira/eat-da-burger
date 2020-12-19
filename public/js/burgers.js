$(function (){
    $(".add-burger").on("submti", function (event) {
        event.preventDefault();
        var newBurger = {
            devoured: $("devoured").val().trim(),
            eat: $("eat").val().trim(),
        };
        $.ajax("/", {
            type: "Post",
            data: newBurger
        }).then(
            function () {
                console.log("Eat the burger");
            }
        );
    });
});