<template>
  <div>
    <h1>controle de teste</h1>
    <div class="card mt-3 p-3">
      <div class="row">
        <div class="col-6">
          <SelectComp :lista=lista_filtrar @receber_o_evento="ouverEvento"></SelectComp>
        </div>
        <div class="col-6">
            <span>Retorno:</span>

            {{retorno_msm}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SelectComp from './SelectComp.vue' 
export default {
    name:"conteudo",
    data(){
        return {
            retorno_msm:'',
            lista_filtrar:['alfa','boris','alfafa','charlie','carlos','ubiratan','ubirajara','jaime','jacinto','zení','zacarias']
        }
    },
    methods:{
        ouverEvento(msg){
            console.info('comp Pai:',msg);
            this.retorno_msm = msg;
        },
    },
    components: {SelectComp}
}
</script>

<style>

</style>