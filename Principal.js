document.addEventListener("DOMContentLoaded", function() {
    var faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(function(item) {
        item.addEventListener("click", function() {
            var content = this.querySelector("p");
            var icon = this.querySelector("i");
            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
                icon.classList.remove("fa-plus");
                icon.classList.add("fa-minus");
            } else {
                content.style.display = "none";
                icon.classList.remove("fa-minus");
                icon.classList.add("fa-plus");
            }
        });
    });
});