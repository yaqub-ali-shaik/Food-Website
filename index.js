document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.custom-button, .custom-outline-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Button clicked!');
        });
    });

    // Add more JavaScript functionalities if needed
});
