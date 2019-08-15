<template>
    <div>
        <label id="file-label"
        v-on:dragover.stop.prevent="onDragOver"
        v-on:drop.stop.prevent="onDrop">
            <span>PDFファイルを選択</span>
            <input type="file" id="file"
              :accept="mime"
              v-on:change="onChange" />
        </label>
    </div>
</template>

<script>
export default {
  name: 'DropFileArea',
  props: {
    mime: {
      type: String,
      required: true,
    },
  },
  methods: {
    onDragOver() {
    },
    onDrop(evt) {
      this.onSelectFile(evt.dataTransfer.files);
    },
    onChange(evt) {
      this.onSelectFile(evt.target.files);
    },
    onSelectFile(files) {
      const result = [];
      for (let i = 0; i < files.length; i++) {
        const file = files.item(i);
        result.push(file);
      }
      this.$emit('select-files', result);
    },
  },
};
</script>

<style scoped>
#file-label {
    display: inline-block;
    width: 100%;
    padding: 2rem 0rem;
    text-align: center;
    background-color: lightblue;
}
#file {
    display: none;
}
</style>
