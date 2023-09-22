$(document).ready(function(){

    $('input[name=phone]').mask("+38 (999) 999-99-99");

    $('.request__form').validate({
        rules: {
            name: {
                required: true,
                minlength: 5   
            },
            phone: "required",
            email: {
                required: true,
                email: true
            },
            send: "required",
            newsletter: "required"
        },
        messages: {
            name: {
                required: "We need your email address to contact you",
                minlength: jQuery.validator.format("At least {0} characters required!")
            },
            phone: "Please specify your phone",
            email: "Please specify your E-mail",
        }
    });
});