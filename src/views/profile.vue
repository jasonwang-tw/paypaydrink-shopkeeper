<template>
  <div id="home" class="text-main-500 h-full">
    <topmenu />
    <div class="adminUi bg-lightblue-bg pt-10">
      <router-link to="/" class="w-1/3 mb-5 no-underline block mx-auto"
        ><i class="bi bi-chevron-left mr-3"></i>返回</router-link
      >
      <div class="w-1/3 mx-auto bg-white p-5 rounded-lg border border-lightblue-high">
        <h3>店主基本資料</h3>
        <hr />
        <ul class="shop_profile list-none pl-0">
          <li><span>店主姓名</span>jasonwang</li>
          <li><span>E-mail</span>Bobsad@fdsfd.com</li>
          <li><span>連絡電話</span>+886 8825252</li>
          <li><span>加盟方案</span>A</li>
          <li><span>加盟金額</span>$ 1,000,000</li>
          <li><span>加盟日期</span>2021/7/11</li>
        </ul>
        <hr />
        <div class="flex">
          <span class="flex-shrink-0 mr-8 inline-block text-blue-500">變更密碼</span>
          <div>
            <input type="text" placeholder="請輸入新密碼" class="mb-3" />
            <input type="text" placeholder="請再輸入新密碼" class="mb-3" />
            <button
              type="submit"
              class="btn-dark-blue w-1/6"
              @click="password_success_hide = false"
            >
              送出
            </button>
          </div>
        </div>
        <hr />
        如對營運或有任何相關問題，請撥打02-27857788，或來信
        <a href="mailto:service@paypay.com">service@paypay.com</a>，我們將有專人為您服務。
      </div>
    </div>
    <!-- 彈跳通知 -->
    <div
      class="fixed top-0 left-0 bg-black bg-opacity-20 w-full h-full z-20 flex items-center justify-center"
      :class="{ hidden: password_success_hide }"
    >
      <div class="bg-white w-1/4 -mt-40 text-center p-10 rounded-lg shadow-lg">
        <h3>密碼修改成功</h3>
        <p>下次登入請使用新密碼</p>
        <div class="btn-dark-blue w-1/4 mx-auto mt-10" @click="password_success_hide = true">
          確認
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import topmenu from '@/components/topmenu.vue'

  export default {
    name: 'home',
    components: {
      topmenu
    },
    data() {
      return {
        password_success_hide: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .adminUi {
    height: calc(100% - 64px);
  }
  .shop_profile {
    li {
      padding: 0.5rem 0;
      span {
        width: 100px;
        display: inline-block;
        color: var(--color-blue-500);
      }
    }
  }
</style>
