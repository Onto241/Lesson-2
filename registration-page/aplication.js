$(document).ready(function() {
    $("#register-button").click(function() {
        var name = $("#name").val();
        var email = $("#email").val();
        var password = $("#password").val();
        if (name=="") {
            $("#name").addClass("invalid");
            $(".error").show();
        }
        else {
            $("#name").addClass("valid");
            $("#name").removeClass("invalid");
        }
        if (email=="") {
            $("#email").addClass("invalid");
            $(".error").show();
        }
        else {
            $("#email").addClass("valid");
        }
        if (password=="") {
            $("#password").addClass("invalid");
            $(".error").show();
        }
        else {
            $("#password").addClass("valid");
        }
        if ($("#email").hasClass("valid"))
            if ($("#name").hasClass("valid"))
                if ($("#password").hasClass("valid"))
                {
                    $("#reg-container").hide();
                    $(".success").show();
                    $(".error").hide();
                }
    });
});