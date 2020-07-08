 <template>
  <v-card>
    <v-container>
      <v-row justify="space-between">
        <v-col>{{children}}</v-col>
        <v-col cols="auto" class="text-center pl-0">
          <v-row class="flex-column ma-0 fill-height" justify="center">
            <v-col class="px-0">
              <v-btn icon>
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
  props: {
    children: Object
  }
};
</script>