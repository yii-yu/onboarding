<template>
  <div ref="ruler" class="liner liner-y">
    <div
      class="wrap-liner"
      :class="measureUnit"
      @mousedown.prevent="handlerMouseDown"
      @touchstart.prevent="handlerTouchStart"
    >
      <div :style="styleObject" class="bg-line">
        <i class="triangle-left" :style="{ top: topStyle + 'px' }" />
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
    default: 'cm',
  },
  nameScreen: {
    type: String,
    default: 'gender',
  },
});
const topStyle = ref();
const ruler = ref();
const { styleObject, handlerMouseDown, handlerTouchStart } = useRuler(
  props,
  'Y',
  emit
);
onMounted(() => {
  topStyle.value = ruler.value.clientHeight / 2 - 40 + 17;
});
</script>

<style lang="scss">
@import '../../assets/styles/helpers/mixins';
.current-value-liner {
  @include rulerValue();
  top: calc(50% - 32px);
  span {
    min-width: 75px;
  }
}
.triangle-left {
  @include triangleLeft();
}
.liner-y {
  @include rulerY();

  &::after {
    @include endRuler(0.5, 5%);
    top: 0;
    background-image: linear-gradient(to bottom, #e5e7ea, #e5e6e9);
  }
  &::before {
    @include endRuler(0.1, 5%);
    bottom: 0;
    background-image: linear-gradient(to top, #f2f5f6, #f3f6f7);
  }
  .wrap-liner {
    @include rulerY();
    right: 0;
    top: 0;

    &::after {
      @include endRuler(0.7, 18%);
      top: 0;
      background-image: linear-gradient(to bottom, #e0e0e3, #e3dadb);
    }
    &::before {
      @include endRuler(0.7, 20%);
      bottom: 0;
      background-image: linear-gradient(to top, #f3f6f7, #f9fbfc);
    }

    .bg-line {
      background-size: cover;
      background-repeat: no-repeat;
      cursor: move;
      height: 100%;
      // transition: all 0.3s;
    }
    &.year {
      .bg-line {
        background-image: url('../../assets/images/dashboard/line-ages.png');
      }
    }
    &.cm {
      .bg-line {
        background-image: url('../../assets/images/dashboard/line-cm.png');
      }
    }
    &.ft {
      .bg-line {
        background-image: url('../../assets/images/dashboard/line-ft.png');
      }
    }
  }
}
</style>
