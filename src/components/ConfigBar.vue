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

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="port in ports"
          :key="port.name"
          link
        >

          <v-list-item-content>
            <v-list-item-title>{{ ports.name }}</v-list-item-title>
          </v-list-item-content>
          
          <v-list-item-icon>
              <v-icon>{{ ports.isOpen }}</v-icon>
           </v-list-item-icon>
        
        </v-list-item>
      </v-list>
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
            { name: "COM01", isOpen: "TRUE"}
            ],
        right: null,
     
      }
    },
     methods: {
         list: function () {
         fnSerialPort.listSerialPorts()
         console.log(this.ports[0].name);
         }
        }
  }
</script>