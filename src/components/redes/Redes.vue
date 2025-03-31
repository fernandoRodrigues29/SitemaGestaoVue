<template>
  <div>
    <div class="container-fluid py-4">

        <div class="row">
            <div class="col-12">
                <div class="card my-4">
                    <div class="card-body px-0 pb-2">
                        <div class="row justify-content-end p-3">
                            <div class="col-md-4 align-self-end pr-2 mr-2">
                                <div class="d-flex justify-content-between aling">
                                    <div class="input-group input-group-outline formulario_pesquisa">
                                        <input type="text" placeholder="pesquisar" @keyup="pesquisa()" v-model="campo_pesquisar" id="inpt_pesquisar" class="form-control">
                                    </div>
                                    <div class="input-group input-group-outline align-items-stretch">
                                        <button class="btn btn-success" @click="pesquisa()">pesquisa</button>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="table-responsive p-0">
                            <div class="loadDiv" :class="{'bg-full-display':loadInfo,'bg-light-grey':loadInfo,'ativo':loadInfo  }">
                                <div class="spinner-grow text-success " role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </div>
                            <table class="table align-items-center mb-0">
                                <thead>
                                    <tr>
                                    <th class="text-start text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Pessoa</th>
                                    <th class="text-start text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Whatsapp</th>
                                    <th class="text-start text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2" >N2</th>
                                    <th class="text-start text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2" >N3</th>
                                    <th class="text-start text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2" >N4</th>
                                    <th class="text-start text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2" >N5</th>
                                    <th class="text-start text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2" >N6</th>
                                    <th class="text-start text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2" >N7</th>
                                    <th class="text-start text-uppercase text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Editar</th>
                                    <th class="text-start text-uppercase text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Excluir</th>
                                    <th class="text-secondary opacity-7"></th>
                                    </tr>
                                </thead>
                                <tbody v-if="gerarPaginacao.length > 0">
                                    
                                        <tr v-for="dados in gerarPaginacao" :key="dados.id">
                                            <td>
                                                <div class="d-flex px-2 py-1">
                                                <div>
                                                    <img src="/assets/img/team-2.jpg" class="avatar avatar-sm me-3 border-radius-lg" alt="user1">
                                                </div>
                                                <div class="d-flex flex-column justify-content-start">
                                                    <h6 class="mb-0 text-sm text-start">{{ dados.nome }}</h6>
                                                    <p class="text-xs text-secondary mb-0 text-start">john@creative-tim.com</p>
                                                </div>
                                                </div>
                                            </td>
                                            <td >
                                                <div class="d-flex px-2 py-1">
                                                    <span class="badge text-bg-primary">{{dados.tel_1}}</span>
                                                </div>
                                            </td>
                                            <td :title="1+' - '+dados.id_pessoa">
                                                <div class="d-flex px-2 py-1 cursor-redes" >
                                                    <span  @click="apiRedesV2(1,rede_p,dados.id_pessoa,10)" class="badge text-bg-primary">  {{dados.n1}}</span>
                                                </div>
                                            </td>
                                            <td :title="2+' - '+dados.id_pessoa">
                                                <div class="d-flex px-2 py-1 cursor-redes">
                                                    <span @click="apiRedesV2(2,rede_p,dados.id_pessoa,10)" class="badge text-bg-primary">{{dados.n2}}</span>
                                                </div>
                                            </td>
                                            <td :title="3+' - '+dados.id_pessoa">
                                                <div class="d-flex px-2 py-1 cursor-redes">
                                                    <span @click="apiRedesV2(3,rede_p,dados.id_pessoa,10)" class="badge text-bg-primary">{{dados.n3}}</span>
                                                </div>
                                            </td>
                                            <td :title="4+' - '+dados.id_pessoa">
                                                <div class="d-flex px-2 py-1 cursor-redes">
                                                    <span @click="apiRedesV2(4,rede_p,dados.id_pessoa,10)" class="badge text-bg-primary">{{dados.n4}}</span>
                                                </div>
                                            </td>
                                            <td :title="5+' - '+dados.id_pessoa">
                                                <div class="d-flex px-2 py-1 cursor-redes">
                                                    <span @click="apiRedesV2(5,rede_p,dados.id_pessoa,10)"  class="badge text-bg-primary">{{dados.n5}}</span>
                                                </div>
                                            </td>
                                            <td :title="6+' - '+dados.id_pessoa">
                                                <div class="d-flex px-2 py-1 cursor-redes">
                                                    <span @click="apiRedesV2(6,rede_p,dados.id_pessoa,10)"  class="badge text-bg-primary">{{dados.n6}}</span>
                                                </div>
                                            </td>
                                            <td title="esse eu um tooltip">
                                                <!--:to="{ name: 'Item', params: { id: data.item.id }}"-->
                                                <!-- to="editar_pessoa/dados.id"-->
                                                <div class="d-flex px-2 py-1">
                                                    <router-link class="btn btn-success" :to="{ name:'edtpessoa',params: {id:`${dados.id_pessoa}`}}">
                                                        Editar
                                                    </router-link>
                                                    <!-- <button type="button" class="btn btn-success">Editar</button> -->
                                                </div>
                                            </td>
                                            <td>
                                                <div class="d-flex px-2 py-1">
                                                    <button type="button" class="btn btn-danger">Excluir</button>
                                                </div>
                                            </td>
                                        </tr>
                                </tbody>
                                
                                    <tbody v-if="gerarPaginacao.length == 0">
                                        <tr>
                                            <td>
                                                <h3>Tabela Vazia</h3>
                                            </td>
                                        </tr>
                                    </tbody>    
                            </table>
                        </div>
                        
                        <div class="row">
                            <div class="col-12">
                                <hr>
                                <nav aria-label="...">
                                    <ul class="pagination">
                                        <li class="page-item">
                                            <a class="page-link btn-success" href="#" tabindex="-1" @click="navegar((pgAtual-1))">
                                                &#8656;
                                            </a>
                                        </li>
                                        <li class="page-item" :class="{'active': pb ==  (pgAtual+1)}" v-for="(pb,index) in btnsPaginacao" :key="index" @click="navegar(index)"><a class="page-link" href="#">{{ pb }}</a></li>
                                        <li class="page-item">
                                            <a class="page-link btn-success" href="#" @click="navegar((pgAtual+1))">
                                                &#8658;
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </div>
  </div>
</template>

<script>
import redesService from '@/servicos/redesService';
export default {
name:"Redes",
    data(){
        return{
            listaRedes:[],
            listarPesquisavel:[],
            listarTeste:[],
            pgAtual:0,
            itemPorPagina:11,
            btnsPaginacao:0,
            campo_pesquisar:'',
            loadInfo:false
        }
    }, 
    props: ['rede_p', 'nivel_p'], 
    mounted(){
        this.apiRedes();
    },
    beforeRouteEnter(to,from,next){
        next((vm)=>{
            console.log('teste de rotas');
            localStorage.removeItem('lista_redes1');
           
        })
    },
    methods:{
        pesquisa(){
            // const valor = document.querySelector('#inpt_pesquisar').value;
                this.listaRedes =  this.listaRedes
            //fazer isso amanhã
                    let itens_filtrados = this.listaRedes.filter((item) =>item['nome'].toLowerCase().includes(this.campo_pesquisar.toLowerCase()));
                        this.pgAtual = 0;
                            this.listarTeste = itens_filtrados;
                                this.listarPesquisavel = itens_filtrados;
                                this.construirPaginacao();
                    
        },
        construirPaginacao(){
            //lista botoes paginação
          
            let paginas = this.listarPesquisavel.length/this.itemPorPagina;
            console.log('paginas bruto:',paginas);
            let paginas_p = Math.round(paginas);
            console.log('paginas processadas:',paginas_p);
                    this.btnsPaginacao = paginas_p;
                    this.loadInfo=false;
        },
       async apiRedes(){
        this.loadInfo=true;
            let listaSalvaRedes =  localStorage.getItem('lista_redes1');
            console.log('lista:',this.listarPesquisavel);
            if(listaSalvaRedes == null){
                this.listaRedes = await redesService.getJsonData();
                    this.listarPesquisavel = this.listaRedes;
                        this.listarLocalStorage = this.listaRedes;
                            localStorage.setItem('lista_redes1',JSON.stringify(this.listarLocalStorage));
                                this.construirPaginacao();
            }else{
                
                const json = JSON.parse(listaSalvaRedes);
                    this.listaRedes = json;
                    this.listarPesquisavel = json;
                    this.listarTeste = json;
                    this.construirPaginacao();
            }

        },
        async apiRedesV2(nivel,rede,id,campanha){
                console.log('apiredesv2[nivel]',nivel);
                console.log('apiredesv2[rede]',rede);
                console.log('apiredesv2[id]',id);
                console.log('apiredesv2[campanha]',campanha);
                this.loadInfo=true;
                    let retorno_json_r2;
                        //let rede = this.posicao_p;
                    if(nivel == 1){
                        retorno_json_r2 = await redesService.getJsonDataRedesGeral(rede,nivel,id);
                        if(rede == 1){
                         rede=  parseInt(rede)+1;
                        } 
                        this.$router.push({path:`/redes/${rede}/${nivel}`});
                       
                    }
                    if(nivel == 2){
                        retorno_json_r2 = await redesService.getJsonDataRedesGeral(rede,nivel,id);
                        if(rede == 2){
                             rede=  parseInt(rede)+1;
                        }
                        this.$router.push({path:`/redes/${rede}/${nivel}`});
                    }
                    if(nivel == 3){
                        retorno_json_r2 = await redesService.getJsonDataRedesGeral(rede,nivel,id);
                        if(rede == 3){
                            rede=  parseInt(rede)+1;
                        }
                        this.$router.push({path:`/redes/${rede}/${nivel}`});
                    }
                    if(nivel == 4){
                        retorno_json_r2 = await redesService.getJsonDataRedesGeral(rede,nivel,id);
                        if(rede == 4){
                            rede=  parseInt(rede)+1;
                        }
                        this.$router.push({path:`/redes/${rede}/${nivel}`});
                    }
                    if(nivel == 5){
                        retorno_json_r2 = await redesService.getJsonDataRedesGeral(rede,nivel,id);
                        if(rede == 5){
                            rede=  parseInt(rede)+1;
                        }
                        this.$router.push({path:`/redes/${rede}/${nivel}`});
                    }
                    if(nivel == 6){
                        retorno_json_r2 = await redesService.getJsonDataRedesGeral(rede,nivel,id);
                        if(rede == 6){
                            rede=  parseInt(rede)+1;
                        }
                        this.$router.push({path:`/redes/${rede}/${nivel}`});
                    }
                    if(nivel == 7){
                        retorno_json_r2 = await redesService.getJsonDataRedesGeral(rede,nivel,id);
                        this.$router.push({path:`/redes/${rede}/${nivel}`});
                    }

                    console.log('lista a redes2 :',nivel,retorno_json_r2);
                        this.listarPesquisavel = retorno_json_r2.data;
                            this.listarLocalStorage = retorno_json_r2.data;
                                localStorage.setItem('lista_redes1',JSON.stringify(this.listarLocalStorage));
                                    this.construirPaginacao();
            
        },
        navegar(i){
            this.pgAtual = i;
            // this.gerarPaginacao();
        }
        // ,navegarSubredes($id,$campanha){}
    },
    computed:{
        gerarPaginacao(){
            const arr = [];
            let inicio = this.pgAtual*this.itemPorPagina;
            let limite = (this.itemPorPagina+inicio);
            if(limite > this.listarPesquisavel.length){

                limite=this.listarPesquisavel.length;
            }
                for (let index = inicio; index < limite; index++) {
                    arr.push(this.listarPesquisavel[index]);
                }
                    return arr;
        },
    }
}
</script>

<style>
    .formulario_pesquisa{
        height: 2vw;
        margin-right: 1vw;
    }
    .active.a{
        color:#fff !important;
    }
    .cursor-redes{
        cursor: pointer;
    }
    .loadDiv{
        display: none;
    }
    .loadDiv.ativo{
        display: block;
    }
    .bg-light-grey{
        background-color: #cfcfcf46;
        z-index: 99;
    }
    .bg-full-display{
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 25%;
    }
</style>