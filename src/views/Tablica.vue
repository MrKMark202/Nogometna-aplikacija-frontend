<template>
    <div>
      <div data-app class="obrub1">
        <v-row >
          <v-col cols="2" v-if="selectedImageURL">
            <v-img :src="selectedImageURL" class="image-box"></v-img>
          </v-col>
          
          <v-col cols="4" >
            <div class="naslov" style="color: black !important; margin-top: 0px !important">
              <h1>Tablica</h1>
            </div>
          </v-col>
        </v-row>
       
        <div class="grid-container2">
          <v-btn class="grid-item4" @click="izbrisiLigu()" elevation="2" style="background-color: red; color: white; margin-top:40px; font-size: 30px;">Izbriši ligu!</v-btn>
          <v-btn class="grid-item4" @click="izbrisiKlub()" elevation="2" style="background-color: red; color: white; margin-top:40px; font-size: 30px;">Izbriši klub!</v-btn>
            <v-select
              class="grid-item4"
              label="Izaberite ligu za prikazati!"
              v-model="selectedLiga"
              style="width: 350px;"
            ></v-select>

            <v-select
              class="grid-item4"
              label="Izaberite klub!"
              v-model="selectedKlub"
              style="width: 350px;"
              ></v-select>
        </div>
                
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
          class="search"
        ></v-text-field>
            

        <v-data-table
          :headers="headers"
          :items="podaci"
          :search="search"
          style="font-weight: bold; text-align: center;"
          item-key="nt"
          class="elevation-1"
          loading
          loading-text="Izaberite ligu!"
        >
          <template v-slot:item.grb="{ item }">
            <v-img :src="item.grb" class="klub-grb"></v-img>
          </template>
         </v-data-table>
      </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        selectedImageURL: '',
        headers: [
            { text: 'Pozicija', value: 'pz'},
            { text: 'Grb', value: 'grb'},
            {
                text: 'Naziv tima',
                align: 'start',
                value: 'nt',
            },
            { text: 'Odigranih dvoboja', value: 'od' },
            { text: 'Postignuti pogodci', value: 'pp' },
            { text: 'Primljeni golovi', value: 'pg' },
            { text: 'Gol razlika', value: 'gr'},
            { text: 'Bodovi', value: 'bd', sortable: true},
        ],
        podaci: [],
      }
    },
  }
</script>

<style scoped>
  .obrub1
  {
    border: 2px solid white;
    background-color: white;
    padding: 50px;
    margin-left: 200px;
    margin-right: 200px;
    margin-bottom: 100px;
  }

  .grid-container2 {
    display: grid;
    grid-template-columns: auto auto;
    background-color: white;
    justify-content: space-between;
    align-items: center;
    margin-left: 10%;
    margin-right: 10%;
  }
  .grid-item4 {
    background-color: white;
    padding: 20px;
  }

  .klub-grb {
  max-width: 50px;
  max-height: 50px;
}
  .search {
    margin-left: 30%;
    margin-right: 30%;
    margin-bottom: 30px;
  }
  .image-box {
  width: 200px;
  height: 200px; 
  } 
</style>