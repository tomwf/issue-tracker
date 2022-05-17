<script>
export default {
  props: {
    title: String,
    text: String,
    createdBy: String,
    assignedTo: String,
    statusText: String,
    open: Boolean,
    date: String,
    id: String,
  },
  methods: {
    showModal() {
      const modal = document.getElementById('update-issue-modal')

      modal.classList.remove('invisible')
      modal.classList.add('visible')
    },
    handleClick(e) {
      const target = e.target
      const idInput = document.querySelector('#testForm2>input[name="_id"]')
      const titleInput = document.querySelector('#testForm2>input[name="issue_title"]')
      const textInput = document.querySelector('#testForm2>textarea[name="issue_text"]')
      const createdByInput = document.querySelector('#testForm2 input[name="created_by"]')
      const assignedToInput = document.querySelector('#testForm2 input[name="assigned_to"]')
      const statusTextInput = document.querySelector('#testForm2>input[name="status_text"]')
      const openInput = document.querySelector('#testForm2 input[name="open"]')
      let id
      let title
      let text
      let createdBy
      let assignedTo
      let statusText
      let closed

      // Prepare form data from <Issue /> component
      if (target.dataset.id) {
        id = target.dataset.id
        title = target.childNodes[1].innerText
        text = target.childNodes[2].innerText
        createdBy = target.childNodes[3].innerText
        assignedTo = target.dataset.assignedTo
        statusText = target.dataset.statusText
        closed = target.dataset.open === "true" ? false : true
      } else if (target.parentNode.dataset.id) {  // Target is child element
        id = target.parentNode.dataset.id
        title = target.parentNode.childNodes[1].innerText
        text = target.parentNode.childNodes[2].innerText
        createdBy = target.parentNode.childNodes[3].innerText
        assignedTo = target.parentNode.dataset.assignedTo
        statusText = target.parentNode.dataset.assignedTo
        closed = target.parentNode.dataset.open === "true" ? false : true
      }
      
      this.showModal()

      // Fill form with existing data
      idInput.value = id
      titleInput.value = title ? title : ''
      textInput.value = text ? text : ''
      createdByInput.value = createdBy ? createdBy : ''
      assignedToInput.value = assignedTo ? assignedTo : ''
      statusTextInput.value = statusText ? statusText : ''

      if (closed) {
        openInput.checked = true
        openInput.disabled = true
      } else {
        openInput.checked = false
        openInput.disabled = false
      }

      // Fill id for delete form
      document.querySelector('#testForm3>input[name="_id"]').value = id
    }
  }
}
</script>

<template>
  <div :data-id="id" :data-assigned-to="assignedTo" :data-status-text="statusText" :data-open="open" class="p-8 grid grid-cols-card grid-rows-card bg-white rounded-lg mb-4 cursor-pointer dark:bg-dark-gray transition" @click="handleClick">
    <span class="col-start-1 col-end-2 row-start-1 row-end-2 text-gray-400">{{ new Date(date).toLocaleDateString() }}</span>
    <span class="col-start-1 col-end-2 row-start-3 row-end-4 font-bold text-2xl overflow-hidden text-ellipsis whitespace-nowrap">{{ title }}</span>
    <span class="col-start-1 col-end-2 row-start-4 row-end-5 overflow-hidden text-ellipsis whitespace-nowrap self-end">{{ text }}</span>
    <span class="col-start-2 col-end-3 row-start-1 row-end-2 justify-self-end text-gray-400">{{ createdBy }}</span>
    <span v-if="open === true" class="col-start-2 col-end-3 row-start-3 row-end-5 justify-self-end self-center bg-emerald-100 rounded-lg font-bold text-emerald-700 uppercase w-32 py-4 flex items-center justify-center gap-2"><span class="material-icons" style="font-size: .8rem;">circle</span>open</span>
    <span v-if="open === false" class="col-start-2 col-end-3 row-start-3 row-end-5 justify-self-end self-center bg-orange-100 rounded-lg font-bold text-orange-700 uppercase w-32 py-4 flex items-center justify-center gap-2"><span class="material-icons" style="font-size: .8rem;">circle</span>closed</span>
  </div>
</template>
