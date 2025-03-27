document.addEventListener('DOMContentLoaded', function() {
    const easterEggButton = document.getElementById('easter-egg-button');
    const easterEggMessage = document.getElementById('easter-egg-message');
    const vampireDiariesButton = document.getElementById('vampire-diaries-button');
    const vampireDiariesMessage = document.getElementById('vampire-diaries-message');
    const vampireAbilityButton = document.getElementById('vampire-ability-button');
    const vampireAbilityMessage = document.getElementById('vampire-ability-message');
    const secretButton = document.getElementById('secret-button');
    const secretMessage = document.getElementById('secret-message');

    easterEggButton.addEventListener('click', function() {
        easterEggMessage.classList.remove('hidden');
        easterEggButton.style.display = 'none'; // Esconde o bot�o ap�s o clique
    });

    vampireDiariesButton.addEventListener('click', function() {
        vampireDiariesMessage.classList.remove('hidden');
        vampireDiariesButton.style.display = 'none'; // Esconde o bot�o ap�s o clique
    });

    vampireAbilityButton.addEventListener('click', function() {
        vampireAbilityMessage.classList.remove('hidden');
        vampireAbilityButton.style.display = 'none'; // Esconde o bot�o ap�s o clique
    });

    secretButton.addEventListener('click', function() {
        secretMessage.classList.remove('hidden');
        secretButton.style.display = 'none'; // Esconde o bot�o ap�s o clique
    });

    // Intera��o com o "beijo" (opcional)
    const phoneScreen = document.querySelector('.phone-screen');
    phoneScreen.addEventListener('click', function() {
        // Aqui voc� pode adicionar um efeito visual extra
        // como mudar a cor do fundo ou exibir mais cora��es.
        phoneScreen.style.backgroundColor = '#ffebee'; // Rosa bem claro
        setTimeout(() => {
            phoneScreen.style.backgroundColor = '#f8bbd0'; // Volta � cor original
        }, 500); // 500 milissegundos
    });
});