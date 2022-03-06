<template>
  <el-dropdown trigger="click">
    <div class="user d-flex align-item-center">
      <el-avatar
        :size="50"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      ></el-avatar>
      <span class="text">Tom</span>
      <el-icon class="down"><arrow-down /></el-icon>
    </div>

    <template #dropdown>
      <el-dropdown-menu >
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts" setup>
import { ArrowDown } from "@element-plus/icons-vue";
</script>

<style lang="scss">
.user {
  height: 60px;
  padding: 0 20px;
  background: rgba(233,233,239,.5);
  .text {
    margin-left: 10px;
    font-weight: bold;
    font-size: 16px;
  }
  .down{
      margin-left: 20px;
  }
}
</style>
