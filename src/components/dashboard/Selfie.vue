<template>
  <div>
    <h2 class="dashboard-title">Make A <slot></slot></h2>
    <ConfirmDialog ref="confirmDialogue" />
    <div v-if="isConfirmed" class="camera-wrap">
      <video ref="video">Video stream not available.</video>
      <button @click.prevent="takePhoto"></button>

      <canvas ref="canvas"> </canvas>
      <div class="output">
        <i ref="icon" class="icon-selfie"></i>
        <img
          v-show="isPhoto"
          ref="photo"
          alt="The screen capture will appear in this box."
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { key } from '../../store';
import ConfirmDialog from '../ConfirmDialog.vue';

var streaming = false;
const store = useStore(key);
const width = ref(375); // This will create the width of the photo
const height = ref(472); // This will be calculated based on the incoming stream
const video = ref();
const canvas = ref();
const icon = ref();
const photo = ref();
const isPhoto = ref(false);
const isConfirmed = ref(false);
const confirmDialogue = ref<InstanceType<typeof ConfirmDialog> | any>(null);

const handlerCanPlay = () => {
  if (!streaming) {
    video.value.setAttribute('autoplay', '');
    video.value.setAttribute('muted', '');
    video.value.setAttribute('playsinline', '');
    video.value.setAttribute('width', width.value);
    video.value.setAttribute('height', height.value);
    canvas.value.setAttribute('width', width.value);
    canvas.value.setAttribute('height', height.value);
    streaming = true;
  }
};

onMounted(async () => {
  if (!navigator || !navigator.mediaDevices) {
    await confirmDialogue.value.show({
      title: 'Error',
      message: 'No camera access',
      okButton: 'OK',
      icon: 'error',
      iconColor: '#ff0000',
    });
    return;
  }
  isConfirmed.value = await confirmDialogue.value.show({
    title: 'Goodstyle Would Like to Access the Camera',
    message: 'This allows you to take photos',
    okButton: 'OK',
    cancelButton: 'Don’t Allow',
  });

  if (isConfirmed.value) {
    startup();
  } else {
    uploadImage();
  }
});

const startup = () => {
  navigator.mediaDevices
    .getUserMedia({
      video: {
        width: { ideal: width.value },
        height: { ideal: height.value },
        facingMode: 'user'
      },
      audio: false,
    })
    .then((stream) => {
      video.value.srcObject = stream;
      video.value.play();
      video.value.addEventListener('canplay', handlerCanPlay, false);
    })
    .catch(async (err) => {
      isConfirmed.value = false;
      await confirmDialogue.value.show({
        title: 'Error',
        message: err.message,
        okButton: 'OK',
        icon: 'error',
        iconColor: '#ff0000',
      });
    });
};

const uploadImage = async () => {
  await confirmDialogue.value.show({
    title: 'Goodstyle Would Like to Access Your Photos',
    message: 'Allows access to the photo library for opening images',
    okButton: 'Select Photo',
    cancelButton: 'Don’t Allow',
  });
};

const clearPhoto = () => {
  if (!canvas.value) return;
  let context = canvas.value.getContext('2d');
  context.fillStyle = '#AAA';
  context.fillRect(0, 0, canvas.value.width, canvas.value.height);

  let data = canvas.value.toDataURL('image/png');
  photo.value.setAttribute('src', data);
};

const takePhoto = () => {
  let context = canvas.value.getContext('2d');
  if (width.value && height.value) {
    canvas.value.width = width.value;
    canvas.value.height = height.value;
    context.drawImage(
      video.value,
      0,
      0,
      width.value,
      height.value,
      0,
      0,
      width.value,
      height.value
    );

    let data = canvas.value.toDataURL('image/png');
    photo.value.setAttribute('src', data);
    isPhoto.value = true;
    video.value.style.display = 'none';
    canvas.value.style.display = 'none';
    icon.value.style.display = 'none';
    store.commit('setPhoto', data);
  } else {
    clearPhoto();
  }
};
</script>

<style lang="scss" scoped>
.dashboard {
  .dashboard-component {
    h2 {
      margin-top: 50px;
    }
  }
}
.camera-wrap {
  position: relative;
  height: 480px;
  width: 375px;
}
video,
canvas,
.output {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
video {
  z-index: 2;
}
img {
  width: 100%;
  height: 100%;
}
.icon-selfie {
  background-image: url(../../assets/images/dashboard/icon-selfie.svg);
  padding: 70px;
  background-repeat: no-repeat;
  position: absolute;
  top: calc(50% - 70px);
  left: calc(50% - 70px);
}
button {
  position: absolute;
  left: calc(50% - 28px);
  bottom: 29px;
  z-index: 3;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  cursor: pointer;

  &:before {
    content: '';
    width: 66px;
    height: 66px;
    display: block;
    position: absolute;
    left: -5px;
    bottom: -5px;
    background-color: transparent;
    border: 3px solid #fff;
    border-radius: 50%;
    display: block;
    box-sizing: border-box;
  }
  &:hover {
    opacity: 0.7;
  }
}
</style>
