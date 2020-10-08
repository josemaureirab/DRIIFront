<template>
  <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :color="item.color"
      :icon="item.icon"
    
      fill-dot
    >
      <v-card
        :color="item.color"
        dark
    
      >
        <v-card-title class="title"> {{item.text}}</v-card-title>
       
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          text: 'Formulario Enviado',
          color: 'green lighten-2',
          icon: 'mdi-star',
        },
        {
          text: 'Revisando Formulario',
          color: 'indigo darken-1',
          icon: 'mdi-book-variant',
        },
        {
          text: 'Respuesta',
          color: 'grey lighten-1',
          icon: 'mdi-airballoon',
        },
      
      ],
    }),
  }
</script>