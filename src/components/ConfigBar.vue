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
          @click= "item.click"
        >

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
          
          <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
           </v-list-item-icon>
        
        </v-list-item>
      </v-list>

      </v-container>
</template>

<script>

import { listSerialPorts } from "../renderer";


let list = listSerialPorts


  export default {
    data () {
      return {
        items: [
          { title: 'Scannear portas', icon: "fas fa-search", click: list },
        ],
        right: null,
      }
    },
  }
</script>