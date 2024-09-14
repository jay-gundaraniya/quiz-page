const answers = {
    q1: "Narendra Modi",
    q2: "Nirmala Sitaraman",
    q3: "2 world cup"
};

const verifyAns = (questionId) => {
    const elements = document.getElementsByName(questionId);
    let selectedValue = null;
    
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].checked) {
            selectedValue = elements[i].value;
            break;
        }
    }

    let ans = document.getElementById(questionId);
    
    if (selectedValue) {
        if (selectedValue === answers[questionId]) {
            ans.innerHTML = "Correct!";
            ans.style.color = "green";
        } else {
            ans.innerHTML = `Incorrect! The correct answer is: ${answers[questionId]}`;
            ans.style.color = "red";
        }
    } else {
        ans.innerHTML = "Please select an answer";
        ans.style.color = "orange";
    }
};
