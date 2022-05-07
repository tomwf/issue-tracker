<script>
export default {
  methods: {
    hideModal() {
      const modal = document.getElementById('update-issue-modal')

      modal.classList.remove('visible')
      modal.classList.add('invisible')
    },
    jsonBody(formId) {
      const form = document.getElementById(formId)
      const result = {}

      for (let i = 0; i < form.length - 1; i++) {
        const name = form[i].name
        let value

        if (name === 'open') {
          value = !form[i].checked
        } else {
          value = form[i].value
        }

        result[name] = value
      }

      return result
    },
    handleSubmit(e) {
      e.preventDefault()
      const url = '/api/issues/apitest'
      const body = this.jsonBody('testForm2')
      const config = {
        method: 'PUT',
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
    },
    handleDelete(e) {
      e.preventDefault()
      const url = '/api/issues/apitest'
      const body = this.jsonBody('testForm3')
      const config = {
        method: 'DELETE',
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
  <div id="update-issue-modal" class="fixed inset-0 bg-white invisible bg-black-transparent min-h-max">
    <div class="relative w-screen h-screen grid place-items-center">
      <div class="max-w-md bg-white p-8 dark:bg-very-dark-gray">
        <div class="flex justify-between items-center mb-4">
          <h1 class="font-bold text-3xl">Update Issue</h1>
          <button class="grid place-content-center" @click="hideModal">
            <span inline="true" style="font-size: 2rem;" class="material-icons hover:text-gray-500 transition">close</span>
          </button>
        </div>
        <form id="testForm2">
          <input class="block w-full border rounded py-2 px-3 mb-4 hidden dark:bg-dark-gray dark:border-none" type="text" name="_id" required=''>
          <label class="block mb-2">Title</label>
          <input class="block w-full border rounded py-2 px-3 mb-4 dark:bg-dark-gray dark:border-none" type="text" name="issue_title">
          <label class="block mb-2">Text</label>
          <textarea class="block w-full border rounded py-2 px-3 resize-none mb-4 dark:bg-dark-gray dark:border-none" type="text" name="issue_text"></textarea>
          <div class="flex gap-4">
            <div class="w-full">
              <label class="block mb-2">Created by</label>
              <input class="w-full border rounded py-2 px-3 mb-4 dark:bg-dark-gray dark:border-none" type="text" name="created_by">
            </div>
            <div class="w-full">
              <label class="block mb-2">Assigned to</label>
              <input class="w-full border rounded py-2 px-3 mb-4 dark:bg-dark-gray dark:border-none" type="text" name="assigned_to">
            </div>
          </div>
          <label class="block mb-2">Status text</label>
          <input class="block w-full border rounded py-2 px-3 mb-4 dark:bg-dark-gray dark:border-none" type="text" name="status_text">
          <label class="block mb-4"><input type="checkbox" name="open"> Check to close issue</label>

          <div class="flex gap-8">
            <button class="bg-red-500 rounded-full px-8 py-4 text-white font-semibold mx-auto block hover:bg-red-400 transition" type="submit" @click="handleDelete">Delete Issue</button>
            <button class="bg-violet-700 rounded-full px-8 py-4 text-white font-semibold mx-auto block hover:bg-violet-500 transition" type="submit" @click="handleSubmit">Update Issue</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
