const go = document.querySelector(".go");

go.addEventListener('click', () => {
    location.href ="./interface1.html"
})

document.addEventListener("DOMContentLoaded", function () {
    const supportButton = document.getElementById("supportButton");
    const chatPopup = document.getElementById("chatPopup");
    const closeModal = document.getElementsByClassName("close")[0];
    const welcomeMessage = document.getElementById("welcomeMessage");
    const questionButtonsDiv = document.getElementById("questionButtons");
    const answerDisplay = document.getElementById("answerDisplay");
  
    // Show chat popup and welcome message on 'Support' button click
    supportButton.onclick = function () {
      chatPopup.style.display = "block";
      welcomeMessage.style.display = "block"; // Show welcome message initially
      questionButtonsDiv.style.display = "none"; // Hide question buttons initially
      answerDisplay.innerHTML = ''; // Clear any previous answers
    };
  
    // Close chat popup on close button click
    closeModal.onclick = function () {
      chatPopup.style.display = "none";
      answerDisplay.innerHTML = ''; // Clear any previous answers
    };
  
    // Load technical support questions when 'Need technical support' button is clicked
    document.getElementById("technicalSupportButton").onclick = function () {
      welcomeMessage.style.display = "none"; // Hide welcome message
      questionButtonsDiv.style.display = "block"; // Show question buttons
      loadQuestions('technical'); // Fetch and display technical support questions
    };
  
    // Function to fetch and display questions from the database by category
    function loadQuestions(category) {
      fetch(`/api/questions?category=${category}`)
        .then((response) => response.json())
        .then((questions) => {
          questionButtonsDiv.innerHTML = ''; // Clear previous questions
          answerDisplay.innerHTML = ''; // Clear previous answer
          
          // Populate question buttons
          questions.forEach((question) => {
            const button = document.createElement('button');
            button.textContent = question.question; // Display question text
            
            // When question button is clicked, load the answer
            button.onclick = () => loadAnswer(question._id);
            
            questionButtonsDiv.appendChild(button); // Add button to chat popup
          });
        })
        .catch((error) => console.error('Error fetching questions:', error));
    }
  
    // Function to fetch and display the answer for a specific question
    function loadAnswer(questionId) {
      fetch(`/api/question/${questionId}`)
        .then((response) => response.json())
        .then((data) => {
          answerDisplay.innerHTML = `<p>${data.answer}</p>`; // Display answer below questions
        })
        .catch((error) => console.error('Error fetching answer:', error));
    }
  
    // Close chat popup if clicked outside the popup
    window.onclick = function (event) {
      if (event.target === chatPopup) {
        chatPopup.style.display = "none";
        answerDisplay.innerHTML = ''; // Clear previous answers
      }
    };
  });
  