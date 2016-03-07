$(document).ready(function(){
    $("#btn1").click(function(){
        var cont = "y"

        while (cont == "y") {
            var person = prompt("Create customer or employee? (c/e):");

            if (person == 'c') {
                document.getElementById("loading").innerHTML =
                    "Creating Customer data...";
                var firstName = prompt("Enter first name:");
                var lastName = prompt("Enter Last name:");

                // prompt and validate email
                var email = false
                while (validateEmail(email) == false)
                  var email = prompt("Enter email address")


                var customerNumber = prompt("Enter Customer number:");

                $("#field").append("" +
                    "<div style = 'border:1px solid red;margin:5px;padding:5px;'>" +
                    "<p>You entered: </p>" +
                    "<p>Name: " + firstName + " " + lastName + "</p>" +
                    "<p>Email: " + email + "</p>" +
                    "<p>Customer number: " + customerNumber + "</p>" +
                    "</div>"
                );
                var cont = prompt("Continue? (y/n): ");

                document.getElementById("loading").innerHTML =
                    "Done.";
            }

            if (person == 'e') {
                document.getElementById("loading").innerHTML =
                    "Creating Employee data...";
                var firstName = prompt("Enter first name:");
                var lastName = prompt("Enter Last name:");

                // prompt and validate email
                var email = false
                while (validateEmail(email) == false)
                    var email = prompt("Enter email address")


                var social = prompt("Social security number:");

                $("#field").append("" +
                    "<div style = 'border:1px solid red;margin:5px;padding:5px;'>" +
                    "<p>You entered: </p>" +
                    "<p>Name: " + firstName + " " + lastName + "</p>" +
                    "<p>Email: " + email + "</p>" +
                    "<p>Social security number: " + social + "</p>" +
                    "</div>"
                );
                var cont = prompt("Continue? (y/n): ");

                document.getElementById("loading").innerHTML =
                    "Done.";
            }
        }
    });

});

//Function to validate email
function validateEmail(email)
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}







//Person object
var person = function() { // This line to the line with "}();" creates a Closure

    var data = {
        name: 'person',
        email: 'person@email.com'

    };

    var F = function(){};
    f = new F();


    f.sname = 'person'
    f.run = function (e) {
        return data[e];
    };

    return f;

    
}();


//Customer object

var customer = function(p){

    // private data
    var data = {
        name:'customer'
    };

    var F = function(){};
    F.prototype = p;        // The prototype property sets up Inheritance.
    f = new F();

    // public data
    f.cname = 'customer'
    f.run = function (e) {
        var r = data[e];
        if(r === undefined) return F.prototype.run(e);
        else return r;
    };

    return f;
}(person);

//Employee Object

var employee = function(p){

    // private data
    var data = {
        SSN:'000-00-0000'
    };

    var F = function(){};
    F.prototype = p;        // The prototype property sets up Inheritance.
    f = new F();

    // public data
    f.ename = 'employee'
    f.run = function (e) {
        var r = data[e];
        if(r === undefined) return F.prototype.run(e);
        else return r;
    };

    return f;
}(person);







function myFunction() {


    var employee1 = Object.create(employee);

    alert(person.name);
    alert(person.sname);
    alert(customer.cname);
    alert(employee.ename);
    alert(employee1.ename);




    alert(person1.name);


}











































