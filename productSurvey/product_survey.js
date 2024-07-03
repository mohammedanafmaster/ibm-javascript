let submitButton = document.getElementById("submitBtn");

function submitFeedback() {
    let username = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let job = document.getElementById("job").value;
    let designation = document.getElementById("designation").value;
    let productType = document.getElementById("productType").value;
    let feedback = document.getElementById("feedbackText").value;
    let experience = document.getElementById("experience").value;

    document.getElementById("userName").innerHTML = username;
    document.getElementById("userAge").innerHTML = age;
    document.getElementById("userEmail").innerHTML = email;
    document.getElementById("userJob").innerHTML = job;
    document.getElementById("userDesignation").innerHTML = designation;
    document.getElementById("userProductType").innerHTML = productType;
    document.getElementById("userFeedback").innerHTML = feedback;
    document.getElementById("userExperience").innerHTML = experience;

    document.getElementById("userInfo").style.display = "block";
    alert("Thank you for your valuable feedback");
}

submitButton.onclick = submitFeedback;

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        submitFeedback();
    }
});