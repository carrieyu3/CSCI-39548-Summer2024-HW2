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