
<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-list id="example-1" flat mandatory="false">
      <v-list-item-group   v-model="model" v-bind:color="colorSelect">
        <v-list-item
          v-for="(item, i) in items"
          :key="i" v-on:click="changeColor(i)"
        >
          <v-list-item-icon >
            <v-icon  v-text="item.icon"></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>



       <div id="example" class="text-center">
     <v-btn  v-on:click="clickButton" v-bind:disabled="disableButton" class="mx-4 mt-4" fab dark v-bind:color="colorButton">
        <v-icon dark>mdi-plus</v-icon>
        </v-btn>
        </div>
    </v-list>
   
  </v-card>
</template>

<script>

  export default {


 methods:  {
      name: 'OptionPalettes',
      
      clickButton: function (){
        this.isClick= false,
        this.idClick = -1,
        this.colorSelect="", // volver a ser el original.
        this.colorButton =  "rgb(102,99,102)"
     
        // apagar el hover
      },

      changeColor: function(i){

        if(this.idClick == i && this.isClick){
    
             this.isClick= false
             this.colorButton =  "rgb(102,99,102)"
             this.colorSelect= ""
        }
        else{
   
          this.isClick =true
          this.idClick = i
          this.colorButton = "rgb(233, 142, 76)"
          this.colorSelect= "rgb(233, 142, 76)"
        }
      
 }
 }
      ,
    data: () => ({
      // TODO: Arreglar Disabled button
      // TODO: al momento de apretar nuevamente el ultimo select (ya seleccionado y enviado) no cambia de color el select
      disabledButton: true,
      isClick: false,
      idClick: -1,
      colorSelect: "",
      colorButton: "rgb(102,99,102)",
          
      items: [
        {
          icon: 'mdi-card-text',
          text: 'Respuesta Corta',
        },
        {
          icon: 'mdi-format-list-checks',
          text: 'Selección Simple',
        },
        {
          icon: 'mdi-format-list-bulleted',
          text: 'Selección Multiple',
        },
         {
        icon: 'mdi-apps',
        text: 'Cuadricula Opciones',
        },
        {
        icon: 'mdi-cloud-upload-outline',
        text: 'Subir Archivo',
        },
        {
        icon: 'mdi-calendar-month',
        text: 'Fecha',
        },
          {
        icon: 'mdi-shape-rectangle-plus',
        text: 'Sección',
        },

      ],
      model: 1,
    }),
  }
</script>