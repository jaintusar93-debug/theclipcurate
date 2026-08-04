// Smooth Reveal Animation on Scroll
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);
reveal(); // Trigger on load

// Fullscreen Modal Logic
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("fullImage");

function openModal(element) {
    var img = element.querySelector("img");
    modal.style.display = "flex";
    modalImg.src = img.src;
}

function closeModal() {
    modal.style.display = "none";
}

// Close modal on outside click
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// Close modal on Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});
