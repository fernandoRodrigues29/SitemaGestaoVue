<template>
  <form>
    <div class="card p-3">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="form-group">
            <label class="label_input" for="nome">Nome</label>
            <input
              type="text"
              class="form-control"
              id="nome"
              placeholder="Nome"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label class="label_input" for="telefone">Telefone</label>
            <the-mask v-model="form_dados.telefone" placeholder="Telefone" class="form-control" :mask="['(##) ####-####', '(##) #####-####']" />
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="form-group">
            <label class="label_input" for="email">E-Mail</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder=" email"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label class="label_input" for="dn">Data Nacimento</label>
            <div class="form-control">
              <datetime  class="form-control"  v-model="form_dados.dn" placeholder="ex: 10/01/1999"></datetime>
            </div>

          </div>
          {{ form_dados.dn }}
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-6 mt-5">
          <div class="form-group">
            <label class="label_input" for="exampleInputEmail1">Sexo</label>
            <div class="d-flex">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="sexo"
                  id="sx1"
                  value="M"
                  v-model="form_dados.sexo"
                />
                <label class="custom-control-label" for="sx1">Masculino</label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="sexo"
                  id="sx2"
                  value="F"
                  v-model="form_dados.sexo"
                />
                <label class="custom-control-label" for="sx2">Feminino</label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="sexo"
                  id="sx3"
                  value="O"
                  v-model="form_dados.sexo"
                />
                <label class="custom-control-label" for="sx3">Outros</label>
              </div>
            </div>
          </div>
          {{ form_dados.sexo }}
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label class="label_input" for="tags">Tags</label>
            <input
              type="text"
              class="form-control"
              id="tags"
              placeholder="Tags"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="card mt-3 p-3">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="form-group">
            <label class="label_input" for="select_1">Select 1</label>
            <select class="form-control"  name="" id="">
              <option value="1"> option 1 </option>
              <option value="2"> option 2 </option>
              <option value="3"> option 3 </option>
              <option value="4"> option 4 </option>
            </select>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label class="label_input" for="select_1">Select 2</label>
            <select class="form-control" name="" id="">
              <option value="1"> option 1 </option>
              <option value="2"> option 2 </option>
              <option value="3"> option 3 </option>
              <option value="4"> option 4 </option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="card mt-3 p-3">
      <div class="row justify-content-center">
        <div class="col-md-6">
          {{ girarSeta }}
          <div class="form-group-lista">
            <div class="selectedObject" @click="girarSeta = !girarSeta">
              <input type="text" class="input_valor_selecionado" name="valor_selecionado" value="">
              <div class="setas" :class="{ ativo:girarSeta }">
                <i class="fa fa-chevron-down"></i>
              </div>
            </div>
            <div class="searchBox" :class="['ativo',girarSeta ? 'ativo':'desativado']">
              <div class="inputBox">
                <input type="text" class="text" placeholder="pesquise aqui" v-model="inptPesquisa">
              </div>
              <div class="listBox">
                <ul>
                  <li v-for="(item,index) in listaFiltrada" :key="index"><span @click="updateName(item)">{{ item }}</span></li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
    <div class="card mt-3 p-3">
      <p>
        {{ cpf | cpffiltro}}
      </p>
    </div>
    <div class="card mt-3 p-3">
      <div class="row">
        <div class="col-6">
          <SelectComp :lista=lista_filtrar @receber_o_evento="ouverEvento"></SelectComp>
        </div>
      </div>
    </div>

    <div class="card mt-3 p-3">
      <div class="row">
        <div class="col-12">
          <button type="submit" class="btn btn-success btn-lg w-100 ">Enviar</button>
          <button type="button" class="btn btn-outline-primary w-100">Cancelar</button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import SelectComp from './SelectComp.vue' 
// import "vue-scroll-picker/lib/style.css";
//https://www.npmjs.com/package/vue-scroll-picker
// import { VueScrollPicker } from 'vue-scroll-picker'
import { Datetime } from 'vue-datetime'
import {TheMask} from 'vue-the-mask'

import 'vue-datetime/dist/vue-datetime.css'
export default {
  name: "formulario_de_cadastro",

  data(){
    return{
      girarSeta:false,
      inptPesquisa:'',
      cpf:"12312312312",
      form_dados:{
        nome:'',
        telefone:'',
        email:'',
        dn:'',
        sexo:'',
        tags:''
      },
      lista_filtrar:['alfa','boris','alfafa','charlie','carlos','ubiratan','ubirajara','jaime','jacinto','zení','zacarias']
    }
  },
  filters: {
    cpffiltro: (num)=> {
      return num.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/,"$1.$2.$3-$4");
    },
    filtro_calendario:(tel)=>{
      let telef = tel.replace(/(\d{2})?(\d{4})?(\d{4})/,"($1) $2-$3")
      return telef
    },
    filtro_telefone:(tel)=>{
      if(tel.match(/^[a-zA-Z]+$/)) return '' 
      let telef2 = tel.replace(/(\d{2})?(\d{4})?(\d{4})/,"($1) $2-$3")
      return telef2
    }
  },
  methods:{
    ouverEvento(msg){
      console.info('comp Pai:',msg);
    },
    filtroListaInput(val){
      let arr = [];
				let valorPesquisado = val.value.toLowerCase();
        arr = this.lista_filtrar.filter(data=>{
					return data.toLowerCase()
          .startsWith(valorPesquisado);
				})
				.map(data=>`<li onclick="updateName(this)">${data}</li>`)
        .join("");

				console.log(arr);
    },
    updateName(item){
      let box_input = document.querySelector('.input_valor_selecionado');
      this.girarSeta = !this.girarSeta;
      this.inptPesquisa = item;
      box_input.value=item;
    }
  },
  computed:{
    listaFiltrada(){
      return this.lista_filtrar.filter(item=>
        item.toLowerCase().includes(this.inptPesquisa.toLowerCase())
      )
    }
  },
  components: {TheMask,datetime: Datetime,SelectComp}
  // components: {
  //   VueScrollPicker, // export VueScrollPicker is component
  // },
};
</script>
<style>
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

/*animação */
/*select pesquisavel */

.searchBox{
  /* transition: .4s; */
  position: relative;
  border: 0px solid #c1c1c1;
  max-height: 0vw;
  overflow: hidden;
}
.searchBox.ativo{
  animation: abrir_perciana .5s forwards;
}
.searchBox.desativado{
  animation: fechar_perciana .5s forwards;
}
.selectedObject{
  position: relative;
  border: 1px solid #c1c1c1;
  margin-bottom: .5vw;
  padding: 8px;
  display: flex;
  justify-content: space-between;
}
.searchBox ul li{
  list-style: none;
}
.inputBox input{
  width: 90%;
  padding: 4px;
}
/* barra rolagem */
.listBox{
  max-height: 250px;
	overflow-y: auto;
	padding-right: 7px;

}
.listBox::-webkit-scrollbar{
	width: 7px;
}
.listBox::-webkit-scrollbar-track{
	background-color: #f1f1f1;
	border-radius: 25px;
}
.listBox::-webkit-scrollbar-thumb{
	background-color: #ccc;
	border-radius: 25px;
}
/* barra rolagem */

.listBox ul li{
  text-align: left;
  padding: 4px 8px;
}
.listBox ul li span {
  color: #7e7e7e;
  transition: .5s;
  cursor: pointer;
}

.listBox ul li:hover{
  background-color: #dff2f8;
  color: #585858;
}

.listBox ul li:hover > span{
  color: #39be18;
 font-size: 2em;
}
/*select pesquisavel */

input.form-control,select.form-control {
  padding: 8px 16px !important;
  border: 1px solid #cccccc60;
  outline: none;
  border-radius: 4px;
  /* border: 1px solid #0000; */
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(60, 66, 87, 0.161) 0px 0px 0px 1px;
}
input.form-control:focus,select.form-control {
  box-shadow: #063cdfa9 0px 0px 4px 0px;
}
input.form-control:active,select.form-control {
  border: 1px solid #0f0cb881 !important;
}

.label_input {
  float: left;
  font-size: 1.4em;
  font-weight: 500;
}
</style>
