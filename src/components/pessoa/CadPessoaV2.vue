<template>
  <form>
    <div class="card mt-3 p-3">
      <div class="row mb-3">
        {{ form_dados }}
      </div>
    </div>
    <div class="card p-3">
      <div class="row">
        <div class="col-6 tirateima mb-2">
          <!-- {{rede1Valor}}  -->
          <SelectMultNiveis
           placeHolderProp="-- Redes 1 --"
           :listaProp="listaRedes1"
           @dados_selectMultNiveis="ouvirRede1"
           chave="nome" 
           />
        </div>
        <transition name="fade-1">
          <div class="col-6 tirateima mb-2" v-if="listaRedes2.length > 0 ">
            <SelectMultNiveis
             placeHolderProp="-- Redes 2 --"
             :listaProp="listaRedes2"
             @dados_selectMultNiveis="ouvirRede2"
             chave="nome" 
             />          
          </div>
          <div class="spinner-border text-primary" role="status" v-if="spinnerR1">
            <span class="visually-hidden">Loading...</span>
          </div>
        </transition>  
      </div>
      <div class="row">
        <transition name="fade-2">
          <div class="col-6 tirateima mb-2"  v-if="listaRedes3.length > 0 ">
            <SelectMultNiveis
             placeHolderProp="-- Redes 3 --"
             :listaProp="listaRedes3"
             @dados_selectMultNiveis="ouvirRede3"
             chave="nome" 
             />          
          </div>
          <div class="spinner-border text-primary" role="status" v-if="spinnerR2">
            <span class="visually-hidden">Loading...</span>
          </div>
        </transition>
        <transition name="fade-3">
          <div class="col-6 tirateima mb-2"  v-if="listaRedes4.length > 0 ">
            <SelectMultNiveis
             placeHolderProp="-- Redes 4 --"
             :listaProp="listaRedes4"
             @dados_selectMultNiveis="ouvirRede4"
             chave="nome" 
             />          
          </div>
          <div class="spinner-border text-primary" role="status" v-if="spinnerR3">
            <span class="visually-hidden">Loading...</span>
          </div>
        </transition>
      </div>
      <div class="row">
        <transition name="fade-4">
          <div class="col-md-6 tirateima mb-2"  v-if="listaRedes5.length > 0 ">
            <SelectMultNiveis
             placeHolderProp="-- Redes 5 --"
             :listaProp="listaRedes5"
             @dados_selectMultNiveis="ouvirRede5"
             chave="nome" 
             />
          </div>
          <div class="spinner-border text-primary" role="status" v-if="spinnerR4">
            <span class="visually-hidden">Loading...</span>
          </div>
        </transition>
        <transition name="fade-5">
          <div class="col-md-6 tirateima mb-2"  v-if="listaRedes6.length > 0 ">
            <SelectMultNiveis
             placeHolderProp="-- Redes 6 --"
             :listaProp="listaRedes6"
             @dados_selectMultNiveis="ouvirRede6"
             chave="nome" 
             />
          </div>
          <div class="spinner-border text-primary" role="status" v-if="spinnerR5">
            <span class="visually-hidden">Loading...</span>
          </div> 
        </transition>
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
          {{ form_dados.dn }}
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
              :lista="listarMunicipio"
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
            Cadastrar
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

export default {
  name: "cadV2",
  data() {
    return {
      baseUrlApi:'http://localhost:8787',
      girarSeta:false,
      inptPesquisa:'',
      cpf:"12312312312",
      form_dados:{
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
      lista_filtrar:['alfa','boris','alfafa','charlie','carlos','ubiratan','ubirajara','jaime','jacinto','zení','zacarias'],
      lista_uf:[{id:1,uf:'acre',sigla:'ac'},{id:2,uf:'goias',sigla:'go'},{id:3,uf:'mato grosso',sigla:'mt'},{id:4,uf:'mato grosso do sul',sigla:'ms'},{id:5,uf:'distrito federal',sigla:'df'}],
      lista_municipios:[{id:1,uf:1,munic:'rio branco'},{id:2,uf:2,munic:'goiania'},{id:3,uf:3,munic:'campo grande'},{id:4,uf:4,munic:'cuiabá'},{id:5,uf:5,munic:'brasilia'}],
      objetoSelecionado:{},
      objUfSelecionado:null,
      objMunicSelecionado:null,
      chaveUf:"uf",
      chaveMunic:"munic",
      listaRedes1:[],      
      listaRedes2:[],      
      listaRedes3:[],      
      listaRedes4:[],      
      listaRedes5:[],      
      listaRedes6:[],
      listaRedes7:[],
      rede1Valor:0,
      rede2Valor:0,
      rede3Valor:0,
      rede4Valor:0,
      rede5Valor:0,
      rede6Valor:0,
      spinnerR1:false,
      spinnerR2:false,
      spinnerR3:false,
      spinnerR4:false,
      spinnerR5:false,
      spinnerR6:false,
      spinnerR7:false
    };
  },
  mounted(){
    this.apiCarregarUf();
    // this.carregarTagfly();
     const inputElem = document.querySelector('#tags');
    //const inputElem = this.$refs.tagfyInput;
    //colocar isso dentro de uma função
    let $vm = this;
      var tagify = new Tagify(inputElem, {
        whitelist: ['foo', 'bar', 'and baz', 'teste', 'carro', 'barco']
      });
        console.log('o que ta aqui'.tagify);
          tagify.on("add", function(e) {
            console.log('tags input:',e.detail.data);
            $vm.form_dados.tags.push(e.detail.data);
              console.log('tags formdados',$vm.form_dados.tags)
          });
    //receber dados json
    this.loadRede1Inicial();      
  },
  methods:{
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
    apiCarregarUf(){
      console.log(`${this.baseUrlApi}/listar_uf`);  
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
            console.log('json:',json)
            
            this.form_dados.bairro = json.neighborhood;
            this.form_dados.endereco = json.street;
              
              this.objUfSelecionado = json.state;
              this.objMunicSelecionado = json.city;
              
              this.chaveUf="sigla";
              this.chaveMunic="munic";

              let dado_uf_select = this.lista_uf.filter((e)=>e['sigla'].toLowerCase().includes(json.state.toLowerCase()));
              console.log('dado uf selecionado:',dado_uf_select);
              this.form_dados.uf = dado_uf_select[0];
              let dado_munic_select = this.lista_municipios.filter(item=>item.uf == this.form_dados.uf.id);
              this.form_dados.munic = dado_munic_select[0];

      //fim mocado      
      
          // const api_cep = cep.replace(/[^0-9]/g,'');
          // console.log('enviar cep:',`https://brasilapi.com.br/api/cep/v1/${api_cep}`)

          // fetch(`https://brasilapi.com.br/api/cep/v1/${api_cep}`)
          // .then(res => res.json())
          // .then(json => {
          //   console.log('json:',json)
          //   debugger;
          //   this.form_dados.bairro = json.neighborhood;
          //   this.form_dados.endereco = json.street;
          //   //carregar CEP
          //   this.filtrarPorUfCep(json.uf);
          //   this.filtrarPorMunicCep(json.city);
          // })
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
    ouvirUf(dado){
      this.form_dados.uf = dado;
    },
    ouvirMunic(dado){
      this.form_dados.munic = dado;
    },
    async ouvirRede1(dado){
      this.rede1Valor = dado;
      this.form_dados.r1 = dado.id_pessoa;
        console.log('rede um ouvida',dado);  
          this.loadRede2(dado.id_pessoa);
    },
    ouvirRede2(dado){
      this.rede2Valor = dado;
      this.form_dados.r2 = dado.id_pessoa;
        this.loadRede3(dado.id_pessoa);
        // const lista = this.listaRedes3.filter((i)=>{
        //     return i['r2'] == dado.id
        //   });
        //     this.listaRedes3=lista;

    },
    ouvirRede3(dado){
      this.rede3Valor = dado;
      this.form_dados.r3 = dado.id_pessoa;
        this.loadRede4(dado.id_pessoa);
        // const lista = this.listaRedes4.filter((i)=>{
        //     return i['r3'] == dado.id
        //   });
        //     this.listaRedes4=lista;

    },
    ouvirRede4(dado){
      this.rede4Valor = dado;
      this.form_dados.r4 = dado.id_pessoa;
        this.loadRede5(dado.id_pessoa);
      // const lista = this.listaRedes5.filter((i)=>{
        //     return i['r4'] == dado.id
        //   });
        //     this.listaRedes5=lista;

    },
    ouvirRede5(dado){
      this.rede5Valor = dado;
      this.form_dados.r5 = dado.id_pessoa;
        this.loadRede6(dado.id_pessoa);
      // const lista = this.listaRedes6.filter((i)=>{
        //     return i['r5'] == dado.id
        //   });
        //     this.listaRedes6=lista;
    },
    ouvirRede6(dado){
      this.rede6Valor = dado;
      this.form_dados.r6 = dado.id_pessoa;
        this.loadRede7(dado.id_pessoa);
      // const lista = this.listaRedes7.filter((i)=>{
        //     return i['r6'] == dado.id
        //   });
        //     this.listaRedes7=lista;
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
      let dado_munic_select = this.lista_municipios.filter((e)=>e['munic'].toLowerCase().includes(munic));
      this.form_dados.munic = dado_munic_select;
    },
    async login(){
      const arrBD =  await jsonService.loginService();
      console.log('[login ]',arrBD);
    },
    async loadRede1Inicial(){
      try {
      // await this.login();
        //chamar serviço
        const arrBD =  await jsonService.getJsonData();
          console.table('[loadJsonTeste]dados chageado',arrBD);
            arrBD.forEach(element => {
              this.listaRedes1.push(element);
            });
          // arrBD.forEach(element => {
          //   if(element.r1 == 0){
          //     this.listaRedes1.push(element);
          //   }
            
          //   if(element.r1 !== 0 && element.r2 == 0 ){
          //     this.listaRedes2.push(element);
          //     console.log('lista 2:',this.listaRedes2);
          //   }

          //   if(element.r2 !== 0 && element.r3 == 0 ){
          //     this.listaRedes3.push(element);
          //   }

          //   if(element.r3 !== 0 && element.r4 == 0 ){
          //     this.listaRedes4.push(element);
          //   }

          //   if(element.r4 !== 0 && element.r5 == 0 ){
          //     this.listaRedes5.push(element);
          //   }

          //   if(element.r5 !== 0 && element.r6 == 0 ){
          //     this.listaRedes6.push(element);
          //   }

          //   if(element.r6 !== 0 ){
          //     this.listaRedes7.push(element);
          //   }

          // });
 
      } catch (error) {
        console.error('Error no componente,[loadJsonTeste]',error);
      }
    },
    async loadRede2(id){
      try {
        //spinner
        this.spinnerR1=true;
        //chamar serviço
        const arrBD =  await jsonService.getJsonDataR2(id);
          console.table('[loadRede2]dados chageado',arrBD);
            arrBD.forEach(element =>  this.listaRedes2.push(element));
              //spinner
              this.spinnerR1=false;
      } catch (error) {
        console.info('Error no componente,[loadRede2]',error);
      }
    },
    async loadRede3(id){
      try {
        this.spinnerR2=true;
        //chamar serviço
        const arrBD =  await jsonService.getJsonDataR3(id);
          console.table('[loadRede3]dados chageado',arrBD);
            arrBD.forEach(element =>  this.listaRedes3.push(element));
            this.spinnerR2=false;
      } catch (error) {
        console.info('Error no componente,[loadRede2]',error);
      }
    },
    async loadRede4(id){
      try {
        this.spinnerR3=true;
        //chamar serviço
        const arrBD =  await jsonService.getJsonDataR4(id);
          console.table('[loadRede4]dados chageado',arrBD);
            arrBD.forEach(element =>  this.listaRedes4.push(element));
            this.spinnerR3=false;
      } catch (error) {
        console.info('Error no componente,[loadRede2]',error);
      }
    },
    async loadRede5(id){
      try {
        this.spinnerR4=true;
        //chamar serviço
        const arrBD =  await jsonService.getJsonDataR5(id);
          console.table('[loadRede5]dados chageado',arrBD);
            arrBD.forEach(element =>  this.listaRedes5.push(element));
            this.spinnerR4=false;
      } catch (error) {
        console.info('Error no componente,[loadRede2]',error);
      }
    },
    async loadRede6(id){
      try {
        this.spinnerR5=true;
        //chamar serviço
        const arrBD =  await jsonService.getJsonDataR6(id);
          console.table('[loadRede6]dados chageado',arrBD);
            arrBD.forEach(element =>  this.listaRedes6.push(element));
            this.spinnerR5=false;
      } catch (error) {
        console.info('Error no componente,[loadRede2]',error);
      }
    },
    async loadRede7(id){
      try {
        //chamar serviço
        
      } catch (error) {
        console.info('Error no componente,[loadRede2]',error);
      }
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
      //service
      pessoaService.cadastrarService(this.form_dados)
    }    
  },
  filters:{
    // mascara_cep:(valor)=>{
    //   valor.replace(/^\d/g, "") 
    //   let digito = valor
    //     if(digito.length >= 5 ){  
    //       digito = digito.replace(/^(\d{5})(\d)/g, "$1-$2") 
    //     } 
    //     if(digito.length >= 8 ){  
    //       digito = digito.replace(/^(\d{5})(\d{3})/g, "$1-$2") 
    //     } 
    //     return digito
    //   }
  },
  watch:{
    //  'form_dados.cep': function(velho,novo){
    //    let digito = novo
    //     if(digito.length <= 9){
    //       digito = digito.replace(/^(\d{5})(\d{3})/g, "$1-$2")
    //     }else{
    //       digito = velho
    //      this.apiCep(digito);
    //     } 
    //       this.form_dados.cep = digito
    //  }
  },
  computed:{
    listaFiltrada(){
      return this.lista_filtrar.filter(item=>
        item.toLowerCase().includes(this.inptPesquisa.toLowerCase())
      )
    },
    listarMunicipio(){
      return this.lista_municipios.filter(item=>item.uf == this.form_dados.uf.id)
    }
  },
  components: {TheMask,datetime: Datetime,SelectComp,SelectMultNiveis}
};
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
/*evento de aparecer*/
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
