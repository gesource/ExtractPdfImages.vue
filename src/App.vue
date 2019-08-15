<template>
  <div id="app">
    <ExtractPdfImages/>
  </div>
</template>

<script>
import ExtractPdfImages from './components/ExtractPdfImages.vue';

export default {
  name: 'app',
  components: {
    ExtractPdfImages,
  },
};
</script>

<style>
#app {
}
</style>
