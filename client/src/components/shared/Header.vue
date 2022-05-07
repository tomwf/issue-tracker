<script>
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
  localStorage.theme = 'dark'
} else {
  document.documentElement.classList.remove('dark')
  localStorage.theme = 'light'
}

export default {
  data() {
    return {
      mode: localStorage.theme
    }
  },
  methods: {
    toggleMode() {
      const mode = localStorage.theme

      if (mode === 'dark') {
        document.documentElement.classList.remove('dark')
        localStorage.theme = 'light'
        this.mode = 'light'
      } else {
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark'
        this.mode = 'dark'
      }
    }
  }
}
</script>

<template>
  <header class="max-w-screen bg-dark-gray mb-4">
    <div class="max-w-4xl w-full h-14 flex items-center justify-between px-4 mx-auto">
      <a href="/"><img class="block h-8 w-8" src="../../assets/logo.svg" alt="bug icon"></a>
      <button class="rounded-full flex" @click="toggleMode">
        <span v-if="mode === 'light'" class="material-icons text-white">mode_night</span>
        <span v-if="mode === 'dark'" class="material-icons text-white">wb_sunny</span>
      </button>
    </div>
  </header>
</template>
