const photoUpload = document.getElementById("photoUpload");
const uploadButton = document.getElementById("uploadButton");
const preview = document.getElementById("preview");

preview.style.display = "none";
function handleFileUpload() {
  const file = photoUpload.files[0];
  if (file) {
    previewImage(file);
  }
}

function previewImage(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    preview.style.display = "block";
    preview.innerHTML = `<img id="previewImage" src="${e.target.result}" alt="ID Photo">`;
    const img = document.getElementById("previewImage");
    img.style.width = "80px";
    img.style.height = "80px";
  };
  reader.readAsDataURL(file);
}

uploadButton.addEventListener("click", handleFileUpload);

function generateIDCard() {
  var imageSrc = document.getElementById("previewImage").src;
  var studentName = document.getElementById("studentName").value;
  var rollNum = document.getElementById("rollNum").value;
  var branch = document.getElementById("branch").value;
  var CollegeName = document.getElementById("CollegeName").value;
  var email = document.getElementById("email").value;
  var phno = document.getElementById("phno").value;
  var activity = document.getElementById("activity").value;
  var participants = document.getElementById("participants").value;
  var uniqueid = document.getElementById("uniqueid").value;
  var idCardContainer = document.getElementById("idCard");

  idCardContainer.innerHTML = `
    <img src="./images/vemu-logo.jpg" style="height: 70px; width: 100%; border-radius: 5px; padding: 0;" />
    <h3 style="padding: 0; margin: 10px;">Student Pass</h3>
    <img src = "${imageSrc}" width="80px" height="80px">
    <div id="pass">
      <p><strong>Name:</strong> ${studentName}</p>
      <p><strong>Roll No: </strong> ${rollNum}</p>
      <p><strong>Branch & Class: </strong> ${branch}</p>
      <p><strong>College name: </strong> ${CollegeName}</p>
      <p><strong>Registered email: </strong> ${email}</p>
      <p><strong>Phone number: </strong> ${phno}</p>
      <p><strong>Event Name: </strong> ${activity}</p>
      <p><strong>Number of participants: </strong> ${participants}</p>
      <p><strong>Unique ID: </strong> ${uniqueid}</p>
      <div class="signature">
        <img src="./images/signatre.png"/>
        <h5>Principal</h5>
     </div>
    </div>
    <button onclick="printIDCard()">Print pass</button>
  `;
}
// Trigger the print functionality
function printIDCard() {
  window.print();
}
