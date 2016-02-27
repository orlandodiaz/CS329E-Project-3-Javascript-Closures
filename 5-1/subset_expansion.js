$(document).ready(function(){
    $("a").click(
        function(){
            var a = $(this).prev("div");
            a.toggleClass("hide");
            if (a.attr("class") !=  "hide") {
                a.show();
                $(this).html("Show less");


            }
            else {
                a.hide();
                $(this).html("Show more");

            }

        }
    )
})