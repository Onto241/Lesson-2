$(document).ready(function() {
    $("#register-button").click(function() {
        var name = $("#name").val();
        var email = $("#email").val();
        var password = $("#password").val();      
        if (name=='') {
            alert("Please fill name");
        }
        else if (email=='') {
            alert("Please fill email");
        }
        else if (password=='') {
            alert("Please fill password");
        }
        else { 
            $('.success').show();
            $(".form")[0].reset();
        }
    });
});