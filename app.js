function alterarStatus(id){
    let jogoclicado = document.getElementById(`game-${id}`);
    let imagemjogo = jogoclicado.querySelector('.dashboard__item__img');
    let botao = jogoclicado.querySelector('.dashboard__item__button')
    
    if(imagemjogo.classList.contains('dashboard__item__img--rented')){
        imagemjogo.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return'),
        botao.textContent = 'Alugar';

    } else {

        imagemjogo.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return')
        botao.textContent = 'Devolver';
    }
}