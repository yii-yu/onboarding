<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 16 14"
  >
    <g :fill="color">
      <path
         d="M8.98082 13.44C8.5449 14.1867 7.4551 14.1867 7.01918 13.44L0.153423 1.68C-0.282498 0.933334 0.262404 1.26251e-06 1.13425 1.18714e-06L14.8658 0C15.7376 -7.53733e-08 16.2825 0.933333 15.8466 1.68L8.98082 13.44Z"
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
