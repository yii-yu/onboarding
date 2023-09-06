<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 30 33"
  >
    <g :fill="color">
      <path
         d="M14.0912 0.586973C14.4446 -0.195657 15.5554 -0.195658 15.9088 0.586972L29.9104 31.5913C30.2087 32.2517 29.7259 33 29.0015 33H0.998457C0.274091 33 -0.208649 32.2517 0.0896144 31.5913L14.0912 0.586973Z"
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
