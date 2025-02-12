<template>
  <div class="parent-test">
    <CanvasEditor
      ref="canvasEditor"
      :parentContent="parentContent"
      :view="view"
      @save-content="handleSaveCanvasEditorContent"
    />

    <button
      style="
        width: 80px;
        height: 40px;
        border: 2px solid #2b4b6b;
        margin-right: 20px;
        float: right;
      "
      @click="handleSaveContent"
    >
      保 存
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import CanvasEditor from './view/canvas-editor/index.vue'

const parentContent = ref<any>(undefined)
const content = ref<any>(undefined)
const view = ref<string | undefined>(undefined)

onMounted(() => {
  console.log('模拟父组件向后端请求数据, 传递给子组件')
  getEditorContent()
  view.value = 'parent'
})

const getEditorContent = () => {
  parentContent.value = {
    header: [
      {
        value: '父类传递的数据',
        size: 12,
        bold: false,
        color: 'rgb(33, 53, 71)',
        italic: false,
      },
    ],
    main: [
      {
        value: '父类传递的数据 通过后端获取!',
        size: 40,
        bold: true,
      },
    ],
  }
}

const canvasEditor = ref<InstanceType<typeof CanvasEditor> | null>(null)

const handleSaveContent = () => {
  ;(canvasEditor.value as any).saveContent()
}

const handleSaveCanvasEditorContent = (data: any) => {
  console.log('从子组件接收到的数据:', data)
  content.value = JSON.stringify(data)
  console.log('转换后的数据 content 为: ', content.value)
}
</script>

<style scoped>
.parent-test {
  width: 100%;
}
</style>
