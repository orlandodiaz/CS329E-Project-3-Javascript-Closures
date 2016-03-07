
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
        customerNum:'00000',
        $setcustomerNum: function(n){data.customerNum = n },

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
        SSN:'000-00-0000',
        $setSSN: function(n){data.SSN = n },

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


//Begin button

$(document).ready(function(){
    $("#btn1").click(function(){
        var cont = "y"

        while (cont == "y") {
            var person = prompt("Create customer or employee? (c/e):");

            if (person == 'c') {

                var c = Object.create(customer);

                document.getElementById("loading").innerHTML =
                    "Creating Customer data...";
                var firstName = prompt("Enter first name:");
                c.run('$setfirstName')(firstName)

                var lastName = prompt("Enter Last name:");
                c.run('$setlastName')(lastName)


                // prompt and validate email
                var email = false
                while (validateEmail(email) == false)
                  var email = prompt("Enter email address")
                  c.run('$setEmail')(email)


                var customerNumber = prompt("Enter Customer number:");
                c.run('$setcustomerNum')(customerNumber)


                $("#field").append("" +
                    "<div style = 'border:1px solid red;margin:5px;padding:5px;'>" +
                    "<p>You entered: </p>" +
                    "<p>Name: " + c.run('firstName') + " " + c.run('lastName') + "</p>" +
                    "<p>Email: " + c.run('email') + "</p>" +
                    "<p>Customer number: " + c.run('customerNum') + "</p>" +
                    "</div>"
                );
                var cont = prompt("Continue? (y/n): ");

                document.getElementById("loading").innerHTML =
                    "Done.";
            }

            if (person == 'e') {
                var e = Object.create(employee);

                document.getElementById("loading").innerHTML =
                    "Creating Employee data...";
                var firstName = prompt("Enter first name:");
                e.run('$setfirstName')(firstName)

                var lastName = prompt("Enter Last name:");
                e.run('$setlastName')(lastName)

                // prompt and validate email
                var email = false
                while (validateEmail(email) == false)
                    var email = prompt("Enter email address")
                    e.run('$setEmail')(email)


                var social = prompt("Social security number:");
                e.run('$setSSN')(social)

                $("#field").append("" +
                    "<div style = 'border:1px solid red;margin:5px;padding:5px;'>" +
                    "<p>You entered: </p>" +
                    "<p>Name: " + e.run('firstName') + " " + e.run('lastName') + "</p>" +
                    "<p>Email: " + e.run('email') + "</p>" +
                    "<p>Social security number: " + e.run('SSN') + "</p>" +
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












































