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
  <div class="p-[20px] w-full lg:h-[600px] bg-[#409eff] dark:bg-[#242424]">
    <div class="flex items-center w-full h-full">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <div class="flex flex-col justify-center h-full text-white">
            <h2 class="m-0 text-[28px]">Technical Support Request</h2>
            <p class="m-0 my-[20px]">We are here to help.</p>
            <ul class="m-0 p-0 list-none">
              <li class="flex items-center mb-[20px]">
                <el-icon class="text-[30px]">
                  <Location />
                </el-icon>
                <span class="ml-[8px]">Global</span>
              </li>
              <li class="flex items-center mb-[20px]">
                <el-icon class="text-[30px]">
                  <Avatar />
                </el-icon>
                <span class="ml-[8px]">test@outlook.com</span>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <el-card
            shadow="never"
            class="w-full"
            :body-style="{ padding: '20px' }"
          >
            <h2 class="m-0">Get in touch</h2>
            <el-form
              ref="ruleFormRef"
              :model="form"
              :rules="rules"
              label-position="top"
              class="mt-[30px]"
            >
              <el-row :gutter="20">
                <el-col :span="24">
                  <el-form-item label="Name" prop="name">
                    <el-input v-model="form.name" />
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <el-form-item label="Email" prop="email">
                    <el-input v-model="form.email" />
                  </el-form-item>
                </el-col>
                <el-col :span="24">
                  <el-form-item label="Message" prop="message">
                    <el-input
                      v-model="form.message"
                      type="textarea"
                      :rows="8"
                    />
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
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
