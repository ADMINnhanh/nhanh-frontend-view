<script setup lang="ts">
import "@/assets/style/color";
import "@/assets/style/size";

import "@/utils/windows";
import "@/utils/shortcutKey";

import Popups from "@/components/popups/index.vue";

// import { AddUniqueModal } from "@/components/popups/popups";
// setTimeout(() => {
//   AddUniqueModal({
//     componentName: "Settings",
//   });
// }, 1000);
</script>

<template>
  <Popups />
</template>
