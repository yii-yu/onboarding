<template>
  <div ref="ruler" class="liner liner-x">
    <div class="liner-value">
      <span>{{ Math.round(startValue) }}</span>
    </div>
    <div class="wrap-liner" :class="measureUnit">
      <div
        :style="styleObject"
        class="bg-line"
        @mousedown.prevent="handlerMouseDown"
        @touchstart.prevent="handlerTouchStart"
      >
        <i class="triangle-top" :style="{ left: leftStyle + 'px' }" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useRuler from '../../composables/useRuler';
import { ref, onMounted } from 'vue';
const emit = defineEmits(['changeValue']);
const props = defineProps({
  screenHeight: {
    type: Number,
    default: 0,
  },
  startValue: {
    type: Number,
    default: 0,
  },
  measureUnit: {
    type: String,
    default: 'kg',
  },
  nameScreen: {
    type: String,
    default: 'gender',
  },
});
const leftStyle = ref();
const ruler = ref();
const { styleObject, handlerMouseDown, handlerTouchStart } =
  useRuler(props, 'X', emit);

onMounted(() => {
  leftStyle.value = ruler.value.clientWidth / 2 - 13;
});
</script>

<style lang="scss">
@import '../../assets/styles/helpers/mixins';
.liner-value {
  @include rulerValue();
  span {
    min-width: 75px;
    background-color: #fbfafb;
    z-index: 10;
  }
  top: calc(50% - 52px);
}
.liner-x {
  position: absolute;
  height: 80px;
  width: 100%;
  right: 0;
  top: calc(50% - 80px);
  &::after {
    @include endRuler(0.7, 100%);
    width: 5%;
    top: 0;
    left: 0;
    background-image: linear-gradient(to left, #fbfafa, #fbf9fa);
  }
  &::before {
    @include endRuler(0.5, 100%);
    width: 5%;
    top: 0;
    right: 0;
    background-image: linear-gradient(to left, #fbf9fa, #fcfafa);
  }

  .triangle-top {
    @include triangleTop();
  }
  .wrap-liner {
    position: absolute;
    width: 100%;
    height: 80px;
    z-index: 2;

    &::after {
      @include endRuler(0.7, 100%);
      width: 15%;
      top: 0;
      left: 0;
      background-image: linear-gradient(to left, #fbf9fa, #fcfafa);
    }
    &::before {
      @include endRuler(0.7, 100%);
      width: 15%;
      top: 0;
      right: 0;
      background-image: linear-gradient(to left, #fbf3f3, #faf2f2);
    }

    .bg-line {
      background-size: cover;
      background-repeat: no-repeat;
      cursor: move;
      height: 80px;
    }
    &.kg {
      .bg-line {
        background-image: url('../../assets/images/dashboard/line-kg.png');
      }
    }
    &.lbs {
      .bg-line {
        background-image: url('../../assets/images/dashboard/line-lbs.png');
      }
    }
  }
}
</style>
