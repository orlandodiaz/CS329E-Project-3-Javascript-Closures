//Object-oriented Programming

//Person object
"use strict";
var person = function () { // This line to the line with "}();" creates a Closure.
    // private data

    var data = { // This is an exmaple of a javaScript Object.
        firstName: 'Root first name',
        $setfirstName: function (n) {
            data.firstName = n;
        },

        lastName: 'Root last name',
        $setlastName: function (n) {
            data.memo += 1;
            data.lastName = n;
        },

        email: 'root@email.com',
        $setEmail: function (n) {
            data.memo += 1;
            data.email = n;
        }
    };

    var F = function () {};
    var f = new F();

    // public data
    f.sname = 'Substance';

    //methods

    f.run = function (e) {
        return data[e];
    };

    return f;
}();

//Customer object

var customer = function (p) {

    // private data
    var data = {
        customerNum: '00000',
        $setcustomerNum: function (n) {
            data.customerNum = n;
        }

    };

    var F = function () {};
    F.prototype = p; // The prototype property sets up Inheritance.
    var f = new F();

    // public data
    f.cname = 'customer';
    f.run = function (e) {
        var r = data[e];
        if (r === undefined) {
            return F.prototype.run(e);
        } else {
            return r;
        }
    };



    return f;
}(person);

//Employee Object

var employee = function (p) {

    // private data
    var data = {
        SSN: '000-00-0000',
        $setSSN: function (n) {
            data.SSN = n;
        }

    };

    var F = function () {};
    F.prototype = p; // The prototype property sets up Inheritance.
    var f = new F();

    // public data
    f.ename = 'employee';
    f.run = function (e) {
        var r = data[e];
        if (r === undefined) {
            return F.prototype.run(e);
        } else {
            return r;
        }
    };

    return f;
}(person);

//Function to validate email
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
//User interface

$(document).ready(function () {
    $("button").click(function () {
        var cont = "y";
        $("#btn1").hide();
        $("#first").hide();
        $("#btn2").show();
        $("#second").show();
        document.getElementById("loading").innerHTML = "";
        document.getElementById("field").innerHTML = "";



        while (cont.toLowerCase() === "y") {
            var person = "";
            var firstName = "";
            var lastName = "";
            var email = "";
            var social = "";
            var customerNumber = "";
            while (person.toLowerCase() !== "c" && person.toLowerCase() !== "e") {
                person = window.prompt("Create customer or employee? (c/e):");
            }

            if (person.toLowerCase() === 'c') {

                var c = Object.create(customer);

                document.getElementById("loading").innerHTML =
                    "Creating Customer data...";


                while (firstName === "") {
                    firstName = window.prompt("Enter first name:");
                }
                c.run('$setfirstName')(firstName);


                while (lastName === "") {
                    lastName = window.prompt("Enter Last name:");
                }
                c.run('$setlastName')(lastName);


                // prompt and validate email

                while (validateEmail(email) === false) {
                    email = window.prompt("Enter email address");
                }
                c.run('$setEmail')(email);


                customerNumber = window.prompt("Enter Customer number:");
                c.run('$setcustomerNum')(customerNumber);
                window.alert("You entered: " +
                    "\nName: " + c.run('firstName') + " " + c.run('lastName') +
                    "\nEmail: " + c.run('email') +
                    "\nCustomer number: " + c.run('customerNum'));

                $("#field").append(
                    "<div style = 'border:1px solid red;margin:5px;padding:5px;'>" +
                         "<p>You entered: </p>" +
                         "<p>Name: " + c.run('firstName') + " " + c.run('lastName') + "</p>" +
                         "<p>Email: " + c.run('email') + "</p>" +
                         "<p>Customer number: " + c.run('customerNum') + "</p>" +
                         "</div>"
                );



            }

            if (person.toLowerCase() === 'e') {
                var e = Object.create(employee);

                document.getElementById("loading").innerHTML =
                    "Creating Employee data...";

                while (firstName === "") {
                    firstName = window.prompt("Enter first name:");
                }
                e.run('$setfirstName')(firstName);


                while (lastName === "") {
                    lastName = window.prompt("Enter Last name:");
                }
                e.run('$setlastName')(lastName);

                // prompt and validate email

                while (validateEmail(email) === false) {
                    email = window.prompt("Enter email address");
                }
                e.run('$setEmail')(email);


                while (/^(?!000|666)[0-8][0-9]{2}-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$/.test(social) === false) {
                    social = window.prompt("Social security number(xxx-xx-xxxx):");
                }
                e.run('$setSSN')(social);

                window.alert("You entered: " +
                    "\nName: " + e.run('firstName') + " " + e.run('lastName') +
                    "\nEmail: " + e.run('email') +
                    "\nSocial security number: " + e.run('SSN'));

                $("#field").append(
                    "<div style = 'border:1px solid red;margin:5px;padding:5px;'>" +
                         "<p>You entered: </p>" +
                         "<p>Name: " + e.run('firstName') + " " + e.run('lastName') + "</p>" +
                         "<p>Email: " + e.run('email') + "</p>" +
                         "<p>Social security number: " + e.run('SSN') + "</p>" +
                         "</div>"
                );



            }
            cont = "";
            while (cont.toLowerCase() !== "y" && cont.toLowerCase() !== "n") {
                cont = window.prompt("Continue? (y/n): ");
            }
        }
        document.getElementById("loading").innerHTML =
            "Done.";
    });

});