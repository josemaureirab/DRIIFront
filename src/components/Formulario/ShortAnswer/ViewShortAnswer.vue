 <template>
  <v-card>
    <v-container>
      <v-row justify="space-between">
        <v-col>
          <v-card-text>
            <v-subheader class="pa-0">
              {{this.item.tittle}}
              <v-tooltip v-if="item.help !== ''" top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon color="grey lighten-1">mdi-help</v-icon>
                  </v-btn>
                </template>
                <span>{{this.item.help}}</span>
              </v-tooltip>
            </v-subheader>
            <v-text-field
              v-if="item.selectionType == 'Respuesta Corta'"
              label="Respuesta Corta"
              single-line
              solo
            />
            <v-text-field v-if="item.selectionType == 'Correo'" label="Correo" single-line solo />

            <v-file-input
              v-if="item.selectionType == 'Archivo'"
              color="deep-purple accent-4"
              counter
              label="File input"
              multiple
              placeholder="Select your files"
              prepend-icon="mdi-paperclip"
              outlined
              :show-size="1000"
            />

            <v-text-field v-if="item.selectionType == 'Rut'" label="Rut" single-line solo />

            <v-text-field v-if="item.selectionType == 'Celular'" label="Celular" single-line solo />

            <v-menu
              v-if="item.selectionType == 'Fecha'"
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="Picker in menu"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
              </v-date-picker>
            </v-menu>
            <v-card-subtitle v-if="item.required == false" single-line solo>Pregunta Obligatoria</v-card-subtitle>
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
              <v-btn icon v-on:click="buttonDelete">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-col>

            <v-col class="px-0">
              <v-btn icon v-on:click="buttonCopy">
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
//TODO: CAMBIAR COMPONENTES A CARD PARA REUTILIZAR!
import DialogEditShortAnswer from "./DialogEditShortAnswer";
import axios from "axios";
import { mapState , mapActions } from "vuex";
import route from '@/router';

export default {
  components: {
    DialogEditShortAnswer,
  },

  props: {
    item: Object,
  },

 computed: {
      ...mapState(["infoQuestion"]),
    idQuestion: {
      get() {
        return this.$store.state.idQuestion;
      },
      set(payload) {
        this.$store.commit("updateIdQuestion", payload);
      },
    },
 },

  methods: {
    ...mapActions(['getQuestions']),

    
     buttonEdit() {
      this.idQuestion = this.item.id
    

      route.push({
          name:'DialogEditShortAnswer',
      })
    },

  async buttonCopy(){
await this.axios
        .post("http://142.93.79.50:8080/backend-drii/questions/create", {
          tittle: this.item.name,
          questionType: this.item.questionType,
          selectionType: this.item.select,
          required: this.item.answerRequired,
          form: this.item.formulario,
          help: this.item.help,
          section: this.item.selectSeccion
        })
        .then(function (response) {
          console.log(response);

        });
        this.getQuestions()           
  },

    async buttonDelete () {
      await this.axios
        .delete(
          "http://142.93.79.50:8080/backend-drii/questions/delete/" +
            this.item.id
        )
        .then(function (response) {
          console.log(response);
        });
      await this.getQuestions();
    },
  },
  data: () => ({
    date: "",
    menu: "",
  }),
};
</script>