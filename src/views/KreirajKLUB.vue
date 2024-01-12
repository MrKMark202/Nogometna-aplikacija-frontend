<template>
    <div>
        <div class="naslov">
            <h1>Kreiraj klub</h1>
        </div>
    
        <div class="obrub" data-app>
          <v-form ref="form" v-model="form" style="margin-top: 20px;">
            <v-text-field v-model="clubName" label="Naziv kluba" variant="underlined" :rules="[rules.required]"></v-text-field>
            <v-text-field v-model="clubYear" label="Godina osnivanja" variant="underlined" :rules="[rules.required]"></v-text-field>
            <v-text-field v-model="clubCountry" label="Država" variant="underlined" :rules="[rules.required]"></v-text-field>

            <v-row class="row2">
              <v-col>
                  <div>
                      <v-select
                        :rules="[rules.required]"
                        :items="ligas"
                        label="Izaberite ligu za koju kreirate klub!"
                        v-model="selectedLiga"
                        class="vselect"
                      ></v-select>
                      <br><br>
                  </div>
              </v-col>
            </v-row>
          </v-form>
            <h3 class="grb">Grb Kluba</h3>

            <input 
              class="butot" 
              type="file" 
              ref="KlubPictureFile" 
            />

            <v-btn 
              @click="UploadKlubImageToStorage()" 
              elevation="2" 
              :disabled="!form"
              :loading="isLoading"
              style="background-color: green; color: white; margin-top:40px; margin-left: 85% !important;">Kreiraj!</v-btn>
        </div>
    </div>
</template>

<script>
  export default {
    name: "CreateClub",
    data: () => ({
      clubName: null,
      clubCountry: null,
      clubYear: null,
      ligas: [],
      selectedLiga: '',
      KlubPictureURL: '',
      form: false,
      isLoading: false,
      rules: {
        required: v => !!v || 'This field is required'
      },
    }),

    methods: {
      clearFormData() {
			  this.clubName = null;
			  this.clubYear = null;
			  this.clubCountry = null;
        this.selectedLiga = '';
		  },
      },
  };
</script>


<style>
  .obrub
  {
    border: 2px solid white;
    background-color: white;
    padding: 50px;
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 100px; 
  }

  .v-text-field
  {
    font-size: 20px !important;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight: bold;
  }

  .row2
  {
    color: black;
    text-align: center;
  }

  .vselect
  {
    font-size: 20px !important;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif !important;
  }
</style>