<template>
  <main class="container-fluid">
    <div class="row">
      <div class="col-md-2 d-none d-md-block bg-dark text-light sidebar">
        <Login />

        <button class="btn" data-bs-target="#classifiedsCanvas" data-bs-toggle="offcanvas" v-if="account.id">
          <span class="text-success lighten-30 selectable text-uppercase">
            Add a Listing
          </span>
        </button>
        <br>

        <router-link :to="{
        name: 'Home',}">
          <button class="btn">
            <span class="text-success lighten-30 selectable text-uppercase">
              Home
            </span>
          </button>
        </router-link>


        <br>
        <button class="btn">
          <router-link :to="{name: 'Cars'}">
            <span class="text-success lighten-30 selectable text-uppercase">
              Cars
            </span>
          </router-link>
        </button>


        <br>
        <button class="btn">
          <span class="text-success lighten-30 selectable text-uppercase">
            Jobs
          </span>
        </button>
        <br>
        <button class="btn">
          <span class="text-success lighten-30 selectable text-uppercase">
            Houses
          </span>
        </button>


      </div>
      <div class="col-md-10 main-content">
        <router-view />
      </div>
    </div>
  </main>


  <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
    id="classifiedsCanvas" aria-labelledby="classifiedsCanvasLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="classifiedsCanvasLabel">Add your Listing</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <ClassifiedForm />
    </div>
  </div>




</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import ClassifiedForm from './components/ClassifiedForm.vue'
import Login from './components/Login.vue'
import Navbar from './components/Navbar.vue'


export default {
  setup() {
    return {
      appState: computed(() => AppState),
      account: computed(() => AppState.account),
      cars: computed(() => AppState.cars),
      jobs: computed(() => AppState.jobs),
      houses: computed(() => AppState.houses),
    }
  },
  components: { Navbar, Login, ClassifiedForm }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

.sidebar {
  height: 100vh;
}

.main-content {
  height: 100vh;
  overflow-y: auto;
}
</style>
