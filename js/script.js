document.addEventListener("DOMContentLoaded", function () {
    // スムーズスクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // フェードイン要素を初期表示
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        element.classList.add('active');
    });

    // ハンバーガーメニューの実装
    const menuButton = document.getElementById("menu-button");
    const menu = document.getElementById("menu");
    const main = document.querySelector("main");

    if (menuButton && menu) {
        menuButton.addEventListener("click", function() {
            menu.classList.toggle("show");
            if (main) {
                main.classList.toggle("transparent");
            }
        });
    }

    // iframe高さ調整（安全性向上）
    const iframe = document.getElementById('contact-me');
    if (iframe && iframe.contentWindow && iframe.contentWindow.document) {
        iframe.onload = function () {
            iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
        };
    }
});

// スクロール時のアニメーション
function reveal() {
    const reveals = document.querySelectorAll('.scroll');
    const windowHeight = window.innerHeight;
    const elementVisible = 150;

    reveals.forEach(reveal => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add("active");
        } else {
            reveal.classList.remove("active");
        }
    });
}
window.addEventListener("scroll", reveal);
