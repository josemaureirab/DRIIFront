 <template>
  <v-card>
    <v-container>
      <v-row justify="space-between">
        <v-col>
          {{children}}
          <v-card-text>
            <v-subheader class="pa-0">{{titleQuestion}}</v-subheader>

            <v-file-input
              v-model="files"
              color="deep-purple accent-4"
              counter
              label="File input"
              multiple
              placeholder="Select your files"
              prepend-icon="mdi-paperclip"
              outlined
              :show-size="1000"
            >
              <template v-slot:selection="{ index, text }">
                <v-chip v-if="index < 2" color="deep-purple accent-4" dark label small>{{ text }}</v-chip>

                <span
                  v-else-if="index === 2"
                  class="overline grey--text text--darken-3 mx-2"
                >+{{ files.length - 2 }} File(s)</span>
              </template>
            </v-file-input>
          </v-card-text>
        </v-col>

        <v-col cols="auto" class="text-center pl-0">
          <v-row class="flex-column ma-0 fill-height" justify="center">
            <v-col class="px-0">
               <v-btn icon v-on:click="buttonEdit">
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
            </v-col>

            <v-col class="px-0">
              <v-btn icon>
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-col>

            <v-col class="px-0">
              <v-btn icon>
                <v-icon>mdi-content-copy</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    
  </v-card>
</template>

<script>

  export default {
  components:{

  },
    props: {
     titleQuestion: String,
     setting: Object,
  },
  methods:{
      buttonEdit: function(){
          this.showDialogUploadFile = true;
      } 
  },
    data: () => ({
      files: [],
      showDialogUploadFile: false,
    }),
  }
</script>