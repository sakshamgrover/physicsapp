

function display() {

    //standard js
//    var angle = document.getElementById("angle").value;
//    var velocity = document.getElementById("velocity").value;
    var angle = $("#angle").val();
    var velocity = $("#velocity").val();


//    document.getElementById("angleDisplay").innerHTML = angle;
//    document.getElementById("velocityDisplay").innerHTML = velocity;
    $("#angleDisplay").html(angle);

    $("#velocityDisplay").html(velocity);


}