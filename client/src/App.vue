<script setup>
import Header from "./components/shared/Header.vue"
import IssueList from "./components/IssueList.vue"
import Footer from "./components/shared/Footer.vue"
</script>

<template>
  <Header />
  <main class="p-4 max-w-4xl mx-auto">
    <IssueList />
  </main>
  <Footer />
</template>
