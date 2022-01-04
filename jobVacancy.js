function onsubmitform(){
    var name = document.getElementById("text-basic").value;
    var gender1 = document.getElementById("radio-choice-c").value;
    var gender2 = document.getElementById("radio-choice-d").value;
    var exp = document.getElementById("slider-fill").value;
    var yes = document.getElementById("yes").value;
    var no = document.getElementById("no").value;
    var language1 = document.getElementById("checkbox-1a").value;
    var language2 = document.getElementById("checkbox-2a").value;
    var language3 = document.getElementById("checkbox-3a").value;
    var language4 = document.getElementById("checkbox-4a").value;
    if(name&&(gender1||gender2)&&exp&&(yes||no)&&(language1||language2||language3||language4))
    {
    if(confirm("Are you sure to Send?"))
    {
    alert("Thank you.");
    }
    else
    {
    alert("Make sure all information is correct.");
    }
    }
    else
    {
    alert("Incomplete Form!");
    }
    }