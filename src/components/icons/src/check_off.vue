<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 22 22"
  >
    <g :fill="color">
      <path
         d="M11 22C4.97619 22 0 17.0238 0 11C0 4.97619 4.96774 0 10.9916 0C17.0154 0 22 4.97619 22 11C22 17.0238 17.0238 22 11 22ZM11.0005 20.4287C16.2217 20.4287 20.4375 16.2213 20.4291 11.0001C20.4206 5.77891 16.2132 1.57153 10.992 1.57153C5.7624 1.57153 1.58037 5.77891 1.58037 11.0001C1.58037 16.2213 5.77085 20.4287 11.0005 20.4287Z"
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