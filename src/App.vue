<template>
  <div>
    <Menu></Menu>
    <router-view v-slot="{ Component }">
      <Message v-if="error" severity="error">{{ error }}</Message>
      <template v-if="Component">
         <transition name="fade" mode="out-in">
          <keep-alive>
            <Suspense timeout="0">
              <template #default>
                <component :is="Component"></component>
              </template>
              <template #fallback>
                <div>
                  <h5>Cargando...</h5>
                  <ProgressSpinner style="width:50px;height:50px" strokeWidth="4"  animationDuration=".5s"/>
                </div>
              </template>
            </Suspense>
          </keep-alive>
        </transition>
      </template>
    </router-view>
  </div>
</template>

<script>
import Menu from '@/components/common/Menu'
import {onErrorCaptured, ref} from 'vue'
export default {
  components: { Menu },
  setup(){
    const error =  ref()
    onErrorCaptured(err => error.value = err)
  }
}
</script>

<style lang="scss">

html, body {
  background-color: #e0e0e0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
</style>
