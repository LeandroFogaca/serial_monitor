<template>

<v-container>

    
    <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Ferramentas
          </v-list-item-title>
          <v-list-item-subtitle>
            configuração
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          @click= "list"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
          
          <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
           </v-list-item-icon>
        
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-radio-group 
        class="ms-6 mt-6"
        v-model="RadioGroup"
        >
        
        <v-radio
          v-for="port in ports"
          :key="port.name"
          :label="`Porta: ${port.name}`"
          :value="port.name"
          :class="`text-caption`"
        ></v-radio>
      </v-radio-group>
    

      <div class="text-center">
      
      <v-btn
      rounded
      color="primary"
      dark
      class="pa-2 ma-6"
      @click="connect"
      >
          Conectar
        </v-btn>
      </div>
    
      <v-divider></v-divider>

      </v-container>
</template>

<script>


import { fnSerialPort } from '../renderer';


  export default {
    data () {
        return {
            items: [
                { title: 'Scannear portas', icon: "mdi-magnify" },
            ],
            ports: [ 
              
                ],
            right: null,
            RadioGroup: [],
      }
    },
     methods: {
       
       list: async function () {
         
            await fnSerialPort.listSerialPorts()
            .then((res) => {
              this.ports = res.map(
                res => ({name: res.path}))
                })
         },
        connect: async function () {

          if(this.RadioGroup.length !== 0){
            await fnSerialPort.connect(this.RadioGroup)
            
          }else{
            console.log("selecione a porta");
          }


            
            
          }

         }
  }
              
            
            


</script>