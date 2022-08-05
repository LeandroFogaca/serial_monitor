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

      <div class="text-center" v-show="showSettings">
        
        <v-radio-group 
        class="ms-6 mt- 6"
        v-model="port"
        >
        
          <v-radio
            v-for="port in ports"
            :key="port.name"
            :label="`Porta: ${port.name}`"
            :value="port.name"
            :class="`text-caption`"
          ></v-radio>
        </v-radio-group>
    

        
        
        <v-select
        v-model="baudRate"
        :items="baudRates"
        rounded
        dense
        label="baudRate"
        outlined
        ></v-select>
        
        <v-row>
          
          <v-btn
          rounded
          color="primary"
          @click="connect"
          class="pa-2 ma-6"
          dark
          >Conectar</v-btn>
      
          <v-btn
          rounded
          color="primary"
          @click="disconnect"
          class="pa-2 ma-6"
          dark
          >Desconectar</v-btn>
      
        </v-row>
      
      </div>
    
      <v-divider></v-divider>

      <div class="text-center pa-6" >

        <v-badge
              inline
              :color= "isOpen"

              >
              Porta Aberta:
              </v-badge>
</div>

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
            port: [],
            baudRates: [300, 600, 1200, 2400, 4800, 9600, 14400, 19200, 28800, 38400, 57600, 115200],
            baudRate: [],
            PortOpened: [],
            showSettings: false,
           
      }
    },
     methods: {
       
        list: async function () {
         
            await fnSerialPort.listSerialPorts()
            .then((res) => {
              this.ports = res.map(
                res => ({name: res.path}))
                }).then(this.showSettings = true)
         },

        connect: async function () {

          if(this.port.length !== 0){
            await fnSerialPort.connect(this.port, this.baudRate).then((res) => {
              this.PortOpened = res
              console.log(res)
          })
            
          }else{
            console.log("selecione a porta");
          }
          },

         disconnect: async function () {
           
           if (this.PortOpened.isOpen == true) {
             
             this.PortOpened.close(()=> {console.log("Porta Fechada")})
             }

         }
     },
     computed: {

      isOpen: function () {
        
        let e
        if (this.PortOpened.isOpen == true) {
          
          e = "green"
          
        } 
        
        if (this.PortOpened.isOpen !== true) {
          
          e = "red"
          
        }

        return e

     },
  }
}
</script>