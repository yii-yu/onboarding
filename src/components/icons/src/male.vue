<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 40 40"
  >
    <g :fill="color">
      <path
         d="M22.2798 11.4036L24.2731 6.4137L24.9161 8.06619L28.0829 6.80253L25.7842 0.937804C25.4787 0.143961 24.5625 -0.22866 23.7909 0.12776L18.1003 2.7523L19.5149 5.87908L21.1064 5.15003L19.1291 10.1237C17.8431 9.76729 16.4929 9.57288 15.0943 9.57288C6.75146 9.57288 0 16.3773 0 24.7855C0 33.1938 6.75146 39.9981 15.0943 39.9981C23.4372 39.9981 30.1887 33.1938 30.1887 24.7855C30.1887 19.0018 26.9898 13.9795 22.2798 11.4036ZM15.0943 36.5636C8.61615 36.5636 3.35966 31.2659 3.35966 24.7369C3.35966 18.208 8.61615 12.9103 15.0943 12.9103C21.5725 12.9103 26.829 18.208 26.829 24.7369C26.829 31.2659 21.5725 36.5636 15.0943 36.5636Z"
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
