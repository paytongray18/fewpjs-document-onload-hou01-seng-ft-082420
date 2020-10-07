document.addEventListener("DOMContentLoaded", function() {
    // newText = "JavaScript is so cool. It lets me add text to my page programmatically.' to equal 'This is really cool!"
    let text = document.getElementById('text')
    console.log(text)
    text.innerHTML = "This is really cool!";
})