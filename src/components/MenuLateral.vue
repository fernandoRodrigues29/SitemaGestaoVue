<template>
    <aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
      <div class="sidenav-header">
        <i class="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
        <a class="navbar-brand m-0" href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard " target="_blank">
          <img src="/assets/img/logos/icon-2.png" class="navbar-brand-img h-100" alt="main_logo">
          <span class="ms-1 font-weight-bold text-white">Base Politica</span>
        </a>
      </div>
      <hr class="horizontal light mt-0 mb-2">
      <div class="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/dashboard" class="nav-link text-white " >
              <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i class="material-icons opacity-10">dashboard</i>
              </div>
              <span class="nav-link-text ms-1">Dashboard</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link  to="/redes/1/1" class="nav-link text-white " >
              <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i class="material-icons opacity-10">group</i>
              </div>
              <span class="nav-link-text ms-1">Redes</span>
            </router-link >
          </li>
          <li class="nav-item d-none">
            <router-link class="nav-link text-white " to="/pessoa">
              <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i class="material-icons opacity-10">person</i>
              </div>
              <span class="nav-link-text ms-1">Filiado</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white " to="/cadastar_pessoa">
              <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i class="material-icons opacity-10">person</i>
              </div>
              <span class="nav-link-text ms-1">Liderança</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white " to="#">
              <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i class="material-icons opacity-10">assignment</i>
              </div>
              <span class="nav-link-text ms-1">Sign Up</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="sidenav-footer position-absolute w-100 bottom-0 ">
        <div class="mx-3">
          <a class="btn bg-gradient-primary w-100" href="#" @click="sair()" type="button">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i class="material-icons opacity-10">logout</i>
              </div>
              <span class="nav-link-text ms-1">Sign out</span>
          </a>
        </div>
      </div>
    </aside>
  </template>
  
  <script>
  export default {
      methods:{
        sair(){
          localStorage.removeItem('token_auth');
          localStorage.removeItem('usuario_credenciais');
          localStorage.removeItem('lista_redes1');
          this.$router.push('/login');
        }
      }
  }
  </script>
  
  <style>
  
  </style>