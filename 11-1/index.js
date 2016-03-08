// Object-oriented Programming

// person object
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

    //methods

    f.run = function (e) {
        return data[e];
    };

    return f;
}();

// customer object
var customer = function (p) {

    // private data
    var data = {
        customerNum: 'M00000',
        $setcustomerNum: function (n) {
            data.customerNum = n;
        }
    };

    var F = function () {};
    F.prototype = p; // The prototype property sets up Inheritance.
    var f = new F();

    //methods
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

// employee Object
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

// email validator
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
// user interface

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
                    "<div style = 'background-color:#F9FFD9;margin:10px;padding:10px;'>" +
                         "<p>You entered: </p>" +
                         "<p><b>Name:</b> " + c.run('firstName') + " " + c.run('lastName') + "</p>" +
                         "<p><b>Email:</b> " + c.run('email') + "</p>" +
                         "<p><b>Customer number:</b>" + c.run('customerNum') + "</p>" +
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
                    "<div style = 'background-color:#F9FFD9;margin:10px;padding:10px;'>" +
                         "<p>You entered: </p>" +
                         "<p><b>Name:</b> " + e.run('firstName') + " " + e.run('lastName') + "</p>" +
                         "<p><b>Email:</b>" + e.run('email') + "</p>" +
                         "<p><b>Social security number:</b>" + e.run('SSN') + "</p>" +
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