let btnAbrirMenu = document.getElementById('btn-menu');
let menuMobile = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu')
let btnfechar = document.getElementById('btn-fechar')

btnAbrirMenu.addEventListener('click', () => {
    menuMobile.classList.add('abrir-menu');
});

menuMobile.addEventListener('click', () => {
    menuMobile.classList.remove('abrir-menu');
});

overlay.addEventListener('click', () => {
    menuMobile.classList.remove('abrir-menu');
});

btnfechar.addEventListener('click', () => {
    menuMobile.classList.remove('abrir-menu');
});

function abrirLightbox(src) {
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox').style.display = 'flex';
}

function fecharLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}


// Função para abrir o modal com os detalhes do projeto
function abrirModal(titulo, descricao) {
  // Esconde os cards
  document.getElementById("lista-projetos").style.display = "none";

  // Mostra os detalhes
  const detalhe = document.getElementById("projeto-detalhado");
  detalhe.style.display = "block";

  // Define título e descrição do detalhe
  document.getElementById("detalhe-titulo").textContent = titulo;
  document.getElementById("detalhe-descricao").textContent = descricao;

  // Galeria dinâmica
  const galeria = document.getElementById("galeria-projeto");
  galeria.innerHTML = ""; // Limpa imagens anteriores

  let imagens = [];

  if (titulo === "AchadeX") {
    imagens = [
      "source/ACHADEXPROJECT.jpg",
      "source/ACHADEXPROJECT2.jpg",
      "source/ACHADEXPROJECT3.jpg",
      "source/ACHADEXPROJECT4.jpg"
    ];
  } else if (titulo === "Blog Pessoal") {
    imagens = [
      "source/BLOG1.jpg",
      "source/BLOG2.jpg"
    ];
  } else if (titulo === "Portfólio") {
    imagens = [
      "source/PORTFOLIO1.jpg",
      "source/PORTFOLIO2.jpg"
    ];
  } else if (titulo === "Dashboard Admin") {
    imagens = [
      "source/DASH1.jpg",
      "source/DASH2.jpg"
    ];
  }

  imagens.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.classList.add("img-galeria");
    img.style.animationDelay = `${index * 0.3}s`;
    galeria.appendChild(img);
  });
}

// Adiciona o evento de clique nos botões "Ver Mais"
document.querySelectorAll(".botao-ver-mais").forEach(button => {
  button.addEventListener("click", function () {
    const titulo = this.getAttribute("data-titulo");
    const descricao = this.getAttribute("data-descricao");
    abrirModal(titulo, descricao);
  });
});

// Função para voltar
function voltar() {
  // Esconde o detalhe e mostra os cards novamente
  document.getElementById("projeto-detalhado").style.display = "none";
  document.getElementById("lista-projetos").style.display = "grid";

  // Restaura o título original
  document.querySelector(".projetos h2").textContent = "Meus Projetos";
}

document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault(); // evita o envio imediato

  let campos = this.querySelectorAll("input[required], textarea[required]");
  let formularioValido = true;

  campos.forEach((campo) => {
    if (!campo.value.trim()) {
      campo.classList.add("erro");
      formularioValido = false;
    } else {
      campo.classList.remove("erro");
    }
  });

  if (formularioValido) {
    this.submit(); // agora pode enviar normalmente
  }
});