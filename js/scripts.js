/* Description: Custom JS file */

/* Navigation*/
// Collapse the navbar by adding the top-nav-collapse class
window.onscroll = function () {
	scrollFunction();
	scrollFunctionBTT(); // back to top button
};

window.onload = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.documentElement.scrollTop > 30) {
		document.getElementById("navbar").classList.add("top-nav-collapse");
	} else if ( document.documentElement.scrollTop < 30 ) {
		document.getElementById("navbar").classList.remove("top-nav-collapse");
	}
}

// Navbar on mobile
let elements = document.querySelectorAll(".nav-link:not(.dropdown-toggle)");

for (let i = 0; i < elements.length; i++) {
	elements[i].addEventListener("click", () => {
		document.querySelector(".offcanvas-collapse").classList.toggle("open");
	});
}

document.querySelector(".navbar-toggler").addEventListener("click", () => {
  	document.querySelector(".offcanvas-collapse").classList.toggle("open");
});

// Hover on desktop
function toggleDropdown(e) {
	const _d = e.target.closest(".dropdown");
	let _m = document.querySelector(".dropdown-menu", _d);

	setTimeout(
		function () {
		const shouldOpen = _d.matches(":hover");
		_m.classList.toggle("show", shouldOpen);
		_d.classList.toggle("show", shouldOpen);

		_d.setAttribute("aria-expanded", shouldOpen);
		},
		e.type === "mouseleave" ? 300 : 0
	);
}

// On hover
const dropdownCheck = document.querySelector('.dropdown');

if (dropdownCheck !== null) { 
	document.querySelector(".dropdown").addEventListener("mouseleave", toggleDropdown);
	document.querySelector(".dropdown").addEventListener("mouseover", toggleDropdown);

	// On click
	document.querySelector(".dropdown").addEventListener("click", (e) => {
		const _d = e.target.closest(".dropdown");
		let _m = document.querySelector(".dropdown-menu", _d);
		if (_d.classList.contains("show")) {
			_m.classList.remove("show");
			_d.classList.remove("show");
		} else {
			_m.classList.add("show");
			_d.classList.add("show");
		}
	});
}
  

/* Card Slider - Swiper */
var cardSlider = new Swiper('.card-slider', {
	autoplay: {
		delay: 4000,
		disableOnInteraction: false
	},
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}
});


/* Back To Top Button */
// Get the button
myButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunctionBTT() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		myButton.style.display = "block";
	} else {
		myButton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0; // for Safari
	document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
}

function copyPaste() {
        const texto = "A Tecnologia e a inovação foi quando o ser humano integrou a natureza com suas criatividades em ação.(Dany Nazaré)";
        
            navigator.clipboard.writeText(texto)
            // Ir para próxima sessão
            document.getElementById("projects")
                .scrollIntoView({
                    behavior: "smooth"
                });
}


function sendMail() {
                const destinatario = "daninazareceo@gmail.com";
                const nome = document.getElementById('nome').value || "Adicione o nome"; 
                const email = document.getElementById('email').value || "Contato@gmail.com";
                const assunto = document.getElementById('assunto').value || "Adicione o Assunto";
                const mensagem = document.getElementById('mensagem').value || "Mensagem Vazia";

                const dadosRemetente = `Dados do Remetente:\n` +
                            `Nome: ${nome}\n` +
                            `E-mail de contato: ${email}\n\n\n\n` +
                            `Mensagem:\n${mensagem}\n\n`;

                // 3. Monta a URL oficial do Gmail codificando os textos
                const urlMail = `https://mail.google.com/mail/?view=cm&fs=1` +
                                `&to=${encodeURIComponent(destinatario)}` +
                                `&su=${encodeURIComponent(assunto)}` +
                                `&body=${encodeURIComponent(dadosRemetente)}`;

            

                // Abre o Gmail em uma nova aba do navegador com os dados preenchidos
                window.open(urlMail, '_blank');
}