document.querySelector("form").addEventListener("submit", function(e){

    e.preventDefault();

    const role = document.querySelector("select").value;

    if(role === "Student"){
        window.location.href = "student-dashboard.html";
    }
    else if(role === "Recruiter"){
        window.location.href = "recruiter-dashboard.html";
    }
    else if(role === "Admin"){
        window.location.href = "admin-dashboard.html";
    }
    else{
        alert("Please select a role");
    }

});