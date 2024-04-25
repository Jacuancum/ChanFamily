document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Get form data
    const formData = new FormData(this);

    // Construct the message
    let message = '';
    for (const [key, value] of formData.entries()) {
        message += `${key}: ${value}\n`;
    }

    // Create a Blob containing the message
    const blob = new Blob([message], { type: 'text/plain' });

    // Create a temporary link element to trigger the download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'comment.txt';

    // Trigger the download
    link.click();
});