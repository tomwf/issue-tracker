<script>
import Title from "./Title.vue"
import Issue from "./Issue.vue"

export default {
  components: {
    Title,
    Issue
  },
  data() {
    return {
      issues: [],
    }
  },
  methods: {
    fetchData() {
      fetch('/api/issues/apitest')
        .then(res => res.json())
        .then(data => this.issues = data)
        .catch(err => console.error(err))
    }
  },
  mounted() {
    this.fetchData()
  }
}
</script>

<template>
  <Title :count="issues.length"/>

  <div v-if="issues.length">
    <div v-for="issue in issues">
      <Issue
        :title="issue.issue_title"
        :text="issue.issue_text"
        :createdBy="issue.created_by"
        :assignedTo="issue.assigned_to"
        :statusText="issue.status_text"
        :open="issue.open"
        :date="issue.created_on"
        :id="issue._id"
      /> 
    </div>
  </div>
  <div v-else>Empty...</div>
</template>
