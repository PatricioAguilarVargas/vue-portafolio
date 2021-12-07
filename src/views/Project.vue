<template>
  <div>
    <h1>Git Projects</h1>
      <div class="p-grid nested-grid">
      <div class="p-col-12 p-sm-12 p-md-3 p-fluid">
        <Card>
          <template #header>
            <a :href="`${user.html_url}`">
              <img :src="`${user.avatar_url}`" style="height: 20rem;"/>
            </a>
          </template>
          <template #title>
            {{ user.name }}
          </template>
          <template #subtitle>
            {{ user.login }}
          </template>
          <template #content>
            <p>{{ user.bio }}</p>
          </template>
        </Card>
      </div>
      <div class="p-col-12 p-sm-12 p-md-9 p-fluid">
        <div class="p-grid">
          <div
            v-for="repo in repos"
            :key="repo.id"
            class="p-col-12 p-sm-12 p-md-12 p-fluid"
          >
            <Panel
              :header="'Nombre: ' + repo.name"
              :toggleable="true"
              :collapsed="false"
              style="margin-bottom: 1rem"
            >
              <template #icons>
                <button class="p-link p-mr-2" @click="toggle"></button>
              </template>
             
              <p>{{ repo.description }}</p>

              <Divider align="center" class="custom-divider">
                <div class="p-d-inline-flex p-ai-center">
                  <i class="pi pi-code p-mr-2"></i>
                  <b>Tecnologías</b>
                </div>
              </Divider>
              <div class="p-d-flex p-ai-center p-flex-column p-flex-sm-row">
                <Chip
                  v-for="(topic, index) in repo.topics"
                  :key="index"
                  :label="topic"
                  class="p-mr-2 p-mb-2 custom-chip"
                />
              </div>
              <Divider align="center" class="custom-divider">
                <div class="p-d-inline-flex p-ai-center">
                  <i class="pi pi-briefcase p-mr-2"></i>
                  <b>Códigos</b>
                </div>
              </Divider>
              <div class="p-grid">
                <div class="p-col-12 p-sm-12 p-fluid" :class="repo.homepage && 'p-md-6' || 'p-md-12'">
                  <a :href="`${repo.html_url}`" target="_blank" class="p-button p-component p-button-secondary"> 
                    <span class="pi pi-github p-button-icon p-button-icon-right"></span>
                    <span class="p-button-label">Git</span>
                  </a>
                </div>
                <div class="p-col-12 p-sm-12 p-md-6 p-fluid"  v-if="repo.homepage">
                 <a :href="`${repo.homepage}`" target="_blank" class="p-button p-component p-button-secondary"> 
                    <span class="pi pi-external-link p-button-icon p-button-icon-right"></span>
                    <span class="p-button-label">Sitio Web</span>
                  </a>
                </div>
              </div>
            </Panel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  async setup() {
    const user = ref(null);
    const repos = ref([])
    user.value = await fetch('https://api.github.com/users/PatricioAguilarVargas').then(res => res.json()); 
    repos.value = await fetch(`${user.value.repos_url}`).then(res => res.json());
    return { user, repos };
  },
};
</script>
<style lang="scss" scoped>
.p-chip.custom-chip {
  background: var(--primary-color);
  color: var(--primary-color-text);
}

.p-divider.custom-divider {
  border-bottom: 0.5px solid var(--text-color);
}
</style>
