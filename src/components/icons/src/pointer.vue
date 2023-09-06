<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 33 31"
  >
    <g :fill="color">
      <path
         d="M0.588242 16.4517C-0.19608 16.0973 -0.196081 14.9835 0.588241 14.6291L31.6596 0.589852C32.3215 0.290784 33 0 33 0V31C33 31 32.3215 30.7901 31.6596 30.491L0.588242 16.4517Z"
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
