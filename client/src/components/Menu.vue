<script>
export default {
  methods: {
    showModal(modalId) {
      const modal = document.getElementById(modalId)

      modal.classList.remove('invisible')
      modal.classList.add('visible')
    }
  }
}
</script>

<template>
  <button class="bg-violet-700 rounded-full p-2 pr-8 text-violet-700 font-semibold hover:bg-violet-500 hover:text-violet-500 transition flex items-center gap-4" @click="showModal('create-issue-modal')">
    <span class="material-icons bg-white text-inherit rounded-full p-2">add</span>
    <span class="text-white">New</span>
  </button>
</template>
