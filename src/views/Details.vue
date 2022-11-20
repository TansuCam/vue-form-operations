<template>
  <div class="container my-5">
    <h4 class="text-center mb-1">Merhaba {{this.usercode}}</h4>
    <p class="text-center mb-4">{{this.logintime}}</p>
    <div class="row">
      <div class="col-xl-5 col-md-6 mb-3" v-for="(item,i) in info" :key="i">
        <div class="card"  >
          <div class="card-header">
            <strong>İl :  {{item.il.val}}</strong>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">İlçe : {{item.selectedIlce}}</li>
            <li class="list-group-item">Nüfus Sayısı : {{item.nufus}}</li>
            <li class="list-group-item">Plaka Kodu : {{item.plaka}}</li>
          </ul>
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data(){
    return {
      usercode: localStorage.getItem('usercode'),
      logintime: localStorage.getItem('logintime'),
      info: JSON.parse(localStorage.getItem('info')),
      }
  }

}

</script>