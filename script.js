document.addEventListener("DOMContentLoaded", function () {
    var percursoTab = document.getElementById("percurso-tab");
    var participantesTab = document.getElementById("participantes-tab");
    var pagamentoTab = document.getElementById("pagamento-tab");
    var cardContent = document.querySelector(".card-body");
    var elementoSubstituto = document.getElementById("elemento-substituto");
    var mapaViagem = document.querySelector(".mapa-viagem");
    var pagamentoContent = document.getElementById("pagamento-content");

    percursoTab.addEventListener("click", function () {
        cardContent.style.display = "block";
        elementoSubstituto.style.display = "none";
        mapaViagem.style.display = "block";
        pagamentoContent.style.display = "none";
        avaliarContent.style.display = "none";
    });

    participantesTab.addEventListener("click", function () {
        cardContent.style.display = "none";
        elementoSubstituto.style.display = "block";
        mapaViagem.style.display = "none";
        pagamentoContent.style.display = "none";
        avaliarContent.style.display = "none";
    });

    pagamentoTab.addEventListener("click", function () {
        cardContent.style.display = "none";
        elementoSubstituto.style.display = "none";
        mapaViagem.style.display = "none";
        pagamentoContent.style.display = "block";
        avaliarContent.style.display = "none";
    });

    var avaliarTab = document.getElementById("avaliar-tab");
    var avaliarContent = document.getElementById("avaliar-content");
    var avaliarBotao = document.getElementById("avaliar-botao");
    var starRating = document.querySelector(".star-rating");
    var comentarioInput = document.getElementById("comentario");

    avaliarTab.addEventListener("click", function () {
        cardContent.style.display = "none";
        elementoSubstituto.style.display = "none";
        mapaViagem.style.display = "none";
        pagamentoContent.style.display = "none";
        avaliarContent.style.display = "block";
    });

    avaliarBotao.addEventListener("click", function () {
        var avaliacao = getStarRating();
        var comentario = comentarioInput.value;

        if (avaliacao === 0) {
            alert("Por favor, selecione uma classificação de estrelas antes de avaliar.");
        } else {
            localStorage.setItem("avaliacao", JSON.stringify({ rating: avaliacao, comentario: comentario }));
            clearAvaliarContent();
            displayThankYouMessage();
        }
    });

    function getStarRating() {
        var starInputs = document.querySelectorAll(".star-input");
        var rating = 0;

        starInputs.forEach(function (starInput) {
            if (starInput.checked) {
                rating = parseInt(starInput.value);
            }
        });

        return rating;
    }

    function clearAvaliarContent() {
        var starInputs = document.querySelectorAll(".star-input");
        starInputs.forEach(function (starInput) {
            starInput.checked = false;
        });

        comentarioInput.value = "";
        avaliarContent.style.display = "none";
    }

    function displayThankYouMessage() {
        var mensagemAgradecimento = document.createElement("p");
        mensagemAgradecimento.textContent = "Obrigado por sua avaliação!";
        mensagemAgradecimento.classList.add("thank-you-message");

        var avaliarContent = document.getElementById("avaliar-content");
        avaliarContent.appendChild(mensagemAgradecimento);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const emailInput = document.getElementById('email');
    const textoInput = document.getElementById('texto');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = emailInput.value;
        const texto = textoInput.value;


        console.log('Email:', email);
        console.log('Ticket de suporte:', texto);


        emailInput.value = '';
        textoInput.value = '';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const textoInput = document.getElementById('texto');
    const starInputs = document.querySelectorAll('.star-input');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const texto = textoInput.value;

 
        let rating;
        starInputs.forEach(function (starInput) {
            if (starInput.checked) {
                rating = starInput.value;
            }
        });

        console.log('Ticket de suporte:', texto);
        console.log('Avaliação:', rating);

        textoInput.value = '';
    });
});
    

