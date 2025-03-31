<template>
  <div>
    <div class="conteiner">
      <!-- linha 1 -->
      <div class="linha-1">
        <div class="col col-graf coluna-1">
           <div class="apinelGrafico">
             <div class="camadaDeFundo"></div>
            <div class="boxFlutuante">
              <div class="flutuanteTitulo">Overview</div>
            
              <div class="flutuanteSelecioneBtn">
                <div class="selectflutuanteSelecioneBtn">
                  Monthtly
                  <div class="imgBoxChefron">
                    <img src="/assets/img/chevron.svg" alt="">
                  </div>
                </div>
              </div>
            </div>
            <div class="graficoBox">
              <canvas ref="grafico_principal" id="convas_grafico_conteiner"></canvas>
            </div>
            <div class="abasBox">
              <div class="abaMarcador"></div>
              <div class="abaItem" @click="moverMarcador(0)">
                <div class="labelItemTitulo">Total Timer</div>
                <div class="labelItemNumer">748hr</div>
                <div class="labelItemSubtitulo">April</div>
              </div>
              <div class="abaItem"  @click="moverMarcador(1)">
                <div class="labelItemTitulo">Total Timer</div>
                <div class="labelItemNumer">748hr</div>
                <div class="labelItemSubtitulo">April</div>
              </div>
              <div class="abaItem"  @click="moverMarcador(2)">
                <div class="labelItemTitulo">Total Timer</div>
                <div class="labelItemNumer">748hr</div>
                <div class="labelItemSubtitulo">April</div>
              </div>
            </div>
           </div>
        </div>
        <div class="col coluna-2">
          <div class="boxCards">
            <div class="cardInfo" @click="visualizarCardBody()" :class="{'ativo':visualizarCardCheck}">
              <div class="cardCabeca">
                  <div class="logoBox">
                    <img
                      src="/assets/img/tag_i.svg"
                      style="width: 10vw"
                      alt="docs_img"
                      srcset=""
                    />
                  </div>
                  <div class="textBox">
                    <div class="titulo">Tags</div>
                  </div>
              </div>
              <div class="cardCorpo" :class="{'ativo':visualizarCardCheck}">
                <div class="infoCorpo">
                  <div class="boxNumeros">
                    <div class="tituloBoxNumero">Total Time</div>
                    <div class="numeroBoxNumero">748 hr</div>
                    <div class="subTituloBoxNumero">July</div>
                  </div>
                  <div class="boxBtnSeta">
                    <img src="/assets/img/seta_direita.svg" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="boxCards mt-2">
            <div class="cardInfo" @click="visualizarCardBody()" :class="{'ativo':!visualizarCardCheck}"> 
              <div class="cardCabeca">
                <div class="logoBox">
                  <img
                    src="/assets/img/ultimos_cadastrados.svg"
                    style="width: 10vw"
                    alt="docs_img"
                    srcset=""
                  />
                </div>
                <div class="textBox">
                  <div class="titulo">Ultimos Cadastrados</div>
                </div>
              </div>
              <div class="cardCorpo" :class="{'ativo':!visualizarCardCheck}">
                <div class="infoCorpo">
                  <div class="boxNumeros">
                    <div class="tituloBoxNumero">Total Time</div>
                    <div class="numeroBoxNumero">748 hr</div>
                    <div class="subTituloBoxNumero">July</div>
                  </div>
                  <div class="boxBtnSeta">
                    <img src="/assets/img/seta_direita.svg" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- linha 2 -->
      <div class="linha-2">
        <div class="col coluna-1" v-for="i in 3" :key="i">
          <div class="cardItem">
                <div class="imgBox">
                    <img src="/assets/img/grupo.svg" alt="">
                </div>
                <div class="card-head">
                    <div class="infoBox">
                        <div class="titulo">
                           Grupo
                        </div>
                        <div class="subInfo">
                            36pt/semana
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
        <!-- <div class="col coluna-2">coluna 2</div>
        <div class="col coluna-3">coluna 3</div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { Chart } from "chart.js/auto";
export default {
  name: "componeteChart",
  data(){
    return {
      visualizarCardCheck:false
    }
  },
  mounted() {
    this.rederizarGrafico();
  },
  methods: {
    visualizarCardBody(){
      this. visualizarCardCheck = !this. visualizarCardCheck;
    },
    rederizarGrafico() {
      const ctx = this.$refs.grafico_principal.getContext("2d");
      new Chart(ctx, {
        type: "line",
        data: {
          labels: ["janeiro", "fevereiro", "Março", "abril", "maio", "junho"],
          datasets: [
            {
              labels: "vendas",
              color:'#fff',
              data: [10, 200, 130, 40, 250, 960],
              // fill: 'start',
              //   backgroundColor: (ctx) => {
              //     const canvas = ctx.chart.ctx;
              //     const gradient = canvas.createLinearGradient(0, -90, 0, 430);

              //     gradient.addColorStop(0, '#6a5dae');
              //     gradient.addColorStop(1, '#2e13ba');
              //     // gradient.addColorStop(0, '#7F56D9');
              //     // gradient.addColorStop(1, '#fff');

              //     return gradient;
              //   },
              backhgroundColor: [
                "red",
                "blue",
                "green",
                "yellow",
                "purple",
                "orange",
              ],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales:{
            x:{
              grid:{
                display:false
              }
              ,ticks:{
                // display:false
                color:'#fff'
              }
            },
            y:{
              grid:{
                display:false
              },
              ticks:{
                display:false
              }
            }
          }
        },
      });
    },
    moverMarcador(i){
      console.log('movimento');
      let eleMarcador = document.querySelector('.abaMarcador');
      eleMarcador.style.transform= `translateX(calc(${i}* 14.5vw))`;
      //transform: translateX(calc(1* 14.5vw));
    }
  },
};
</script>
<style src="./Cards.css"></style>
<style src="./GraficoPainel.css"></style>
<!-- <style src="./CardsExpandido.css"></style> -->
<style>
/*para o canvas*/
canvas {
  width: 100%;
  height: 100%;
}
#convas_grafico_conteiner{
  height: 32vh !important;
  width: 100% !important;
}
/*para o canvas*/
.linha-1 {
  margin-top: 8px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4px;
}
.linha-2 {
  margin-top: 8px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4px;
}
.col {
  background-color: rgba(235, 235, 235, 0.048);
  padding: 8px;
}
.col-graf {
  background-color: #fff;
}

.conteiner-maximo {
  border: 3px solid #e6340833;
}
.banda_esquerda {
  border: 3px solid #c3c3;
  /*width: 73%;*/
}
.banda_direita {
  border: 1px solid #dd9907;
  /*width: 27%;*/
}
.cartao {
  min-width: 120px;
  width: 26rem;
  min-height: 100px;
  padding: 8px 16px;
  border: 1px solid #c2c2c2;
  margin: 0.3rem;
  border-radius: 8px;
}
.colunaCartao {
  border: 1px solid #c2c2c2;
  /* width: 47%; */
  border-radius: 8px;
}
.shadow-1 {
  box-shadow: 1px 2px 4px #acacac52;
}
.info_card {
  text-align: left;
}
.iconeSpan {
  font-size: 4rem;
}
.realce_verde {
  color: #0ea300;
}
/*card (trocar para um arquivo aparte) */
/* card coluna expandida*/
</style>
