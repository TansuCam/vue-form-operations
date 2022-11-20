<template>
  <div class="login-form"> 
      <div class="d-flex justify-content-between">
        <div class="w-100 d-flex justify-content-center">
         <img class="loginphoto" src="../assets/login.svg">
        </div>
        <div class="w-100 d-flex align-items-center justify-content-center login-container">
          <div>
            <h3>Giriş Yap</h3>            
            <p class="mb-5 mt-2">Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing.</p>
            <form @submit.prevent="loginUser">
              <div class="form-group mb-4">
                <input id="inputEmail" type="text" placeholder="Kullanıcı Kodu" required="" autofocus="" v-model="usercode" class="form-control border-0 shadow-sm px-4 py-2">
              </div>
              <div class="form-group mb-5">
                <i class="bi bi-0-circle"></i>
                <input id="inputPass" type="password" placeholder="Şifre" required="" autofocus="" class="form-control border-0 shadow-sm px-4 py-2">
              </div>
              <div class="d-flex flex-row-reverse">

              <Button type="submit" name="Giriş Yap"/>
              </div>
            </form>
          </div>
          
        </div>     
    </div>
  </div>
</template>


<script>
import Button from '@/components/Button.vue'

export default {
  name: 'Login',
  components: {
    Button
  },
  data(){
    return{
      usercode:""
    }
  },
  methods: {
    loginUser(){
      var time = new Date()
      time.toLocaleString()

      localStorage.setItem("usercode",this.usercode)
      localStorage.setItem("logintime",time.toLocaleString())
      this.$router.push('/home');
    }
  }, 
}
</script>
