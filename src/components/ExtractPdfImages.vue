/* eslint prefer-destructuring: error */

<template>
  <div>
    <DropFileArea
      mime="application/pdf"
      v-on:select-files="onSelectFiles">
    </DropFileArea>
    <PdfImage v-for="imageUrl in images" v-bind:key="imageUrl" :imageUrl="imageUrl"></PdfImage>
  </div>
</template>

<script>
import DropFileArea from './DropFileArea.vue';
import PdfImage from './PdfImage.vue';

// eslint-disable-next-line
const pdfjsLib = window.pdfjsLib;

export default {
  name: 'ExtractPdfImages',
  components: {
    DropFileArea,
    PdfImage,
  },
  data() {
    return {
      images: [],
    };
  },
  methods: {

    onSelectFiles(files) {
      this.images = [];
      if (this.fileUrls) {
        this.fileUrls.forEach(u => URL.revokeObjectURL(u));
      }
      this.fileUrls = files.map(file => URL.createObjectURL(file));
      this.fileUrls.forEach((fileUrl, fileIndex) => {
        pdfjsLib
          .getDocument({ url: fileUrl })
          .promise.then((doc) => {
            for (let p = 1; p <= doc.numPages; p++) {
              doc.getPage(p).then((page) => {
                page.getOperatorList().then((ops) => {
                  ops.argsArray.forEach((arg, i) => {
                    if (ops.fnArray[i] !== pdfjsLib.OPS.paintJpegXObject) { return; }
                    page.objs.get(arg[0], (img) => {
                      this.images.push(img.src);
                    });
                  });
                });
              });
            }
          })
          .catch((error) => {
            alert('Failed to open');
            console.log(error);
          });
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
