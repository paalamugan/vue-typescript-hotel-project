<template>
  <v-app>
    <v-app-bar app color="teal darken-4" dark>
      <div
        class="d-flex justify-center align-center"
        :style="[{ cursor: 'pointer' }]"
        @click="goToHome()"
      >
        <v-icon large color="white"> mdi-domain </v-icon>
        <v-toolbar-title class="mx-5">Hotels Management</v-toolbar-title>
      </div>
      <v-spacer></v-spacer>
      <v-btn icon @click="changeTheme()">
        <v-icon v-if="isDarkMode"> mdi-moon-waning-crescent </v-icon>
        <v-icon v-else> mdi-white-balance-sunny </v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <v-footer dark color="teal darken-4">
      <v-card class="flex" flat tile color="teal darken-4">
        <v-card-text class="py-2 white--text text-center">
          Paalamugan — <strong>Copyright &copy; {{ year }}</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    isDarkMode: false,
  }),

  computed: {
    year() {
      return new Date().getFullYear();
    },
  },

  methods: {
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.isDarkMode = this.$vuetify.theme.dark;
    },
    goToHome() {
      this.$router.push("/");
    },
  },

  mounted() {
    const isDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-schema: dark)").matches;
    this.$vuetify.theme.dark = isDarkMode;
    this.isDarkMode = isDarkMode;
  },
});
</script>
