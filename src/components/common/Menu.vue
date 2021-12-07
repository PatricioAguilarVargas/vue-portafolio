<template>
  <div>
    <Menubar :model="items">
      <template #item="{ item }">
        <router-link :to="item.to" class="p-menuitem-link"> 
          <span class="p-menuitem-icon" :class="item.icon"></span>
          <span class="p-menuitem-text">{{ item.label }}</span>
        </router-link>
      </template>
    </Menubar>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const items = ref([
       {
        label: "Git Projects",
        icon: "pi pi-fw pi-github",
        to: "/project"
      },
      {
        label: "About",
        icon: "pi pi-fw pi-info-circle",
        to: "/about"
      },
    ]);

    return { items };
  },
};
</script>
