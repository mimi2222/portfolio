document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        element.classList.add('active');
    });
});

function reveal() {
    var reveals = document.querySelectorAll('.scroll');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

window.addEventListener('load', function() {
    const iframe = document.getElementById('contact-me');
    // オリジンが同じであれば、コンテンツの高さを取得して設定
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
});

function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
}
