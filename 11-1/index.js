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





//Object-oriented Programming

//Person object
var person = function(){ // This line to the line with "}();" creates a Closure.
    // private data
    var data = {            // This is an exmaple of a javaScript Object.
        firstName:'Root first name',
        $setfirstName: function(n){data.firstName = n },

        lastName: 'Root last name',
        $setlastName: function(n){data.memo += 1; data.lastName = n},

        email: 'root@email.com',
        $setEmail: function(n){data.memo += 1; data.email = n}
    };

    var F = function(){};
    f = new F();

    // public data
    f.sname = 'Substance'

    //methods

    f.run = function (e) {
        return data[e];
    };

    return f;
}();

//Customer object

var customer = function(p){

    // private data
    var data = {
        customerNum:'00000'
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

    var person1 = Object.create(person);
/*
   // alert(person.sname);
    alert(person1.sname);
    alert(person1.getfirstName);
*/
    alert(person1.run('firstName'));
    alert(person1.run('lastName'));
    alert(person1.run('email'));

    person1.run('$setfirstName')('Ryan');

    person1.run('$setlastName')('Gosling');

    person1.run('$setEmail')('ryan@gosling.com');


    alert(person1.run('firstName'));
    alert(person1.run('lastName'));
    alert(person1.run('email'));




}











































