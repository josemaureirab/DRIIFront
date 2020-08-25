
 <template>
  <div>
    <v-row align="center">
      <v-col cols="12" align="right">
        <v-btn href="/Principal" class="mx-2" fab dark color="indigo">
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </v-col>
      <v-expansion-panels color="red" multiple v-model="panel">
        <v-expansion-panel>
          <v-expansion-panel-header>
            <v-alert color="blue" dark icon="mdi-bookmark-remove" dense>Formularios Guardadas</v-alert>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
              <v-list> 
      <v-list-item
        v-for="item in items2"
        :key="item.title"
     
      >
        <v-list-item-avatar>
         <v-icon color="grey lighten-1">mdi-folder</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
          <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
           <v-row cols="12" justify="center">
                          <v-col cols="3" align="center">
                            <v-btn icon color="orange">
                              <v-icon>mdi-eye</v-icon>
                            </v-btn>
                          </v-col>
                          <v-col cols="3" align="center">
                            <v-btn icon color="orange">
                              <v-icon>mdi-tooltip-edit</v-icon>
                            </v-btn>
                          </v-col>
                          <v-col cols="3" align="center">
                            <v-btn icon color="orange">
                              <v-icon>mdi-delete</v-icon>
                            </v-btn>
                          </v-col>
                          <v-col cols="3" align="center">
                            <v-btn icon color="orange">
                              <v-icon>mdi-clipboard-check</v-icon>
                            </v-btn>
                          </v-col>
                        </v-row>
        </v-list-item-action>
      </v-list-item>
    </v-list>

                    
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>
            <v-alert color="green" dark icon="mdi-bookmark-remove" dense>Formularios Publicadas</v-alert>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
                <v-list> 
      <v-list-item
        v-for="item in items2"
        :key="item.title"
     
      >
        <v-list-item-avatar>
         <v-icon color="grey lighten-1">mdi-folder</v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
          <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
           <v-row cols="12" justify="center">
                          <v-col cols="3" align="center">
                            <v-btn icon color="orange">
                              <v-icon>mdi-eye</v-icon>
                            </v-btn>
                          </v-col>
                          <v-col cols="3" align="center">
                            <v-btn icon color="orange">
                              <v-icon>mdi-tooltip-edit</v-icon>
                            </v-btn>
                          </v-col>
                          <v-col cols="3" align="center">
                            <v-btn icon color="orange">
                              <v-icon>mdi-delete</v-icon>
                            </v-btn>
                          </v-col>
                          <v-col cols="3" align="center">
                            <v-btn icon color="orange">
                              <v-icon>mdi-clipboard-check</v-icon>
                            </v-btn>
                          </v-col>
                        </v-row>
        </v-list-item-action>
      </v-list-item>
    </v-list>

              
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    panel: [0, 1],
    items: [
        { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Photos', subtitle: 'Jan 9, 2014' },
        { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Recipes', subtitle: 'Jan 17, 2014' },
        { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Work', subtitle: 'Jan 28, 2014' },
      ],
      items2: [
        { icon: 'assignment', iconClass: 'blue white--text', title: 'Vacation itinerary', subtitle: 'Jan 20, 2014' },
        { icon: 'call_to_action', iconClass: 'amber white--text', title: 'Kitchen remodel', subtitle: 'Jan 10, 2014' },
      ],
  }),
};

// TODO : IMAGENES ESTANDERIZADAS ( ANOTARLO Y BUSCARLO!!)
</script>




