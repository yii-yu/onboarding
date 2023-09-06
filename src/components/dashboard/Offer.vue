<template>
  <div class="offer">
    <div class="dashboard-title">
      Goodstyle<br />
      <span>Your Virtual Stylist</span>
    </div>

    <div class="container">
      <img src="../../assets/images/dashboard/virtual-try-on.png" />
      <img src="../../assets/images/dashboard/search-by-photo.png" />
      <img src="../../assets/images/dashboard/outfits.png" />
      <img src="../../assets/images/dashboard/fashion-catalog.png" />
      <img src="../../assets/images/dashboard/purchases.png" />
      <img src="../../assets/images/dashboard/body-types.png" />
    </div>

    <div class="dashboard-title"><span>3 Days Free Trial</span></div>

    <div class="container">
      <div
        v-for="item in packageServices"
        :key="item.name"
        class="package-services"
      >
        <div class="package-title">{{ item.title }}</div>
        <div class="package-price">{{ item.price }}</div>
        <div class="package-name">{{ item.name }}</div>
        <div class="package-amount">{{ item.amount }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { packageServices } from '../../utilities/settings';
</script>

<style lang="scss" scoped>
.offer {
  justify-content: space-around;
}
.dashboard-title {
  span {
    font-size: 1.1rem;
    text-transform: uppercase;
  }
}
.dashboard {
  background-color: #ccc;
}
.container {
  column-gap: 20px;
  row-gap: 20px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  .package-services {
    width: 91px;
    height: 145px;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    background: #ffffff;
    box-shadow: 0px 3px 10px #e1e1e1;
    border-radius: 12px;

    &:hover {
      &:before {
        content: '';
        position: absolute;
        top: -7px;
        right: -7px;
        width: 54px;
        height: 54px;
        border-radius: 50%;
        display: block;
        border: 4px solid #fa5959;
        box-sizing: border-box;
      }
    }
    &.active {
      &:before {
        content: '';
        position: absolute;
        top: -7px;
        right: -7px;
        width: 54px;
        height: 54px;
        border-radius: 50%;
        display: block;
        border: 4px solid #fa5959;
        box-sizing: border-box;
      }
    }
  }
}
</style>
