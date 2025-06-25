<template>
  <div class="upload-container">
    <label class="file-dropzone w-100" for="fileInput" v-if="!imageSrc">
      <div class="upload-icon">📁</div>
      <div class="upload-text">Click to upload a profile picture</div>
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        @change="onFileChange"
        @dragover.prevent
        @drop.prevent="onDrop"
        class="file-input w-100"
      />
    </label>

   <div class="row">
        <div v-if="imageSrc" class="image-cropper col-md-6" ref="cropperRef">
        <img :src="imageSrc" alt="Profile" class="image-preview" />

        <div
            class="crop-box"
            :style="cropBoxStyle"
            @mousedown="startDrag"
            @touchstart.prevent="startDrag"
            v-if="from == 'profilePhoto'"
        ></div>
        </div>

        <div v-if="croppedImage" class="cropped-preview col-md-6">
        <h4>Cropped Preview:</h4>
        <img :src="croppedImage" alt="Cropped" />
        </div>
   </div>

    <button v-if="imageSrc && from == 'profilePhoto'" @click="cropImage" class="crop-button">Crop</button>
    <button v-if="imageSrc" @click="()=>{imageSrc = null;croppedImage = null}" class="crop-button">Cancel</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from "vue";

const emit = defineEmits(['imageSelected','coverPhoto'])
const props = defineProps({
  from:{
    type:String,
    default:"profilePhoto"
  }
})

const from = computed(()=> props.from);
const imageSrc = ref<string | null>(null);
const croppedImage = ref<string | null>(null);

const cropperRef = ref<HTMLDivElement | null>(null);

// Fixed crop box size (like LinkedIn crop box)
const cropBoxWidth = 200;
const cropBoxHeight = 200;

// Crop box position relative to image container
const cropBoxPos = reactive({
  left: 0,
  top: 0,
});

let isDragging = false;
let dragStart = { x: 0, y: 0 };
let boxStart = { left: 0, top: 0 };

function onFileChange(e: Event) {
  const target = e.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    const file = target.files[0];
    const reader = new FileReader();
    reader.onload = (ev) => {
      imageSrc.value = ev.target?.result as string;
      croppedImage.value = null;
      cropBoxPos.left = 0;
      cropBoxPos.top = 0;
      if(from.value == 'coverPhoto'){
          emit('coverPhoto',imageSrc.value);
      }
    };
    reader.readAsDataURL(file);
    
  }
}

function onDrop(e: DragEvent) {
  if (!e.dataTransfer) return;
  if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
    const file = e.dataTransfer.files[0];
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        imageSrc.value = ev.target?.result as string;
        croppedImage.value = null;
        cropBoxPos.left = 0;
        cropBoxPos.top = 0;
      };
      reader.readAsDataURL(file);
    }
    e.dataTransfer.clearData();
  }
}

function startDrag(event: MouseEvent | TouchEvent) {
  isDragging = true;

  if ("touches" in event) {
    dragStart.x = event.touches[0].clientX;
    dragStart.y = event.touches[0].clientY;
  } else {
    dragStart.x = event.clientX;
    dragStart.y = event.clientY;
  }
  boxStart.left = cropBoxPos.left;
  boxStart.top = cropBoxPos.top;

  window.addEventListener("mousemove", onDrag);
  window.addEventListener("touchmove", onDrag, { passive: false });
  window.addEventListener("mouseup", stopDrag);
  window.addEventListener("touchend", stopDrag);
}

function onDrag(event: MouseEvent | TouchEvent) {
  if (!isDragging) return;

  event.preventDefault();

  let clientX = 0,
    clientY = 0;

  if ("touches" in event) {
    clientX = event.touches[0].clientX;
    clientY = event.touches[0].clientY;
  } else {
    clientX = event.clientX;
    clientY = event.clientY;
  }

  const container = cropperRef.value;
  if (!container) return;

  const containerRect = container.getBoundingClientRect();

  const dx = clientX - dragStart.x;
  const dy = clientY - dragStart.y;

  let newLeft = boxStart.left + dx;
  let newTop = boxStart.top + dy;

  // Clamp crop box within container boundaries
  newLeft = Math.max(0, Math.min(newLeft, containerRect.width - cropBoxWidth));
  newTop = Math.max(0, Math.min(newTop, containerRect.height - cropBoxHeight));

  cropBoxPos.left = newLeft;
  cropBoxPos.top = newTop;
}

function stopDrag() {
  isDragging = false;
  window.removeEventListener("mousemove", onDrag);
  window.removeEventListener("touchmove", onDrag);
  window.removeEventListener("mouseup", stopDrag);
  window.removeEventListener("touchend", stopDrag);
}

const cropBoxStyle = computed(() => ({
  width: cropBoxWidth + "px",
  height: cropBoxHeight + "px",
  left: cropBoxPos.left + "px",
  top: cropBoxPos.top + "px",
}));

function cropImage() {
  const img = cropperRef.value?.querySelector("img");
  if (!img) return;

  const scaleX = img.naturalWidth / img.clientWidth;
  const scaleY = img.naturalHeight / img.clientHeight;

  const sx = cropBoxPos.left * scaleX;
  const sy = cropBoxPos.top * scaleY;
  const sw = cropBoxWidth * scaleX;
  const sh = cropBoxHeight * scaleY;

  const canvas = document.createElement("canvas");
  canvas.width = cropBoxWidth;
  canvas.height = cropBoxHeight;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const imageElement = img as HTMLImageElement;
  ctx.drawImage(
    imageElement,
    sx,
    sy,
    sw,
    sh,
    0,
    0,
    cropBoxWidth,
    cropBoxHeight
  );

  croppedImage.value = canvas.toDataURL("image/png");
  emit('imageSelected',croppedImage.value)
}
</script>

<style scoped>
.upload-container {
  width: 100%;
  margin: 1rem auto;
  font-family: Arial, sans-serif;
  user-select: none;
}

/* File Dropzone Styles */
.file-dropzone {
  border: 2px dashed #2196f3;
  border-radius: 8px;
  padding: 2rem 1rem;
  text-align: center;
  color: #2196f3;
  cursor: pointer;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  position: relative;
  user-select: none;
}

.file-dropzone:hover,
.file-dropzone:focus {
  background-color: #e3f2fd;
  border-color: #1976d2;
}

.file-input {
  display: none;
}

.upload-icon {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  user-select: none;
}

.upload-text {
  font-weight: 500;
  user-select: none;
  line-height: 1.3;
}

/* Image cropper container */
.image-cropper {
  position: relative;
  margin-top: 1rem;
  width: 100%;
  max-width: 400px;
  border: 1px solid #ccc;
  overflow: hidden;
  touch-action: none;
  border-radius: 8px;
}

.image-preview {
  display: block;
  width: 100%;
  user-select: none;
  pointer-events: none;
  border-radius: 8px;
}

.crop-box {
  position: absolute;
  border: 2px solid #2196f3;
  box-sizing: border-box;
  cursor: move;
  background: rgba(33, 150, 243, 0.2);
  border-radius: 6px;
  user-select: none;
}

.cropped-preview {
  margin-top: 1rem;
  text-align: center;
}

.cropped-preview img {
  border-radius: 50%;
  border: 2px solid #2196f3;
  width: 200px;
  height: 200px;
  object-fit: cover;
  user-select: none;
}

.crop-button {
  margin-top: 1rem;
  background-color: #2196f3;
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease;
  user-select: none;
}

.crop-button:hover {
  background-color: #1976d2;
}
</style>
