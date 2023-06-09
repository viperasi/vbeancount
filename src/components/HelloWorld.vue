<template>
  <v-container class="fill-height">
    <div>
      <input ref="folderInput" type="file" webkitdirectory @change="handleSelectFolder"/>
    </div>
  </v-container>
</template>

<script setup>
const handleSelectFolder = (event) => {
  let files = event.target.files
  for (let i = 0; i < files.length; i++) {
    console.log(files[i])
  }
}

// const onImport = async () => {
//   let _t = this
//   let store = null
//   if (this.type === 'rzg') {
//     store = storeRzg
//   } else if (this.type === 'yzy') {
//     store = storeYzy
//   }
//   if (store) {
//     if (this.clear) {
//       await store.clear()
//     }
//     if (this.file) {
//       this.file.forEach(item => {
//         const reader = new FileReader()
//         reader.onload = _t.fileOnload
//         reader.readAsText(item)
//       })
//     }
//   }
// }
// const fileOnload = async (e) => {
//   let _t = this
//   try {
//     if (this.type === 'rzg') {
//       let result = readlineRzg(e.target.result, _t.first)
//       await storeRzg.add(result)
//       this.getAllData()
//     } else if (this.type === 'yzy') {
//       let result = readlineYzy(e.target.result, _t.first)
//       console.log(result)
//       await storeYzy.add(result)
//       this.getAllData()
//     }
//   } catch (e) {
//     console.log(e)
//   } finally {
//     _t.dialog = false
//   }
//
// }
</script>
