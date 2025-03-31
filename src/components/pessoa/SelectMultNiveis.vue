<template>
  <div>
    <div class="pesquisaBox">
        <input type="text" :placeholder="placeHolderProp" v-model="valorInput.label" @click="ativar()" class="form_estilizado">
        <ul :class="{'ativo':ativo}">
            <li :class="loadLi" v-if="filtarLista.length == 0">
                <div class="spinner-grow text-success" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </li>
            <li v-for="(item, index) in filtarLista" :key=index>
                <span @click="atualizarInput(item)">
                   {{ item[chave] }}
                </span>
            </li>
        </ul>
    </div>
  </div>

</template>

<script>
export default {
    name:'SelectMultNiveis',
    data(){
        return{
            valorInput:{
                valor:0,
                label:''
            },
            chaveArr:'valor',
            ativo:false
        }
    },
    props:['listaProp','labelProp','placeHolderProp','chave'],
    methods:{
        ativar(){
            this.ativo = !this.ativo;
        },
        atualizarInput(item){
            this.valorInput.valor = item.id;
            this.valorInput.label = item[this.chave];
            this.ativar();
            this.$emit("dados_selectMultNiveis", item);
        }
    },
    computed:{
        filtarLista(){
            const ch = this.chave;
            return this.listaProp.filter((item)=> item[ch].toLowerCase().includes(this.valorInput.label.toLowerCase()));
        }
    }
}
</script>

<style scoped>
    input{
        width: 100%;
        outline: none;
        font-size: 1.1rem;
        cursor:pointer;
        padding: 8px 16px !important;
      border: 1px solid #cccccc60;
      outline: none;
      border-radius: 4px;
      box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.161) 0px 0px 0px 1px;
    }
    .pesquisaBox{
        position: relative;
    }

    ul{
        position: absolute;
        left: 0;
        width: 100%;
        background: #fff;
        height: 0vh;
        overflow-y: scroll;
        list-style: none;
        transition: all .5s;
        z-index: 9999;
        position: relative;
    }
    ul.ativo{
        min-height: 30vh;
        transition: all .5s;
        box-shadow: 1px 2px 2px 2px #c3c3c3;
    }
    ul li{
        height: 5vh;
        cursor: pointer;
        transition: all .5s;
        text-align: left
    };
    .loadLi{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: -50%, -50%;
        transform: translate(-50%, -50%);
    }
    .form_estilizado{
      
  }

</style>