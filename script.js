const go = document.querySelector(".go");
const date = new Date();
const technicalQuestions = {}

go.addEventListener('click', () => {
  location.href = "./interface1.html"
})

document.addEventListener("DOMContentLoaded", function () {

  const supportButton = document.getElementById("supportButton");
  const chatPopup = document.getElementById("chatPopup");
  const closeModal = document.getElementsByClassName("close")[0];
  const welcomeMessageNew = document.getElementById("welcomeMessageNew");
  const questionButtonsDiv = document.getElementById("questionButtons");
  const body = document.getElementById('#mainContainer');
  const chatBody = document.querySelector('.chat-body');
  const techButton = document.getElementById('technicalSupportButton')
  const userMsgContainer = document.getElementById('userMsgContainer')
  const tutorialBtn = document.getElementById('guideButton')
  const chatbody = document.querySelector('.chat-body')
  const footer = document.querySelector('.footer');

  // Show chat popup and welcome message on 'Support' button click
  supportButton.onclick = function () {
    chatPopup.classList.toggle('show')
    console.log("hello world")

    // welcomeMessageNew.style.display = "block"; // Show welcome message initially
    // questionButtonsDiv.style.display = "none"; // Hide question buttons initially
    // answerDisplay.innerHTML = ''; // Clear any previous answers
  };

  closeModal.onclick = function () {
    chatPopup.classList.toggle('show')
    answerDisplay.innerHTML = ''; // Clear any previous answers
  };// Close chat popup on close button click


  // Load technical support questions when 'Need technical support' button is clicked
  techButton.onclick = function () {
    // welcomeMessageNew.style.display = "none"; // Hide welcome message
    // questionButtonsDiv.style.display = "block"; // Show question buttons
    loadQuestions('technicalQuestion'); // Fetch and display technical support questions
  };

  tutorialBtn.onclick = function () {
    loadQuestions('tutorialQuestion')
  }
  // Function to fetch and display questions from the database by category

  function loadQuestions(category) {
    console.log(category)
    fetch(`https://chatbot-jcnp.onreder.com/sgdms/${category}`)
      .then((response) => response.json())
      .then((data) => {
        // Create container for questions
        var queryContainer = document.createElement('div');
        var query = document.createElement('p')
        query.style.display = "block"
        query.classList.add('userMsg');

        data.data.forEach((element, index) => {
          console.log(element)
          var li = document.createElement('li');
          li.textContent = element.question;
          li.classList.add('liButtons');

          // Create a separate container for answers
          li.addEventListener('click', () => {

            // Create new answer container
            var answerContainer = document.createElement('div');
            answerContainer.classList.add('answerContainer');

            // Create the answer paragraph
            var res = document.createElement('p')
            res.innerHTML = element.answer;
            res.classList.add('answerDisplayClass')
            res.style.display = "block"

            // Append paragraph to answer container
            answerContainer.appendChild(res);
            answerContainer.style.alignSelf = "flex-end";
            answerContainer.style.marginRight = "3%";
            answerContainer.style.marginTop = "1%";
            answerContainer.style.width = "300px";
            // Append container to answer chatbody
            chatbody.appendChild(answerContainer);
            var chatbodyheight = chatBody.offsetHeight; 
            var footerHeight = footer.offsetHeight; 
            var totalHeight = chatbodyheight + footerHeight
            chatBody.scrollTop = (chatBody.scrollHeight - totalHeight) + 100;
            // techButton.classList.add('disabled')
          })
            query.appendChild(li);

        });

        // Append questions container
        queryContainer.appendChild(query);
        // queryContainer.style.alignSelf ="flex-start"
        chatbody.appendChild(queryContainer);
        // Scroll the newly added queryContainer into view
        // calculate chatbody view port for scrollig 
        var chatbodyheight = chatBody.offsetHeight; 
        var footerHeight = footer.offsetHeight; 
        var totalHeight = chatbodyheight + footerHeight; 
        // queryContainer.scrollIntoView({ behavior: "smooth", block: "end" });
        chatBody.scrollTop = (chatBody.scrollHeight - totalHeight) + 100;
      
      })
      .catch((error) => console.error('Error fetching questions:', error));
  }
});


