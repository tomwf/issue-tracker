<script>
export default {
  methods: {
    hideModal() {
      const modal = document.getElementById('create-issue-modal')

      modal.classList.remove('visible')
      modal.classList.add('invisible')
    },
    jsonBody() {
      const form = document.getElementById('testForm')
      const result = {}

      for (let i = 0; i < form.length - 1; i++) {
        const name = form[i].name
        const value = form[i].value

        result[name] = value
      }

      return result
    },
    handleSubmit(e) {
      e.preventDefault()
      const url = '/api/issues/apitest'
      const body = this.jsonBody()
      const config = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
      }

      fetch(url, config)
        .then(res => res.json())
        .then(data => {
          if (!data.hasOwnProperty('error')) {
            location.reload()
          }
          return data
        })
        .catch(err => console.error(err))
    }
  }
}
</script>

<template>
  <div id="create-issue-modal" class="fixed inset-0 bg-white invisible bg-black-transparent min-h-screen">
    <div class="relative w-screen h-screen grid place-items-center">
      <div class="max-w-md bg-white dark:bg-very-dark-gray p-8">
        <div class="flex justify-between items-center mt-2 my-8">
          <h1 class="font-bold text-3xl">New Issue</h1>
          <button class="grid place-content-center" @click="hideModal">
            <span inline="true" style="font-size: 2rem;" class="material-icons hover:text-gray-500 transition">close</span>
          </button>
        </div>
        <form id="testForm">

          <label class="block mb-2">Title <span class="text-red-500 font-bold">*</span></label>
          <input class="block w-full border rounded py-2 px-3 mb-4 dark:bg-dark-gray dark:border-none" type="text" name="issue_title" required=''>
          <label class="block mb-2">Text <span class="text-red-500 font-bold">*</span></label>
          <textarea class="block w-full border rounded py-2 px-3 resize-none mb-4 dark:bg-dark-gray dark:border-none" type="text" name="issue_text" required=''></textarea>
          <div class="flex gap-4">
            <div class="w-full">
              <label class="block mb-2">Created by <span class="text-red-500 font-bold">*</span></label>
              <input class="w-full border rounded py-2 px-3 mb-4 dark:bg-dark-gray dark:border-none" type="text" name="created_by" required=''>
            </div>
            <div class="w-full">
              <label class="block mb-2">Assigned to</label>
              <input class="w-full border rounded py-2 px-3 mb-4 dark:bg-dark-gray dark:border-none" type="text" name="assigned_to">
            </div>
          </div>
          <label class="block mb-2">Status text</label>
          <input class="block w-full border rounded py-2 px-3 mb-4 dark:bg-dark-gray dark:border-none" type="text" name="status_text">
          <button class="bg-violet-700 rounded-full px-8 py-4 text-white font-semibold mx-auto block hover:bg-violet-500 transition" type="submit" @click="handleSubmit">Submit Issue</button>
        </form>
      </div>
    </div>
  </div>
</template>
