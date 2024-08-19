/*what's js good for?
1. front-end dev; interactivity
2. write server-side code, manage databases, and handle HTTP requests and responses, for full-stack development using a single language
*/

//to run js by itself, do this: node __js filename__ (site.js)
/*
const monthlyRent = 500;
const yearlyRent = monthlyRent * 12;
console.log(yearlyRent);
*/

//creates server/an html port 8000 with the http leading the site name; need to connect w html
/*
const http = require("http");

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
*/

function addRow(){
    var theTable = document.getElementById("GPAtable");
    var rows = theTable.rows.length; //count curr # of rows(1)
    var insertRow = theTable.insertRow(rows); //insert 1 row for each append

    var cell1 = insertRow.insertCell(0); //create first cell of appended row...
    var cell2 = insertRow.insertCell(1); //etc
    var cell3 = insertRow.insertCell(2);  

    //creates input functionality
    var course = document.createElement("input");  
    var letter = document.createElement("input");  
    var credits = document.createElement("input");

    //valid input types
    course.type = "text";  
    letter.type = "text";  
    credits.type = "number";  

    //link the newly added cells from addRow, otherwise only the first row from html will be recognized
    course.classList.add("course");
    letter.classList.add("letterGrade");
    credits.classList.add("courseCredits");
 
    cell1.appendChild(course);  
    cell2.appendChild(letter);  
    cell3.appendChild(credits); 
}

function deleteRow(){
    if(GPAtable.rows.length > 2){ //dont allow user to delete header & first row
        document.getElementById("GPAtable").deleteRow(GPAtable.rows.length-1); //delete row starting from the bottom
    }
}

function calculateGPA(){
    var GPAsum = 0;
    var countCreds = 0;

    for(var i = 1; i < GPAtable.rows.length; i++){ //ignore the header and start looping thru each row to get the values of each cell
        var letterGrade = GPAtable.rows[i].querySelector('.letterGrade').value;
        var numericalEquiv = 0;

        switch(letterGrade){ //if it was
            case "A": //equal to this
                numericalEquiv = 4.0;
                break;
            case "B+":
                numericalEquiv = 3.5;
                break;
            case "B":
                numericalEquiv = 3.0;
                break;
            case "C+":
                numericalEquiv = 2.5;
                break;
            case "C":
                numericalEquiv = 2.0;
                break;
            case "D":
                numericalEquiv = 1.0;
                break;
            case "F":
                numericalEquiv = 0.0;
                break;
            default:
                numericalEquiv = 0.0;
           }

           countCreds += parseInt(GPAtable.rows[i].querySelector('.courseCredits').value) //credit sum
           GPAsum += numericalEquiv*parseInt(GPAtable.rows[i].querySelector('.courseCredits').value);

           var finalGPA = (GPAsum/countCreds).toPrecision(2);
    }

    document.getElementById("outputGPA").innerHTML = finalGPA;
    
}

function resetGPA(){
    var totalRows= GPAtable.rows.length-1; //exclude the header from row count

    for(var i = 1; i < totalRows; i++){ //leaves the first row alone but
        document.getElementById("GPAtable").deleteRow(GPAtable.rows.length-1); //deletes every other row
    }

    document.getElementById("clearForm").reset(); //clears the user input & starts anew for the first row

}

/*
https://myrun.newark.rutgers.edu/how-calculate-your-cumulative-gpa#:~:text=Add%20up%20your%20grade%20points,credits%20earned%20in%20those%20courses.
https://dev.to/analyze0/how-to-make-a-gpa-calculator-as-a-beginner-in-html-javascript-1o9c
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_table_insert_deleterow
https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_table_deleterow2
https://www.javatpoint.com/add-and-delete-rows-of-a-table-on-button-clicks
https://www.geeksforgeeks.org/cgpa-calculator-using-html-css-javascript/#
https://stackoverflow.com/questions/17237772/html-how-to-clear-input-using-javascript
https://myrun.newark.rutgers.edu/how-calculate-your-cumulative-gpa#:~:text=Add%20up%20your%20grade%20points,credits%20earned%20in%20those%20courses.
*/