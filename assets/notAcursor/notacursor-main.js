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


function copyCode(elementId) {
    var codeElement = document.getElementById(elementId);
    var codeToCopy = codeElement.innerText || codeElement.textContent; // Get the text content
    var tempTextArea = document.createElement('textarea');
    tempTextArea.value = codeToCopy;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    
    // Show notification
    var notification = document.getElementById('copyNotification');
    notification.style.display = 'block';
    setTimeout(function () {
        notification.style.display = 'none';
    }, 2000); // Hide notification after 2 seconds
}