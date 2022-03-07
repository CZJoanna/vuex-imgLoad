<template>
  <div id="app">
    <LoadingBar />
    <ImageBox />
  </div>
</template>
<script>
import { onMounted } from "vue";
import { useStore } from "vuex";
import ImageBox from "./components/ImageBox/index.vue";
import LoadingBar from "./components/LoadingBar.vue";
export default {
  components: {
    LoadingBar,
    ImageBox,
  },
  setup() {
    const store = useStore();

    const ImgLoad = (imgArr) => {
      console.log('照片',imgArr);
      let i = 0;
      imgArr.forEach(img => {
        const image = new Image();
        image.src = img.url;
        image.onload = () => {
          i++;
          if(i === imgArr.length){
            store.dispatch('loadState',true)
          }
        }
      });
    };

    const init = () => {
        store.dispatch('init').then(res => {
          ImgLoad(res);
        })
    };

    onMounted(() => {
      init();
    });

    return {};
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: slategray;
}
</style>
