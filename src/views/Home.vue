<template>
  <div class="container my-5">
      <h4>Lütfen aşağıdaki bilgileri doldurunuz.</h4>
      <button class="btn btn-primary" @click="addNewInputs">Ekle</button>
    <form @submit.prevent="saveInfo">
      <div v-for="(inputs,index) in inputs" :key="index">
        <p class=" mt-4">Form {{index+1}}</p>
        <div class="row">
          <div class="form-group mb-4 col-xl-6 col-md-12">
            <select class="form-select" v-model="inputs.il" @change="changeIller(inputs.il.id,index)">
              <option value="0" >Lütfen bir il seçiniz</option>
              <option v-for="(item,index) in data" :key="index" v-bind:value="{id:item.plaka, val:item.il}">{{item.il}}</option>
            </select>
          </div>
          <div class="form-group mb-4 col-xl-6 col-md-12" v-if="inputs.ilce.length>0" >
            <select class="form-select"  v-model="inputs.selectedIlce">
              <option value="0" >Lütfen bir ilçe seçiniz</option>
              <option  v-for="(item,i) in inputs.ilce" :key="i">{{item}}</option>
            </select>     
          </div> 
        </div> 
        <div  class="row">
          <div class="form-group mb-4 col-xl-8 col-md-12 col-sm-12">
            <input type="text" maxlength="50" placeholder="Mahalle" required=""  v-model="inputs.mahalle" class="form-control px-3 py-2">
          </div>
          <div class="form-group mb-4 col-xl-2 col-md-6 col-sm-12">
            <input type="text"  @keypress="onlyNumber" maxlength="2" placeholder="Plaka" required=""  v-model="inputs.plaka" class="form-control px-3 py-2">
          </div>
          <div class="form-group mb-4 col-xl-2 col-md-6 col-sm-12">
            <input type="text" @keypress="onlyNumber" placeholder="Nüfus" maxlength="50" required=""  v-model="inputs.nufus" class="form-control px-3 py-2">
          </div>
        </div>
      </div>
      
      <div class="d-flex flex-row-reverse">
      <Button type="submit" name="Kaydet"/>
      </div>
    </form>
    <footer class="footer">
      <div>{{this.usercode}}</div>
      <div>{{this.logintime}}</div>
      </footer>
  </div>
</template>


<script>
import Button from '@/components/Button.vue'
import data from '@/assets/il.json'

export default {
  name: 'Login',
  components: {
    Button
  }, 
  methods:{
    changeIller(ilce,index){      
      this.data.forEach(element => {
        if(element.plaka === ilce)  this.inputs[index].ilce = element.ilceleri
      });
    },

    onlyNumber ($event) {
      let keyCode = ($event.keyCode ? $event.keyCode : $event.which);
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) { 
          $event.preventDefault();
      }
    },
    
    addNewInputs(){
      this.inputs.push({
        il:"0",
        ilce:[],
        mahalle:"",
        plaka:"",
        nufus:"",
        selectedIlce:"0",
      })
    },

    saveInfo(){
      localStorage.setItem("info", JSON.stringify(this.inputs))
      this.$router.push('/detail');
    }
  },
  data(){
    return {
      selectList:[],
      usercode: localStorage.getItem('usercode'),
      logintime: localStorage.getItem('logintime'),
      inputs:[
        {
          il:"0",
          ilce:[],
          mahalle:"",
          plaka:"",
          nufus:"",
          selectedIlce:"0",
        }
      ],      
      data
      }
  }

}

</script>
