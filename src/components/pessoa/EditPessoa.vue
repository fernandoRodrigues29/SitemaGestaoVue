<template>
  <form>
    <div class="msg_alert msg_info" v-if="msg_alert">
      <span>X</span>
      <p class="msg_texto">{{msg_texto}}</p>
    </div>
    <div class="boxload" v-if="spinner">
      <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <div class="card mt-3 p-3">
      <div class="row mb-3">
        <h1>Editar Formulario!</h1>
      </div>
    </div>
 
    <div class="card p-3">
      <div class="row">
        <div class="col-6 tirateima mb-2">
          <!-- <span>{{ rede1_nome }}</span> -->
        </div>
      </div>
    </div>
    <div class="card mt-3 p-3">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="form-group">
            <label class="label_input" for="nome">Nome</label>
            <input
              type="text"
              v-model="form_dados.nome"
              class="form-control"
              id="nome"
              placeholder="Nome"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label class="label_input" for="telefone">Telefone</label>
            <the-mask
              v-model="form_dados.telefone"
              placeholder="Telefone"
              class="form-control"
              :mask="['(##) ####-####', '(##) #####-####']"
            />
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="form-group">
            <label class="label_input" for="email">E-Mail</label>
            <input
              type="email"
               v-model="form_dados.email"
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
              <input type="date" name="" id="" class="form-control" v-model="form_dados.dn">
              
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-6 mt-5">
          <div class="form-group">
            <label class="label_input" for="exampleInputEmail1">Sexo</label>
            <div class="d-flex">
              <div class="form-check_personal">
                <input
                  class="form-check-input"
                  type="radio"
                  name="sexo"
                  id="sx1"
                  value="M"
                  v-model="form_dados.sexo"
                />
                <label class="custom-control-label label_box" for="sx1">Masculino</label>
              </div>
              <div class="form-check_personal">
                <input
                  class="form-check-input"
                  type="radio"
                  name="sexo"
                  id="sx2"
                  value="F"
                  v-model="form_dados.sexo"
                />
                <label class="custom-control-label label_box" for="sx2">Feminino</label>
              </div>
              <div class="form-check_personal">
                <input
                  class="form-check-input"
                  type="radio"
                  name="sexo"
                  id="sx3"
                  value="O"
                  v-model="form_dados.sexo"
                />
                <label class="custom-control-label label_box" for="sx3">Outros</label>
              </div>
            </div>
          </div>
          
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label class="label_input" for="tags">Tags</label>
            <input
              type="text"
              class="form-control"
              id="tags"
              placeholder="Tags"
              v-model="form_dados.tags"
              ref="tagfyInput"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="card mt-3 p-3">

      <div class="row justify-content-center">
       
        <div class="col-md-6">
          <div class="form-group d-flex flex-column">
            <div class="labelBox">
              <label class="label_input" for="select_1">UF</label>
            </div>
            <div class="selectBox">
              <SelectComp
              :lista="lista_uf"
              :chave="chaveUf"
              :objSelecionado=objUfSelecionado
              @receber_o_evento="ouvirUf"
            ></SelectComp>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group d-flex flex-column">
            <div class="labelBox">
              <label class="label_input" for="select_2">Municipios</label>
            </div>
            <div class="selectBox">
              <SelectComp
              :lista="lista_municipios"
              :chave="chaveMunic"
              :objSelecionado="objMunicSelecionado"
              @receber_o_evento="ouvirMunic"
            ></SelectComp>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card mt-3 p-3">
      <div class="row justify-contente-center">
        <div class="col-md-6">
          <div class="form-group d-flex flex-column">
            <label class="label_input" for="cep">CEP</label>
            <input
              type="text"
              class="form-control"
              id="cep"
              placeholder="cep"
              v-model="form_dados.cep"
              :keyup="cepMascara(form_dados.cep)"
            />
           </div>
        </div>
        <div class="col-md-6">
          <div class="form-group d-flex flex-column">
            <label class="label_input" for="bairro">Bairro</label>
            <input
             @blur="cepEvento"
             v-model="form_dados.bairro"
              type="text"
              class="form-control"
              id="bairro"
              placeholder="bairro"
            />
          </div>
        </div>
      </div>
      <div class="row justify-contente-center">
        <div class="col-md-6">
          <div class="form-group d-flex flex-column">
            <label class="label_input" for="endereco">Endereço</label>
            <input
              type="text"
              v-model="form_dados.endereco"
              class="form-control"
              id="endereco"
              placeholder="Endereço"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="card mt-3 p-3 d-none">
      <div class="row justify-contente-center">
        <div class="col-md-6">
          <div class="form-group d-flex flex-column">
            <label class="label_input" for="senha">Senha</label>
            <input
              type="password"
              class="form-control"
              id="senha"
              placeholder="Senha"
            />
          </div>
        </div>
      </div>  
    </div>
    
    <div class="card mt-3 p-3">
      <div class="row">
        <div class="col-12">
          <button type="submit" class="btn btn-success btn-lg w-100" @click="enviarFormulario">
            Atualizar
          </button>
          <button type="button" class="btn btn-outline-primary w-100">
            Cancelar
          </button>
        </div>
      </div>
    </div>

  </form>
</template>

<script>
import SelectComp from './SelectComp.vue'
import SelectMultNiveis from './SelectMultNiveis.vue'

import { Datetime } from 'vue-datetime'
import {TheMask} from 'vue-the-mask'

import 'vue-datetime/dist/vue-datetime.css'

import Tagify from '@yaireo/tagify'
import '@yaireo/tagify/dist/tagify.css'

//service json
import jsonService from '@/servicos/redesService';
import pessoaService from '@/servicos/pessoaService';
import auxiliarService from '@/servicos/auxiliarService';

export default {
  name: "EditPessoa",
  data() {
    return {
      baseUrlApi:'http://localhost:8787',
      girarSeta:false,
      inptPesquisa:'',
      cpf:"12312312312",
      form_dados:{
        id_campanha:0,
        id_pessoa:0,
        nome:'',
        telefone:'',
        email:'',
        dn:'',
        sexo:'',
        tags:[],
        uf:'',
        munic:'',
        cep:'',
        bairro:'',
        endereco:'',
        r1:0,
        r2:0,
        r3:0,
        r4:0,
        r5:0,
        r6:0,
      },
      rede1_nome:'',
      rede2_nome:'',
      rede3_nome:'',
      rede4_nome:'',
      rede5_nome:'',
      rede6_nome:'',
      lista_filtrar:['alfa','boris','alfafa','charlie','carlos','ubiratan','ubirajara','jaime','jacinto','zení','zacarias'],
      lista_uf:[],
      lista_municipios:[],
      objetoSelecionado:{},
      objUfSelecionado:null,
      objMunicSelecionado:null,
      chaveUf:"nome",
      chaveMunic:"des_munic",
      spinner:false,
      msg_alert:false,
      msg_texto:''
    };
  },
  async mounted(){
    /*carregar estados dinamicamente*/
    this.spinner =true;
    await this.apiCarregarUf();
    await this.carregarDadosPessoa();
    await this.apiCarregarMunicInit(this.form_dados.uf.uf);
    this.spinner =false;
    // this.carregarTagfly();
     const inputElem = document.querySelector('#tags');
    //const inputElem = this.$refs.tagfyInput;
    //colocar isso dentro de uma função
    let $vm = this;
      var tagify = new Tagify(inputElem, {
        whitelist: ['foo', 'bar', 'and baz', 'teste', 'carro', 'barco']
      });
          tagify.on("add", function(e) {
            $vm.form_dados.tags.push(e.detail.data);
          });
      
  },
  methods:{
    async carregarDadosPessoa(){
     console.log(' rotas parametro: ',this.$route.params.id);
     //implementar isso
     const id_pessoa = this.$route.params.id;
     const id_campanha = 10;
     const rs = await pessoaService.dadosPessoaService(id_pessoa,id_campanha);
      // console.log('retorno:',rs);
      const data = rs[0];
      console.log('info pessoa:',data);
      //set os dados
      this.form_dados.nome = data.nome;
      this.form_dados.email = data.email;
      this.form_dados.telefone = data.tel_1;
      this.form_dados.dn = data.data_nasc;
      this.form_dados.uf = data.uf;
      this.form_dados.endereco = data.endereco;
      this.form_dados.bairro = data.bairro;
      this.form_dados.munic = data.id_munic;
      this.form_dados.sexo = data.sexo;
      this.form_dados.cep = data.cep;
      this.form_dados.id_campanha = data.id_campanha;
      this.form_dados.id_pessoa = data.id_pessoa;
      this.rede1_nome = data.rede1;

    },
    carregarTagfly(){
    //não usar isso , ou fazer outra coisa
    const inputElem = document.querySelector('#tags');
    var tagify = new Tagify(inputElem, {
      whitelist: ['foo', 'bar', 'and baz', 'teste', 'carro', 'barco']
    });
      /*
      var inputElem = document.querySelector('#tags');
       var tagify = new Tagify(inputElem,{
         whitelist: this.mcuHeros,
         enforceWhitelist: true
       });

       tagify.on("add",function(e){
         console.log(e.detail.data);
       })
      */
    },
    async apiCarregarUf(){
      const rs = await auxiliarService.getJsonEstados();
      this.lista_uf = rs;

    },
    async apiCarregarMunicInit(uf){
      const rs = await auxiliarService.getJsonMunicipios(uf);
        this.lista_municipios = rs;
            this.lista_municipios.filter(item=>item.uf == this.form_dados.uf.uf)
              this.objMunicSelecionado = this.lista_municipios[0].des_munic;
    },
    apiCep(cep){
      //MOCADO
      const json = {
        cep:"70750768",
        city:"Brasília",
        neighborhood:"Asa Norte",
        service:"open-cep",
        state:"DF",
        street:"Quadra SHCGN 711 Bloco H"
      }
            console.log('json:',json);
            
            this.form_dados.bairro = json.neighborhood;
            this.form_dados.endereco = json.street;
              
              this.objUfSelecionado = json.state;
              // this.objMunicSelecionado = json.city;
              
              this.chaveUf="uf";
              this.chaveMunic="des_munic";
              if(this.lista_uf.length > 0){
                  let dado_uf_select = this.lista_uf.filter((e)=>e[this.chaveUf].toLowerCase().includes(json.state.toLowerCase()));
                  console.log('dado uf selecionado:',dado_uf_select);
                  this.form_dados.uf = dado_uf_select[0];
              }
              if(this.lista_municipios.length > 0){
                let dado_munic_select = this.lista_municipios.filter(item=>item.uf == this.form_dados.uf.uf);
                this.form_dados.munic = dado_munic_select[0];

              }
              
      //fim mocado      
    },
    cepMascara(cep_input){
      let digito = cep_input.replace(/\D/g, '');
       console.log('cep depois replace: ',digito);
        
        if(digito.length >= 5 ){  
          digito = digito.replace(/^(\d{5})(\d)/g, "$1-$2") 
        }

        if(digito.length >= 9 ){
          digito = digito.replace(/\D/g, '')
            digito = digito.substring(0,8); 
                digito = digito.replace(/^(\d{5})(\d{3})/g, "$1-$2")
                  this.form_dados.cep = digito;
                    //evento
                    console.log('info[cepmascara]:',digito);
                     this.apiCep(digito);
        }

 
        // return digito;
    },
    ouverEvento(msg){
      console.info('comp Pai:',msg);
      this.objetoSelecionado=msg;
    },
    async ouvirUf(dado){
      this.form_dados.uf = dado;
      console.log('ouvir uf');
      this.objMunicSelecionado = '';
      this.carregarMunicipioReativo();
    },
    ouvirMunic(dado){
      this.form_dados.munic = dado;
    },
    
    cepEvento(){
      console.log('evento de sair da campo CEP');
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
    },
    filtrarPorUfCep(uf){
      //this.lista.filter((item) =>item[ch].toLowerCase().includes(this.valPesquisa.toLowerCase()));
      let dado_uf_select = this.lista_uf.filter((e)=>e['uf'].toLowerCase().includes(uf));
      this.form_dados.uf = dado_uf_select;
    },
    filtrarPorMunicCep(munic){
      let dado_munic_select = this.lista_municipios.filter((e)=>e['des_munic'].toLowerCase().includes(munic));
      this.form_dados.munic = dado_munic_select;
    },
    async login(){
      const arrBD =  await jsonService.loginService();
      console.log('[login ]',arrBD);
    },
    apiRedes(){
            let listaSalvaRedes = localStorage.getItem('lista_redes1');
            if(listaSalvaRedes == null){
                fetch(`http://localhost:8282/l_redes`)
                .then(res => res.json())
                .then(json => {
                    console.log('json:',json)
                        this.listaRedes = json;
                            this.listarPesquisavel = json;
                            this.listarTeste = json;
                                localStorage.setItem('lista_redes1',JSON.stringify(this.listarTeste));
                                this.construirPaginacao();
                })
                .catch((error)=>{
                    console.error(error);
                })
            }else{
                // const json = JSON.parse(listaSalvaRedes);
                //     this.listaRedes = json;
                //     this.listarPesquisavel = json;
                //     this.listarTeste = json;
                //     this.construirPaginacao();
            }

        },
    enviarFormulario(e){
      e.preventDefault();
      this.spinner =true;
      //service
      const retorno = pessoaService.atualizarService(this.form_dados);
      retorno.then((data)=>{
        this.spinner =false;
        console.log('data promise',data);
          this.msg_texto = data.msg;
            this.msg_alert=true;
              setTimeout(()=>{
                this.msg_alert=false;
              },3000);
      });
    },
    async carregarMunicipioReativo(){
      const rs = await auxiliarService.getJsonMunicipios(this.form_dados.uf.uf);
      this.lista_municipios = rs;
      console.log('municipios dentro do metodo',this.lista_municipios);
      this.lista_municipios.filter(item=>item.uf == this.form_dados.uf.uf)
      console.log('x6');
    }    
  },
  filters:{},
  watch:{},
  computed:{
    listaFiltrada(){
      console.log('chegou aqui!');
      return this.lista_filtrar.filter(item=>
        item.toLowerCase().includes(this.inptPesquisa.toLowerCase())
      )
    }
  },
  components: {TheMask,datetime: Datetime,SelectComp,SelectMultNiveis}
};
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
/*evento de aparecer*/
.boxload{
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vw;
  background: #58585856;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999999;
}

.msg_alert{
    border: 1px solid #d7d7d7;
    border-radius: 8px;
    color: #f3f3f3;
    padding: 7px 16px;
    text-align: left;
    width: 25vw;
    box-shadow: 4px 1px 11px 3px #ccc;
    position: fixed;
    z-index: 9;
}
.msg_alert span{
    position: absolute;
    left: 94%;
    top: 0;
    font-size: 24px;
    background-color: #c3c3c300;
    color: #ffffff;
}
.msg_info{
  background: #0bd80b;
    
}

.text-primary{
  width: 25% !important;
  height: 25% !important;
}
.fade-1-enter-active, .fade-1-leave-active {
  transition: opacity 0.5s;
}
.fade-1-enter, .fade-1-leave-to {
  opacity: 0;
}
.fade-2-enter, .fade-2-leave-to {
  opacity: 0;
}
.fade-3-enter, .fade-3-leave-to {
  opacity: 0;
}
.fade-4-enter, .fade-4-leave-to {
  opacity: 0;
}
.fade-5-enter, .fade-5-leave-to {
  opacity: 0;
}
.fade-6-enter, .fade-6-leave-to {
  opacity: 0;
}

/*fim evento aparecer*/ 

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
  cursor: pointer;
}
/* barra rolagem */
.listBox{
  max-height: 250px;
	overflow-y: auto;
	padding-right: 7px;
  cursor: pointer;

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
  color: #585858;
  /*font-size: 2em;*/
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
/* labels check*/
.form-check_personal input{
  visibility: hidden;
}


.form-check_personal{
  position: relative;
}
.label_box{
  border:1px solid #c3c3c3;
  width: 8vw;
  height: 8vw;
  padding: 16px;
  border-radius: 8px;
  transition: .5s;
  cursor: pointer;
}
.form-check_personal input:checked + .label_box{
  border: 1px solid rgb(29, 29, 29);
  box-shadow: 7px 7px 4px #adadad, 8px 8px 10px #f0f0f0;
  color: #585858;
}
/* labels check*/
.tirateima{
  /* background-color: rgba(29, 226, 29, 0.164); */
  /* border: 1px solid red; */
}
.col-sub-redes{
  margin-right: 1vw;
}
</style>
