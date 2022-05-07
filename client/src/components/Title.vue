<script>
import CreateIssueModal from "./CreateIssueModal.vue"
import UpdateIssueModal from "./UpdateIssueModal.vue"
import DeleteIssueModal from "./DeleteIssueModal.vue"
import Menu from "./Menu.vue"

export default {
  props: {
    count: Number
  },
  components: {
    CreateIssueModal,
    UpdateIssueModal,
    DeleteIssueModal,
    Menu
  }
}
</script>

<template>
  <div class="flex justify-between items-center mb-8">
    <div>
      <h1 class="text-2xl font-bold">Issues</h1>
      <p class="text-gray">{{ count }} {{ count > 1 ? 'issues' : 'issue' }}</p>
    </div>
    <Menu />
  </div>
  <CreateIssueModal />
  <UpdateIssueModal />
  <DeleteIssueModal />
</template>
