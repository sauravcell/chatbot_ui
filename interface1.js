const tech = document.getElementById("tech");
const guides = document.getElementById("guides");

const technicalwindow = [
  "Issue with bins",
  "Issue with notifications",
  "Bin location unavailable",
  "unable to update new driver details",
];

const guidesWindow = [
  "Explain the dashboard",
  "How analytics works",
  "how to view bin locations",
  "how bin updates work",
];

// tech.addEventListener("click", () => {
//   // fetch the endpoint here
//   // fetch("https://wxxMPLE/TECH")
//   var res = technicalwindow;
//   var responseDiv = document.querySelector(".response");
//   for (let i = 0; i < res.length; i++) {
//     var link = document.createElement("a");
//     link.setAttribute("href", "https://www.google.com");
//     link.setAttribute("target", "_blank");
//     var li = document.createElement("li");
//     li.textContent = res[i];
//     link.append(li);
//     responseDiv.append(link);
//   }
//   setTimeout(() => {
//     var modal = document.querySelector(".shit");
//     modal.style.display = "block";
//   }, 5000);
// });

// guides.addEventListener("click", () => {
//   // fetch the endpoint here
//   var res = guidesWindow;
//   var responseDiv = document.querySelector(".response");
//   for (let i = 0; i < res.length; i++) {
//     var link = document.createElement("a");
//     link.setAttribute("href", "https://www.google.com");
//     link.setAttribute("target", "_blank");
//     var li = document.createElement("li");
//     li.textContent = res[i];
//     link.append(li);
//     responseDiv.append(link);
//   }
//   setTimeout(() => {
//     var modal = document.querySelector(".shit");
//     modal.style.display = "block";
//   }, 5000);
// });



const startBot  = document.getElementById('startBot');
startBot.addEventListener("click", ()=>{
  fetch('http://localhost:8585/zapierBot').then(response => response.json())
  .then(data => {

    var title = document.getElementById("title"); 
    document.getElementById("startBot").innerHTML = data.data;

    title.innerHTML = data.message; 
  })
  .catch(error => console.error("Error loading content:", error));
})
