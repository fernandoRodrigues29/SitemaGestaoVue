<template>
  <div class="form_conteiner container-fluid">
    <div class="loadDiv" :class="{'bg-full-display':loadInfo,'bg-light-grey':loadInfo,'ativo':loadInfo  }">
      <div class="spinner-grow text-success " role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <!-- colocar um load para na hora de carregar -->
    <h1 class="center">Login</h1>
    <div class="inputBox">
      <input
        type="text"
        v-model="form_dados.usuario"
        placeholder="usuario"
        name="usuario"
      />
    </div>
    <div class="inputBox">
      <input
        type="password"
        v-model="form_dados.senha"
        placeholder="senha"
        name="senha"
      />
    </div>
    <div class="inputBox">
      <button @click="login()" class="btn btn-lg btn btn-info" value="login">
        Login
      </button>
    </div>
  </div>
</template>

<script>
import jsonService from "@/servicos/redesService";

export default {
  name: "login",
  data() {
    return {
      form_dados: {
        usuario: "",
        senha: "",
      },
      loadInfo:false
    };
  },
  methods: {
    async login() {
      this.loadInfo = true;
      const arrBD =  await jsonService.loginService();
      console.log('[login ]',arrBD);
      this.$router.push('/dashboard');
    },
  },
};
</script>

<style>
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
.form_conteiner {
  max-width: 25vw;
  margin-top: 20vw;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
