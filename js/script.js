document.addEventListener("DOMContentLoaded", function () {
    // スムーズスクロール (Vanilla JS)
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

    // jQuery ハンバーガーメニュー
    $('#menu-button').click(function () {
        $('main').toggleClass('transparent');
        const panel = $('#menu');
        if (panel.css("display") === "block") {
            panel.css("display", "none");
        } else {
            panel.fadeIn();
        }
    });

    // jQuery スムーススクロール（重複防止のため確認）
    $('a[href^="#"]').click(function (event) {
        event.preventDefault();
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').animate({ scrollTop: target.offset().top }, 1000);
        }
    });

    // メニュー開閉関数のためのイベント設定（Vanilla JS）
    const menuButton = document.getElementById("menu-button");
    if (menuButton) {
        menuButton.addEventListener("click", function () {
            const menu = document.getElementById("menu");
            if (menu) {
                menu.classList.toggle("show");
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

// toggleMenu 関数（HTMLのonclick用）
function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu) {
        menu.classList.toggle("show");
    }
}
