<template>
    <div>
    <div class="grid grade">
        <aside class="menuSection">
            <div class="icone">
                <img src="assets/img/bell2.svg" alt="">
            </div>
            <ul class="lista-sidemenu">
                <li><div class="item-lista">
                    <img src="assets/img/docs2.svg" alt="">
                </div></li>
                <li><div class="item-lista">
                    <img src="assets/img/docs2.svg" alt="">
                </div></li>
                <li><div class="item-lista">
                    <img src="assets/img/docs2.svg" alt="">
                </div></li>
                <li><div class="item-lista">
                    <img src="assets/img/docs2.svg" alt="">
                </div></li>
                <li><div class="item-lista">
                    <img src="assets/img/docs2.svg" alt="">
                </div></li>
            </ul>
            <div class="btn-sair">
                <img src="assets/img/exit2.svg" alt="">
            </div>
        </aside>
        <section class="sectionCentral">
            <article class="headPesquisa">
                <div class="tituloBox">
                    <div class="info-head subTitulo">Primary</div>
                    <div class="info-head titulo">Dashboard</div>
                </div>
                <div class="pesquisaBox">
                    <div class="inputBox">
                        <span><img src="assets/img/lupa.png" alt=""></span>
                        <input type="text">
                    </div>
                    <div class="imgBox">
                        <img src="assets/img/pessoa.jpg" alt="">
                    </div>
                </div>
            </article>
            <article class="painelSection grid">
                <div class="painel boxPainel">
                    <div class="cardPainel">
                        <div class="card-v4">
                            <div class="card-head">
                                <div class="titulo">Overview</div>
                                <div class="btn_acao">monthly</div>
                            </div>
                            <div class="card-body">
                                <div class="grafico">
                                    <canvas id="linha" style="width: 130px"></canvas>
                                </div>
                                <div class="sombra-esmaecida"></div>
                                <div class="abas">
                                    <div class="aba aba-1">
                                        <div class="abaBox">
                                            <div class="subTitulo">
                                                Total Time
                                            </div>
                                            <div class="princInfo">
                                                748 Hr
                                            </div>
                                            <div class="mesInfo">
                                                April
                                            </div>
                                        </div>
                                    </div>
                                    <div class="aba aba-2 ativo">
                                        <div class="abaBox">
                                            <div class="subTitulo">
                                                Total Steps
                                            </div>
                                            <div class="princInfo">
                                                9.178 St
                                            </div>
                                            <div class="mesInfo">
                                                April
                                            </div>
                                        </div>
                                    </div>
                                    <div class="aba aba-3">
                                        <div class="abaBox">
                                            <div class="subTitulo">
                                                Target
                                            </div>
                                            <div class="princInfo">
                                                9.200 St
                                            </div>
                                            <div class="mesInfo">
                                                April
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="painel boxPainelAux">
                    <div class="cardMini">
                        <div class="boxCards">
                            <div class="card-simples">
                                <div class="logoBox">
                                    <img src="assets/img/shoes.svg" alt="docs_img" srcset="">
                                    <!-- <svg>
                                        <use href="./img/shoes.svg" style="--color_fill: #fff;"></use>
                                    </svg> -->
                                </div>
                                <div class="textBox">
                                    <div class="titulo">
                                        Daly Jogging
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="cardExpandido">
                        <div class="card-v2">
                            <div class="card-head">
                                <div class="logoBox">
                                    <img src="assets/img/shoes.svg" alt="docs_img" srcset="">
                                </div>
                                <div class="textBox">
                                    <div class="titulo">
                                        My Jogging
                                    </div>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="infoBox">
                                    <div class="supra-titulo">
                                        Total Timer
                                    </div>
                                    <div class="principal-info">
                                        748 hr
                                    </div>
                                    <div class="mes-da-acao">
                                        July
                                    </div>
                                </div>
                                <div class="btnBox">
                                    <img src="assets/img/seta_direita.png" alt="" srcset="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article class="cardsListSection">
                <div class="card-item cardsLista">
                    <div class="card-v3">
                        <div class="imgBox">
                            <img src="assets/img/bycicleman_icon.png" alt="">
                        </div>
                        <div class="card-head">
                            
                            <div class="infoBox">
                                <div class="titulo">
                                    Bicycle Drill
                                </div>
                                <div class="subInfo">
                                    36km/weeks
                                </div>
                            </div>
                            <div class="menu_dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="progressBox">
                                <div class="infoProgressBox">
                                    <div class="titulo_progess">Progress</div>
                                    <div class="percents">35%</div>
                                </div>
                                <!-- <progress id="file" value="32" max="100"> 32% </progress> -->
                                <div class="barra_progresso"></div>
                            </div>
                            <div class="auxInfo">
                                <div class="kmtrs">
                                    17/36km
                                </div>
                                <div class="infoDaysLeft">
                                    2 days left
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-item cardsLista">
                    <div class="card-v3">
                        <div class="imgBox">
                            <img src="assets/img/bycicleman_icon.png" alt="">
                        </div>
                        <div class="card-head">
                            
                            <div class="infoBox">
                                <div class="titulo">
                                    Bicycle Drill
                                </div>
                                <div class="subInfo">
                                    36km/weeks
                                </div>
                            </div>
                            <div class="menu_dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="progressBox">
                                <div class="infoProgressBox">
                                    <div class="titulo_progess">Progress</div>
                                    <div class="percents">35%</div>
                                </div>
                                <!-- <progress id="file" value="32" max="100"> 32% </progress> -->
                                <div class="barra_progresso"></div>
                            </div>
                            <div class="auxInfo">
                                <div class="kmtrs">
                                    17/36km
                                </div>
                                <div class="infoDaysLeft">
                                    2 days left
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-item cardsLista">
                    <div class="card-v3">
                        <div class="imgBox">
                            <img src="assets/img/bycicleman_icon.png" alt="">
                        </div>
                        <div class="card-head">
                            
                            <div class="infoBox">
                                <div class="titulo">
                                    Bicycle Drill
                                </div>
                                <div class="subInfo">
                                    36km/weeks
                                </div>
                            </div>
                            <div class="menu_dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="progressBox">
                                <div class="infoProgressBox">
                                    <div class="titulo_progess">Progress</div>
                                    <div class="percents">35%</div>
                                </div>
                                <!-- <progress id="file" value="32" max="100"> 32% </progress> -->
                                <div class="barra_progresso"></div>
                            </div>
                            <div class="auxInfo">
                                <div class="kmtrs">
                                    17/36km
                                </div>
                                <div class="infoDaysLeft">
                                    2 days left
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </article>
        </section>
        <div class="auxSection">
            <div class="lista-head">
                <header>
                    <div class="top-config">
                        <div class="boxTitulo">
                            <div id="menudireito-img">
                                <img src="assets/img/grupos.png" alt="">
                            </div>
                            <div id="tipo">Friend</div>

                        </div>

                        <div id="todos">Viell all</div>
                    </div>

                </header>
                <div>
                    <div class="buton-tooogle">
                        active
                   </div>
                        online
                    </div>
                </div>
            </div>
            <div class="lista-corpo">
                <div class="item">
                    <div class="imgBox">
                        <img class="imgItem" src="assets/img/l_pessoa.jpg" alt="">
                    </div>
                    <div class="infoBox">
                        <span class="nome">Max Stone</span>
                        <span class="subnome">Wecly Bycicle</span>
                        <span class="btnImg">
                            <img src="assets/img/mail.png" alt="">
                        </span>
                    </div>
                </div>
                <div class="item">
                    <div class="imgBox">
                        <img class="imgItem" src="assets/img/l_pessoa.jpg" alt="">
                    </div>
                    <div class="infoBox">
                        <span class="nome">Max Stone</span>
                        <span class="subnome">Wecly Bycicle</span>
                        <span class="btnImg">
                            <img src="assets/img/mail.png" alt="">
                        </span>
                    </div>
                </div>
                <div class="item">
                    <div class="imgBox">
                        <img class="imgItem" src="assets/img/l_pessoa.jpg" alt="">
                    </div>
                    <div class="infoBox">
                        <span class="nome">Max Stone</span>
                        <span class="subnome">Wecly Bycicle</span>
                        <span class="btnImg">
                            <img src="assets/img/mail.png" alt="">
                        </span>
                    </div>
                </div>
            </div>
            <div class="mapBox">
                <div class="mapItem"> mapa</div>
            </div>
        </div>
        
    </div>
  
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  /* minimizar isso */
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background-color: #f4f4f5;
}
main{
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
}
.mt-1{
    margin-top: 1vh;
}
.mt-2{
    margin-top: 20vh;
}
.mt-3{
    margin-top: 30vh;
}
.mt-4{
    margin-top: 40vh;
}
.mt-5{
    margin-top: 50vh;
}
/*grids*/
.row-f{
    display: flex;
}
.row-g{
    display: grid;
}

.grid-template-colum-1{
    grid-template-columns: 1fr;
}

.grid-template-colum-2{
    grid-template-columns: 1fr 1fr;
}

.grid-template-colum-3{
    grid-template-columns: 1fr 1fr 1fr;
}
/*grids*/
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}
.grid{
    display: grid;
}
.grid-template-main-3{
    grid-template-columns: 1fr 3fr 1fr;
}
/*areas nomeadas*/
.menuSection{
    grid-area: lateral-esquerdo;
    background-color: rgb(113 99 186);
    border-radius: 16px;
    display: flex;
    gap: 32px;
    flex-direction: column;
    align-items: center;
    padding-top: 16px;
    padding-bottom: 24px;
    justify-content: flex-start;
    box-shadow: 20px 2px 20px 20px #cccccc33;
}
.menuSection ul{
    list-style: none;
    height: 71vh;
    background: rgba(236, 235, 232, 0);
    padding-top: 20px;
    border-top: 1px solid #ffffff99;
    box-shadow: inset 0px 0px 0px 0px #fff, 0px 0px 0px 0px #fff;
}
.sectionCentral{
    grid-area: conteudo-principal;
    background-color: #fffdfd00;
    display: grid;
    grid-template-rows: .5fr 2fr 1fr;
    gap: 8px;
}
.headPesquisa{
    display: flex;
    justify-content: space-between;
    padding: 8px 24px;
}
.headPesquisa .tituloBox .info-head.titulo {
    font-size: 2rem;
}
.headPesquisa .pesquisaBox .inputBox{
    margin-right:16px;
}
.headPesquisa .pesquisaBox {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.headPesquisa .pesquisaBox .imgBox img{
    width: 40px;
    height: 40px;
    border-radius: 24px;
}
.headPesquisa .pesquisaBox .inputBox {
    background: #dfdfdf;
    padding: 8px 16px;
    border-radius: 12px;
}
.headPesquisa .pesquisaBox .inputBox img{
    width: 1.1rem;
}
.headPesquisa .pesquisaBox .inputBox input[type="text"] {
    outline: none;
    border: none;
    background: transparent;
    font-size: 1rem;
    color: #575365;
}

.auxSection{
    grid-area: lateral-direito;
    background-color: #fff;
    box-shadow: -20px 3px 17px 20px #cccccc21;
}
/*fim areas nomeadas*/

.grade{
    grid-template: 
    "lateral-esquerdo conteudo-principal lateral-direito 200px"
    "lateral-esquerdo conteudo-principal lateral-direito 1fr"
    "lateral-esquerdo conteudo-principal lateral-direito 1fr"
    /.5fr 5fr 1.5fr;
    grid-gap: 16px;
    padding: 8px 16px;
    background-color: #fff;
}
/*painel*/
.painelSection{
    grid-template-columns: 4fr 1.4fr;
    gap: 8px;
    padding: 8px;
    height: 65vh;
    margin-bottom: 2vw;
    /* height: 65vh; */
}
.painelSection .painel{
    background-color: #ffffff;
    box-shadow: -2px 6px 5px 0px #cccccc36;
    z-index: 99;
    padding: 16px;
    border-radius: 8px;
    height: 100%;
}
.painel.boxPainelAux {
    display: grid;
    align-content: space-between;
}
.boxPainel{
    height: 40vh;
}
/*card lista*/
.cardsListSection{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 8px;
    padding: 8px;
}
.cardsListSection .card-item{
    position: relative;
    background-color: #ffffff;
    box-shadow: -2px 6px 5px 14px #cccccc2e;
    z-index: 99;
    padding: 16px;
    border-radius: 8px;
    height: 37vh;
}
/*card lista*/

/*painel*/
/* side menu */
.lista-sidemenu .item-lista{
    display: flex;
    border: 1px solid #f3f3f3;
    width: 40px;
    height: 40px;
    border-radius: 16px;
    margin-bottom: 8px;
    text-align: center;
    justify-content: center;
    align-items: center;

}
.lista-sidemenu .item-lista img{
    max-width: 16px;
}
.menuSection .icone .icone {
    width: 36px;
    height: 36px;
    border: 0px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
}
.menuSection .icone img{
    width: 2vw;
}
.menuSection .btn-sair img{
    width: 2.7vw;
}
/* side menu */
/*lista direita*/
/*item*/
.lista-corpo .item{
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 16px 1px;
    padding-left: 16px;
}
/* item img */
.imgBox .imgItem{
    width:2.5vw;
    height: 2.5vw;
    border-radius: 50%;
}
/*corpo */
.item .infoBox{
    display: flex;
    flex-direction: column;
    align-content: flex-end;
    width: 10vw;
}

.item .infoBox .btnImg {
    position: absolute;
    right: 1vw;
    background: #ccc6be;
    padding: 8px 8px;
    width: 40px;
    height: 40px;
    border-radius: 32px;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
}

.item .infoBox .nome {
    font-weight: 600;
    font-size: 1.2rem;
    color: #181525;
}

.item .infoBox .subnome {
    font-weight: 100;
    font-size: .8rem;
}
/*menu direito*/
/*topo*/
.top-config {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;
}
.top-config .boxTitulo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 48%;
}
.top-config .boxTitulo #menudireito-img img{
    max-width: 24px;
}

.top-config .boxTitulo #tipo{
    font-size: 1.1rem;
    color: #181525;
}

.top-config #todos{
    font-size: .7rem;
    color:#554b7d;
}
/*btn togle central*/
.lista-head article{
    width: 85%;
    margin: 2vw auto;
    display: flex;
    background-color: #cecccc;
    padding: 4px 8px;
    border-radius: 16px;
    align-items: center;
    justify-content: space-between;
}
.lista-head article .buton-tooogle{
    background-color: #9500ff;
    color: #fff;
    padding: 8px 16px;
    border-radius: 21px;
}
/*btn togle central*/
/* map box */
.mapBox{
    display: flex;
    justify-content: center;
    align-items: center;
}
.mapItem{
    background-color: burlywood;
    width: 19vw;
    height: 16vw;
}
/* map box */
/*card rodape*/
.card-v3{
    width: 100%;
    padding-top: 4rem;
    padding-bottom: .8rem;
    padding-left: 2rem;
    padding-right: 2rem;
    background-color: #fff;
    border-radius: 24px;
    position: relative;
    margin-bottom: 10vh;
    border: 1px solid red;
    position: absolute;
    top: 0;
    left: 0;
}
.card-v3 .card-head {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
.card-v3  .imgBox{
    position: absolute;
    width: 5.5rem;
    height: 5rem;
    display: flex;
    border-radius: 30px;
    background-color: #8d7eda;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 50%;
    transform: translate(-50%, -21%);
    box-shadow: 1px 2px 3px 1px #ccc;
}
.card-v3 .imgBox img{
    max-width: 3rem;
}
.card-v3 .auxInfo{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4vh 2vh;
}
.card-v3 .auxInfo .kmtrs{
    font-size: .8rem;
    color: #5a5a5a;
}
.card-v3 .auxInfo .infoDaysLeft{
    color: red;
    font-size: .8rem;
    padding: 8px;
    border-radius: 16px;
    background-color: #fbdfe8;
}

.card-v3 .card-head .infoBox .titulo{
    font-size: 1.4rem;
    color: #2a135e;
    text-shadow: 1px 2px 5px #ccc;
}

.card-v3 .card-head .infoBox .subInfo{
    margin-top: .9vh;
    color: #5b5b5b;
    letter-spacing: 1.3px;
}

.card-v3 .card-head .auxInfo .subInfo{
    font-size: .9rem;
    color: #686666;
    letter-spacing: 2px;
    margin-top: 1vh;
    margin-bottom: 2vh;
}

.card-v3 .menu_dots{
    position: absolute;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: .3rem;
    transform: translate(0px, -200%);
    cursor: pointer;
}
.card-v3 .menu_dots span{
    width: .3rem;
    height: .3rem;
    border-radius: 50%;
    background-color: rgb(161, 161, 161);
   
}
/*progress bar*/
.card-v3 .progressBox{
    height: 1vh;
    border-radius: 8px;
    background-color: #b1b1b1;
    margin-top: 5vh;
    position: relative;
    width: 100%;
}

.progressBox .barra_progresso{
    width: 18%;
    height: 100%;
    position: relative;
    border-radius: 8px;
    background-color: #3fbe26;
}

.progressBox .infoProgressBox{
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(0px, -24px);
    width: 100%;
}
/*card rodape*/
/*painel principal*/
.cardPainel{
    background-color: #2a135ea6;
    width: 100%;
    height: 100%;
    border-radius: 16px;
}
.boxPainelAux .cardMini{
    background-color: #9500ff;
    width: 100%;
    height: 10vw;
    border-radius: 16px;
}
.boxPainelAux .cardExpandido{
    background-color: cornflowerblue;
    width: 100%;
    height: 36vh;
    border-radius: 16px;
}

/*painel principal*/
/* media query */
@media (max-width: 780px) {
    .menuSection{
        display: none;
    }
    .grade{
        grid-template: 
        "conteudo-principal lateral-direito 200px"
        "conteudo-principal lateral-direito 1fr"
        "conteudo-principal lateral-direito 1fr"
        /5fr 1.5fr;
        grid-gap: 16px;
        padding: 8px 16px;
        background-color: #fff;
    }
  }

  @media (max-width: 522px) {
    .headPesquisa {
        display: flex;
        justify-content: space-between;
        /* padding: 3px 0px; */
    }
    .grade{
        grid-template: 
        "conteudo-principal"
        "lateral-direito";
        grid-template-columns: 100vw;
        grid-template-rows: 100vh 100vh;
        grid-gap: 16px;
        padding: 8px 16px;
        background-color: #fff;
    }
    .cardsListSection {
        display: grid;
        background-color: #3fbe2600;
        
        /* grid-template-columns: 1fr;
        gap: 8px;
        padding: 8px; */
        /* margin: 10px auto; */
        /* max-width: 8vw; */
    }
    .cardsListSection {
        display: grid;
        background-color: #3fbe2600;
        height: 60vh;
        /* margin: 10px auto; */
        /* max-width: 8vw; */
    }
    .sectionCentral {
        grid-area: conteudo-principal;
        background-color: #fffdfd00;
        height: 306vh;
        display: grid;
        grid-template-rows: .1fr 1fr 1fr;
    }
    .auxSection {
        display: none;
        grid-area: lateral-direito;
        background-color: #fff;
        box-shadow: -20px 3px 17px 20px #cccccc21;
    }
    .painelSection {
        grid-template-columns: 4fr;
        gap: 8px;
        padding: 8px;
        height: 65vh;
        margin-bottom: 2vw;
        /* height: 65vh; */
    }
    .painelSection .painel {
        background-color: #ffffff;
        box-shadow: -2px 6px 5px 0px #cccccc36;
        z-index: 99;
        padding: 16px;
        border-radius: 8px;
        height: 70vh;
    }
    
    .boxPainelAux .cardExpandido {
        background-color: #fff;
        width: 100%;
        height: 40vh;
        border-radius: 16px;
    }
    .boxPainelAux .cardMini {
        background-color: #9500ff;
        width: 100%;
        height: 31vw;
        border-radius: 16px;
    }
  }
/* media query */
/*garficos*/
.card-v4{
    width: 100%;
    padding-top: 4rem;
    padding-bottom: .8rem;
    padding-left: 2rem;
    padding-right: 2rem;
    background-image: linear-gradient(1deg, #1c0e62, #7b6ec0);
    border-radius: 24px;
    position: relative;
}
.card-v4 .card-head{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 24px 24px;
}
.card-v4 .card-head .titulo{
    color: #fff;
}
.card-v4 .card-head .btn_acao {
    color: #ffffff8f;
    border: 1px solid #ffffff87;
    padding: 5px 36px;
    border-radius: 16px;
}
.card-v4 .card-body .abas {
    display: flex;
    justify-content: space-around;
    margin-top: 5vh;
    position: relative;
}
.card-v4 .card-body .abas .aba {
    padding: 8px 16px;
    /* border-radius: 16px; */
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    width: 8.7rem;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.card-v4 .card-body .abas .aba.ativo {
    border: 1px solid #ffffff8f;
    border-top-color: #3320;
    background-color: #4c4086;
    z-index: 9;
  }
  .aba.ativo::before {
    content: '';
    width: 1rem;
    height: 1rem;
    background: #322478;
    border-top: 1px solid #ffffff8f;
    border-right: 1px solid #ffffff8f;
    position: absolute;
    left: -17px;
    top: -.8px;
    border-top-right-radius: 16px;
    box-shadow: 3.7px -4.4px 1.5px 2px #4c4087;
    z-index: 90;
}
.aba.ativo::after {
    content: '';
    width: 1rem;
    height: 1rem;
    background: #332578;
    border-top: 1px solid #ffffff8f;
    border-left: 1px solid #ffffff8f;
    position: absolute;
    right: -17px;
    top: -.8px;
    border-top-left-radius: 16px;
    box-shadow: -3.3px -4.4px 1.5px 2px #4c4087;
    z-index: 90;
}
.abaBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
}
.abaBox .subTitulo {
    font-size: .7rem;
    color: #c3c3c3;
}
.abaBox .princInfo {
    font-size: 1.3rem;
}
.mesInfo {
    font-size: .7rem;
    color: #c3c3c3;
}
.sombra-esmaecida{
    width: 83%;
    height: 24%;
    background-image: linear-gradient(359deg, #bbbbbb26 46%, transparent);
    position: absolute;
    border-radius: 64px;
    top: 50%;
    left: -2%;
    transform: translateX(12%);
    box-shadow: 0px 1px 1px 0px #ffffff82;
    z-index: 0;
}
/*cards box*/
.boxCards{
    width: 23vw;
    max-width: 30vw;
    position: relative;
   padding: 8px 16px;
}
.boxCards .card-simples{
    width: 90%;
    height: 16vh;
    border-radius: 24px;
    background-color: #8d7eda;
    margin: 8px 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.boxCards .logoBox{
    background-color: #f0f8ff36;
    padding: 8px;
    border-radius: 22px;
    box-shadow: 1px 1px 2px 1px #fff;
}
.boxCards .logoBox img{
    max-width: 48px;
    filter: invert(1);
}
.boxCards .textBox{
    color: #fff;
    font-size: 1.2em;
}

.card-v2{
    background-color: #dd5983ed;
    padding: 16px;
    border-radius: 36px;
    position: relative;
    padding-top: 50%;
    /* background-image: url(./img/grafico_linha_dash.png); */
    background-size: 9rem;
    background-repeat: no-repeat;
    background-position: bottom -1px right -2px;
}
.card-v2 .card-head{
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    padding: 13px 16px;
    border-radius: 32px;
    background: #ffc4e15c;
    width: 100%;
    box-shadow: 0px 1px 8px .001px #fff;
    align-items: center;
    justify-content: space-around;
}
.card-v2 .card-head .logoBox{
    background-color: #f0f8ff36;
    padding: 8px;
    border-radius: 22px;
    box-shadow: 1px 1px 2px 1px #fff;
}
.card-v2 .card-head .logoBox img {
    max-width: 48px;
    filter: invert(1);
}
.card-v2 .card-body{
    display: flex;
    align-items: center;
    justify-content: space-around;
   
}

.card-v2 .infoBox .supra-titulo{
    font-size: .9rem;
    color: #fff;
}
.card-v2 .infoBox .principal-info{
    font-size: 1.7rem;
    font-weight: 800;
    letter-spacing: 1px;
    color: #fff;
}
.card-v2 .infoBox .mes-da-acao {
    letter-spacing: 1px;
    color: #fff;
}
.card-v2 .btnBox img{
    max-width: 2rem;
}


  </style>