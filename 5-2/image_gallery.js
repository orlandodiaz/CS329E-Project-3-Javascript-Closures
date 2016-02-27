$(document).ready(function() {
    var url = new Array();
    var caption = new Array();
    $("#image_list a").each(function() {
        url.push($(this).attr("href"));
        caption.push ($(this).attr("title"));
        var pre = new Image();
        pre.src = $(this).attr("href");

    });


    $("#image_list a").click(function(evt) {

        $("#image").attr("src",url[$(this).parent().index()]);

        //swap caption

        $("#caption").html(caption[$(this).parent().index()]);

        // cancel the default action of the link
        evt.preventDefault();  // jQuery method that's cross-browser compatible
    }); // end click

    // move focus to first thumbnail
    $("li:first-child a").focus();
}); // end ready