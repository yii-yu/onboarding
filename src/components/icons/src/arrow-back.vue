<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 17 32"
  >
    <g :fill="color">
      <path
         d="M0.469671 15.4695C0.176777 15.7624 0.176777 16.2373 0.469671 16.5302L15.4695 31.5303C15.7624 31.8232 16.2373 31.8232 16.5302 31.5303C16.8231 31.2374 16.8231 30.7626 16.5302 30.4697L2.06066 15.9999L16.5303 1.53018C16.8232 1.23729 16.8232 0.762414 16.5303 0.469518C16.2374 0.176627 15.7626 0.176627 15.4697 0.46952L0.469671 15.4695Z"
      />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    width: { 
      type: String,
      default:"24",
    },
    height: { 
      type: String,
      default:"24",
      },
    color: { 
      type: String,
      default:"#000"
      },
  },
};
</script>
