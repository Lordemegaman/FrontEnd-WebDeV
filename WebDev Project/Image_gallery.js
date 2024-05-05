"use strict";

$(document).ready(function() {
    $("#image_list a").each( (index, link) => {
        const image = new Image();
        image.src = $(link).attr("href");
        $(link).data("caption", $(link).attr("title"));

    });

    $("#image_list a").click( (evt) => {
        evt.preventDefault();
        const link = $(evt.currentTarget);
        const imageSrc = link.attr("href");
        const imageTitle = link.data("caption");

        $("#image").attr("src", imageSrc);
        $("#caption").text(imageTitle);

    });

    $("#image_gallery a:first").focus();
}
);
