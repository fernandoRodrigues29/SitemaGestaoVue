<template>
  <div>
    <MenuLateral />
    <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
      <Barra />
      <div class="container-fluid py-4">
        <router-view></router-view>
        <div class="row d-none">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="card mt-4">
              <div class="card-header p-3">
                <h5 class="mb-0">Alerts</h5>
              </div>
              <div class="card-body p-3 pb-0">
                <div class="alert alert-primary alert-dismissible text-white" role="alert">
                  <span class="text-sm">A simple primary alert with <a href="javascript:;" class="alert-link text-white">an example link</a>. Give it a click if you like.</span>
                  <button type="button" class="btn-close text-lg py-3 opacity-10" data-bs-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              </div>
            </div>
            <div class="card mt-4">
              <div class="card-header p-3">
                <h5 class="mb-0">Notifications</h5>
                <p class="text-sm mb-0">
                  Notifications on this page use Toasts from Bootstrap. Read more details <a href="https://getbootstrap.com/docs/5.0/components/toasts/" target="
            ">here</a>.
                </p>
              </div>
              <div class="card-body p-3">
                <div class="row">
                  <div class="col-lg-3 col-sm-6 col-12">
                    <button class="btn bg-gradient-success w-100 mb-0 toast-btn" type="button" data-target="successToast">Success</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="position-fixed bottom-1 end-1 z-index-2 d-none">
          <div class="toast fade hide p-2 bg-white" role="alert" aria-live="assertive" id="successToast" aria-atomic="true">
            <div class="toast-header border-0">
              <i class="material-icons text-success me-2">
          check
        </i>
              <span class="me-auto font-weight-bold">Material Dashboard </span>
              <small class="text-body">11 mins ago</small>
              <i class="fas fa-times text-md ms-3 cursor-pointer" data-bs-dismiss="toast" aria-label="Close"></i>
            </div>
            <hr class="horizontal dark m-0">
            <div class="toast-body">
              Hello, world! This is a notification message.
            </div>
          </div>
          <div class="toast fade hide p-2 mt-2 bg-gradient-info" role="alert" aria-live="assertive" id="infoToast" aria-atomic="true">
            <div class="toast-header bg-transparent border-0">
              <i class="material-icons text-white me-2">
          notifications
        </i>
              <span class="me-auto text-white font-weight-bold">Material Dashboard </span>
              <small class="text-white">11 mins ago</small>
              <i class="fas fa-times text-md text-white ms-3 cursor-pointer" data-bs-dismiss="toast" aria-label="Close"></i>
            </div>
            <hr class="horizontal light m-0">
            <div class="toast-body text-white">
              Hello, world! This is a notification message.
            </div>
          </div>
          <div class="toast fade hide p-2 mt-2 bg-white" role="alert" aria-live="assertive" id="warningToast" aria-atomic="true">
            <div class="toast-header border-0">
              <i class="material-icons text-warning me-2">
          travel_explore
        </i>
              <span class="me-auto font-weight-bold">Material Dashboard </span>
              <small class="text-body">11 mins ago</small>
              <i class="fas fa-times text-md ms-3 cursor-pointer" data-bs-dismiss="toast" aria-label="Close"></i>
            </div>
            <hr class="horizontal dark m-0">
            <div class="toast-body">
              Hello, world! This is a notification message.
            </div>
          </div>
          <div class="toast fade hide p-2 mt-2 bg-white" role="alert" aria-live="assertive" id="dangerToast" aria-atomic="true">
            <div class="toast-header border-0">
              <i class="material-icons text-danger me-2">
          campaign
        </i>
              <span class="me-auto text-gradient text-danger font-weight-bold">Material Dashboard </span>
              <small class="text-body">11 mins ago</small>
              <i class="fas fa-times text-md ms-3 cursor-pointer" data-bs-dismiss="toast" aria-label="Close"></i>
            </div>
            <hr class="horizontal dark m-0">
            <div class="toast-body">
              Hello, world! This is a notification message.
            </div>
          </div>
        </div>
        <Rodape />
      </div>
    </main>

  </div>
</template>

<script>
import MenuLateral from "@/components/MenuLateral.vue";
import Rodape from "@/components/Footer.vue";
import Barra from "@/components/NavBar.vue";

export default {
    components:{
      MenuLateral,
      Rodape,
      Barra
    }
}
</script>

<style>

</style>