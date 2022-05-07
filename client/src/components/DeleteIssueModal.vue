<script>
export default {
  methods: {
    hideModal() {
      const modal = document.getElementById('delete-issue-modal')

      modal.classList.remove('visible')
      modal.classList.add('invisible')
    },
    jsonBody() {
      const form = document.getElementById('testForm3')
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
            this.hideModal()
          }
          return data
        })
        .catch(err => console.error(err))
    }
  }
}
</script>

<template>
  <div id="delete-issue-modal" class="fixed inset-0 bg-white invisible bg-black-transparent min-h-screen">
    <div class="relative w-screen h-screen grid place-items-center">
      <div class="max-w-md bg-white p-8">
        <div class="flex justify-between items-center mt-2 my-8">
          <h1 class="font-bold text-3xl">Delete Issue</h1>
          <button class="grid place-content-center" @click="hideModal">
            <span inline="true" style="font-size: 2rem;" class="material-icons hover:text-gray-500 transition">close</span>
          </button>
        </div>
        <form id="testForm3">
          <label class="block mb-2">id <span class="text-red-500 font-bold">*</span></label>
          <input class="block w-full border rounded py-2 px-3 mb-8" type="text" name="_id" required=''>

          <button class="bg-violet-700 rounded-full px-8 py-4 text-white font-semibold mx-auto block hover:bg-violet-500 transition" type="submit" @click="handleSubmit">Delete Issue</button>
        </form>
      </div>
    </div>
  </div>
</template>
