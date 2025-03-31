<template>
      <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 mt-2 shadow-none border-radius-xl" id="navbarBlur" data-scroll="true">
        <div class="menu-flutuante" :class="{ativo:menu_mobile}">
          <div>Menu Flutuante </div>
          <button @click="menu_mobile= !menu_mobile"> X </button>
          <div class="linksBody">
            <ul class="lista_menu">
              <li>
                <router-link to="/dashboard" class="nav-link text-white item_lista" >
                  <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i class="material-icons opacity-10">dashboard</i>
                  </div>
                  <span class="nav-link-text ms-1">Dashboard</span>
                </router-link>
              </li>
              <li>
                <router-link  to="/redes/1/1" class="nav-link text-white  item_lista" >
                  <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i class="material-icons opacity-10">group</i>
                  </div>
                  <span class="nav-link-text ms-1">Redes</span>
                </router-link >
              </li>
              <li>
                <router-link class="nav-link text-white item_lista " to="/pessoa">
                  <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i class="material-icons opacity-10">person</i>
                  </div>
                  <span class="nav-link-text ms-1">Filiado</span>
                </router-link>
              </li>
              <li>
                <router-link class="nav-link text-white item_lista " to="/cadastar_pessoa">
                  <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i class="material-icons opacity-10">person</i>
                  </div>
                  <span class="nav-link-text ms-1">Liderança</span>
                </router-link>
              </li>
              <li @click="sair()">
                <router-link class="nav-link text-white item_lista " to="#">
                  <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                    <i class="material-icons opacity-10">assignment</i>
                  </div>
                  <span class="nav-link-text ms-1">Sign Up</span>
                </router-link>
              </li>
            </ul>

          </div>
        </div>
        <div class="container-fluid py-1 px-3">
          <!-- <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
              <li class="breadcrumb-item text-sm"><a class="opacity-5 text-dark" href="javascript:;">Pages</a></li>
              <li class="breadcrumb-item text-sm text-dark active" aria-current="page">Notifications</li>
            </ol>
            <h6 class="font-weight-bolder mb-0">Notifications</h6>
          </nav> -->
          <div class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
            <div class="ms-md-auto pe-md-3 d-flex align-items-center">
              <div class="input-group input-group-outline">
                <label class="form-label"></label>
                <input type="text" class="form-control" placeholder="nome/telefone">
              </div>
            </div>
            <ul class="navbar-nav  justify-content-end">
              <!--botão menu mobile-->
              <!--fim botão menu mobile-->
              <li class="nav-item d-flex align-items-center">
                <a href="#" class="btn btn-outline-primary btn-sm mb-0 me-3">
                  <!-- <i class="fa fa-user me-sm-1"></i> -->
                  <span class="d-sm-inline d-none"><i class="fa fa-search me-sm-1" style="font-size: 1.2rem;"></i></span>
                </a>
              </li>
              <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
                <a href="javascript:;" @click="menu_mobile= !menu_mobile" class="nav-link text-body p-0" id="iconNavbarSidenav">
                  <div class="sidenav-toggler-inner">
                    <i class="sidenav-toggler-line"></i>
                    <i class="sidenav-toggler-line"></i>
                    <i class="sidenav-toggler-line"></i>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
       
      </nav>
  </template>
  
  <script>
  export default {
     data(){
      return{
        menu_mobile:false,
        show_menu:false
      }
     } ,
     methods:{
      toggleMenu(){
        if(!this.menu_mobile){
          this.menu_mobile = true;
          setTimeout(()=>{
            this.show_menu = true;

          },50);
        }else{
          this.show_menu = false;
          setTimeout(()=>{
            this.show_menu = false
          },500);
        }
      },
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
    .lista_menu {
      list-style: none;
    }
   .menu-flutuante{
    position: fixed;
    top: 0;
    right: 0;
    width: 0;
    overflow: hidden;
    height: 100vh;
    background-color: cornflowerblue;
    transition: width .5s ease-in-out, opacity 0.3s;
    border: 1px solid #0000;
    z-index: 99999;
   }
   .menu-flutuante.ativo{
    /* width: 50vw !important; */
    width: 50vw !important;
   } 
   .menu-flutuante.visivel{
    /* width: 50vw !important; */
    width: 50vw !important;
   } 
   .item_lista{
    display: flex;
   }
  </style>