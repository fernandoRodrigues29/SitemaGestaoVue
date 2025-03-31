<template>
  <div>
    <div class="form-group-lista">
      <div class="selectedObject" @click="girarSeta = !girarSeta">
        <input
          type="text"
          class="input_valor_selecionado"
          name="valor_selecionado"
          placeholder="Pesquise Aqui"
          v-model=valPesquisa 
          value=""
        />
        <!-- <input
          type="text"
          class="input_valor_selecionado"
          name="valor_selecionado"
          placeholder="Pesquise Aqui"
          v-model=valExibirResultado 
          value=""
        /> -->
        <div class="setas" :class="{ ativo: girarSeta }">
          <i class="fa fa-chevron-down"></i>
        </div>
      </div>
      <div
        class="searchBox"
        :class="['ativo', girarSeta ? 'ativo' : 'desativado']"
      >
        <div class="inputBox">
          <!-- <input
            type="text"
            class="text"
            placeholder="pesquise aqui"
            v-model="valPesquisa"
          /> -->
        </div>
        <div class="listBox">
          <ul>
            <li v-for="(item, index) in listaFiltrada" :key="index">
              <span @click="updateName(item)">{{ item[chave] }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectComp",
  data() {
    return {
      girarSeta: false,
      valPesquisa: "",
      valExibirResultado:"",
      lista_filtrar: [
        "alfa",
        "boris",
        "alfafa",
        "charlie",
        "carlos",
        "ubiratan",
        "ubirajara",
        "jaime",
        "jacinto",
        "zení",
        "zacarias",
      ],
      // objSelecionado:null
    };
  },
  props: ["lista","chave","objSelecionado"],
  methods: {
    enviarDadosSelecionado(e) {
      e.preventDefault();
      this.$emit("receber_o_evento", "mensgem fabricada no componente filho");
    },
    updateName(item) {
      const ch = this.chave;
      this.girarSeta = !this.girarSeta;
      this.valPesquisa = item[ch];
      this.objSelecionado = item[ch];
      this.valExibirResultado= item[ch];
      this.$emit("receber_o_evento", item);
    },
    carregarDado(){
      //console.log('objeto Selecionado:',this.objSelecionado)
      // if(this.objSelecionado){
      //   console.log('dados chegando');
      // }else{
      //   console.log('dados nulos');
      // }
    }
  },
  watch: {
    objSelecionado(neoVal,oudVal){
      //terminar essa logica, iusar esse objeto para setar a lista e selecionar o item
      console.log('novo valor',neoVal);
      const ch = this.chave;
      this.valExibirResultado= neoVal;
      this.valPesquisa = neoVal;
      console.log('chave',ch);
      console.log('lista',this.lista);
      console.log('valor para pesquisar',this.valPesquisa.toLowerCase());

      const item_filtrado =  this.lista.filter((item) =>item[ch].toLowerCase().includes(this.valPesquisa.toLowerCase()));
      
      console.log('item filtrado:',item_filtrado);
      // this.valPesquisa = item[ch];
      // this.objSelecionado = item[ch];
      // this.valExibirResultado= item[ch];
      // this.$emit("receber_o_evento", item);
    }
  },
  created(){
    this.carregarDado()
  },
  computed: {
    listaFiltrada() {
      console.log('[selectComp][listaFiltrada]',this.lista.length);
      if(this.lista){
        const ch = this.chave;
        console.log('[selectComp][ch]',ch);
          return this.lista.filter((item) =>item[ch].toLowerCase().includes(this.valPesquisa.toLowerCase()));

      }
      return null;
    },
  },
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
/* setas */
.setas{
  font-size: 1.3rem;
  transition: .5s;
}
.setas.ativo{
  transform: rotate(180deg);
}
.input_valor_selecionado{
  border: 0;
  outline: none;
}
/* setas */
/*animação */
@keyframes abrir_perciana {
  from{
    border: 0px solid #c1c1c1;
    max-height: 0vw;
  }to{
    border: 1px solid #c1c1c1;
    max-height: 24vw;
  }
}

@keyframes fechar_perciana {
  from{
    border: 1px solid #c1c1c1;
    max-height: 24vw;
  }to{
    border: 0px solid #c1c1c1;
    max-height: 0vw;
  }
}
.selectedObject{
  cursor: pointer;
}
/*animação */
/*select pesquisavel */
</style>
