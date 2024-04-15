<script setup>
import {mdiViewList} from '@mdi/js'
import SectionMain from '@/components/SectionMain.vue'
import TableSampleClients from '@/components/TableSampleClients.vue'
import CardBox from '@/components/CardBox.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiViewList" title="Danh sách sản phẩm" main>
      </SectionTitleLineWithButton>

      <CardBox class="mb-6" has-table>
        <TableSampleClients checkable />
      </CardBox>
    </SectionMain>
  </LayoutAuthenticated>
</template>
