$(document).ready(function() {
    $("#register-button").click(function() {
        var $name = $("#name");
        var $email = $("#email");
        var $password = $("#password");
        if ($name.val()==="") {
            $name.removeClass("valid"); 
            $name.addClass('invalid');
        }
        else {
            $name.addClass("valid"); 
        }
        if ($email.val()==="") {
            $email.removeClass("valid"); 
            $email.addClass("invalid");
            $(".error").show();
        }
        else {
            $email.addClass("valid");
        }
        if ($password.val()==="") {
            $password.removeClass("valid"); 
            $password.addClass("invalid");
            $(".error").show();
        }
        else {
            $password.addClass("valid");
        }
        if($email.hasClass("valid") && $name.hasClass("valid") && $password.hasClass("valid")) {
            $("#reg-container").hide();
            $(".success").show();
            $(".error").hide();
        }
    });
});