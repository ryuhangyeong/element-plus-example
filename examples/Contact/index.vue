<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const ruleFormRef = ref<FormInstance>()

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const rules = reactive<FormRules>({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  email: [
    {
      required: true,
      message: 'Please input Activity email',
      trigger: 'blur',
    },
  ],
  message: [
    {
      required: true,
      message: 'Please input Activity message',
      trigger: 'blur',
    },
  ],
})

const onSubmit = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<template>
  <el-card
    shadow="never"
    class="w-full sm:w-[680px]"
    :body-style="{ padding: '30px' }"
  >
    <div class="text-center">
      <h2 class="m-0">Get in touch</h2>
      <p class="m-0 mt-[10px] text-[#868e96] text-[14px]">
        Contact the Element Plus development team
      </p>

      <el-form
        ref="ruleFormRef"
        :model="form"
        :rules="rules"
        label-position="top"
        class="mt-[30px]"
      >
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="Name" prop="name">
              <el-input v-model="form.name" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="Email" prop="email">
              <el-input v-model="form.email" />
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="Message" prop="message">
              <el-input v-model="form.message" type="textarea" :rows="8" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-button
          type="primary"
          @click="onSubmit(ruleFormRef)"
          class="mt-[10px] w-full"
        >
          Submit
        </el-button>
      </el-form>
    </div>
  </el-card>
</template>
