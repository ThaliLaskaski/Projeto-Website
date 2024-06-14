// Variáveis globais
var menuIcon = document.querySelector('.menu-icon');
var ul = document.querySelector('.ul');
var loginModal = document.getElementById("loginModal");
var cadastroModal = document.getElementById("cadastroModal");
var reservaModal = document.getElementById("reservaModal");
var inscReservaModal = document.getElementById("inscReservaModal");
var reservarAgoraBtn = document.getElementById("reservarAgoraBtn");
var comecarBtn = document.getElementById("comecarBtn");
var closeBtns = document.querySelectorAll(".close-btn");
var cadastroLink = document.getElementById("cadastroLink");
var newsletterForm = document.querySelector('.newsletter form');
var cadastroForm = document.getElementById("cadastroForm");
var reservaForm = document.getElementById("reservaForm");
var loginForm = document.getElementById("loginForm");

// Event Listener para o ícone de menu
menuIcon.addEventListener('click', () => {
    if (ul.classList.contains('ativo')) {
        ul.classList.remove('ativo');
        document.querySelector('.menu-icon img').src = 'img/menu.png';
    } else {
        ul.classList.add('ativo');
        document.querySelector('.menu-icon img').src = 'img/close.png';
    }
});

// Event Listener para abrir o modal de login ao clicar em "Começar"
document.addEventListener("DOMContentLoaded", function() {
    comecarBtn.onclick = function() {
        loginModal.style.display = "block";
    };

    // Event Listener para abrir o modal de cadastro ao clicar no link "Clique aqui"
    cadastroLink.onclick = function(event) {
        event.preventDefault(); 
        cadastroModal.style.display = "block";
    };

    // Event Listener para fechar os modais ao clicar no botão de fechar
    closeBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            this.closest('.modal').style.display = "none";
        });
    });

    // Event Listener para fechar os modais ao clicar fora deles
    window.addEventListener('click', function(event) {
        if (event.target == reservaModal) {
            reservaModal.style.display = "none";
        } else if (event.target == loginModal) {
            loginModal.style.display = "none";
        } else if (event.target == cadastroModal) {
            cadastroModal.style.display = "none";
        } else if (event.target == inscReservaModal) {
            inscReservaModal.style.display = "none";
        }
    });

    // Event Listener para o envio do formulário da newsletter
    newsletterForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o comportamento padrão de envio do formulário

        // Verifica se o campo de email está preenchido
        var email = newsletterForm.querySelector('input[type="email"]').value;
        console.log("Newsletter Email:", email);

        if (email) {
            var inscricaoModal = document.getElementById("inscricaoModal");
            inscricaoModal.style.display = "block";

            var closeBtn = inscricaoModal.querySelector('.close-btn');
            closeBtn.addEventListener('click', function() {
                inscricaoModal.style.display = "none";
            });

            window.addEventListener('click', function(event) {
                if (event.target == inscricaoModal) {
                    inscricaoModal.style.display = "none";
                }
            });
        } else {
            alert("Por favor, preencha o campo de email.");
        }
    });

    // Event Listener para o envio do formulário de cadastro
    cadastroForm.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log("Cadastro Form Submit");

        // Fecha o modal de cadastro
        cadastroModal.style.display = "none";
        // Abre o modal de login
        loginModal.style.display = "block";
    });

    // Event Listener para o envio do formulário de reserva
    reservaForm.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log("Reserva Form Submit");

        var email = reservaForm.querySelector('input[type="email"]').value;
        var phone = reservaForm.querySelector('input[type="tel"]').value;
        console.log("Reserva Email:", email);
        console.log("Reserva Phone:", phone);

        if (email && phone) {
            reservaModal.style.display = "none";
            inscReservaModal.style.display = "block";

            var closeBtn = inscReservaModal.querySelector('.close-btn');
            closeBtn.addEventListener('click', function() {
                inscReservaModal.style.display = "none";
            });

            window.addEventListener('click', function(event) {
                if (event.target == inscReservaModal) {
                    inscReservaModal.style.display = "none";
                }
            });
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    });

    // Event Listener para o envio do formulário de login
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log("Login Form Submit");

        var email = document.getElementById("loginEmail").value;
        var password = document.getElementById("loginPassword").value;
        console.log("Login Email:", email);
        console.log("Login Password:", password);

        if (email && password) {
            loginModal.style.display = "none";
            window.location.href = "index.html";
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    });

    // Event Listener para fechar o menu ao clicar em um item do menu e rolar suavemente até a seção correspondente
    // Seleciona todos os itens do menu que têm links âncora
    var menuItems = document.querySelectorAll('.ul li a[href^="#"]');

    // Itera sobre cada item do menu e adiciona um event listener
    menuItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            // Previne o comportamento padrão de clicar em um link
            event.preventDefault();

            // Fecha o menu após clicar em um item do menu
            ul.classList.remove('ativo');
            menuIcon.querySelector('img').src = 'img/menu.png';

            // Obtém o destino do link âncora
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);

            // Verifica se o elemento alvo existe
            if (targetElement) {
                // Calcula a posição do elemento alvo
                var offsetTop = targetElement.offsetTop;

                // Anima a rolagem suave até o elemento alvo
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Event Listener para o botão de reservar agora
    reservarAgoraBtn.addEventListener('click', function() {
        reservaModal.style.display = "block";
    });
});
