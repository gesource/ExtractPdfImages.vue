<template>
  <div>
    <img :src="imageUrl">
  </div>
</template>

<script>
export default {
  name: 'PdfImage',
  props: {
    imageUrl: {
      required: true,
      type: String,
    },
  },
};
</script>
