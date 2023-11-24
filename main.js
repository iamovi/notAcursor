function showSection(sectionId) {
    // Hide all sections
    var sections = document.getElementsByClassName('content-section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }

    // Show the selected section
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// copy code
function copyText(codeId) {
    /* Get the text field */
    var codeText = document.getElementById(codeId);

    if (!codeText) {
        console.error("Element with ID " + codeId + " not found");
        return;
    }

    /* Create a temporary input field to copy the text */
    var tempInput = document.createElement("input");
    tempInput.setAttribute("value", codeText.textContent); // Use textContent instead of innerText
    document.body.appendChild(tempInput);

    /* Select the text in the input field */
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text to the clipboard */
    document.execCommand("copy");

    /* Remove the temporary input field */
    document.body.removeChild(tempInput);

    /* Create a message box */
    var messageBox = document.createElement("div");
    messageBox.className = "copy-message";
    messageBox.innerText = "Code Copied. You can use now!";
    document.body.appendChild(messageBox);

    /* Trigger the fade-in animation */
    setTimeout(function () {
        messageBox.classList.add("show");
    }, 10);

    /* Remove the message box and trigger the fade-out animation after a delay */
    setTimeout(function () {
        messageBox.classList.remove("show");
        setTimeout(function () {
            document.body.removeChild(messageBox);
        }, 500); // Duration of the fade-out animation
    }, 2000); // Adjust the duration as needed
}
