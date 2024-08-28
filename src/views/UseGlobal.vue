<script setup lang="ts">
import "@/assets/style/color.ts";
import "@/assets/style/size.ts";

import "@/utils/windows";
import "@/utils/shortcutKey";

import Popups from "@/components/popups/index.vue";

// import { addUniqueModal } from "@/components/popups/popups";

// setTimeout(() => {
//   addUniqueModal({
//     componentName: "Settings",
//   });
// }, 1000);
</script>

<template>
  <Popups />
</template>
