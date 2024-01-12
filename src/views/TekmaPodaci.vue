<template>
    <div data-app class="obrub1">
        <v-row >
          <v-col cols="2" v-if="selectedImageURL">
            <v-img :src="selectedImageURL" v-if="selectedImageURL" class="image-box"></v-img>
          </v-col>
          
          <v-col cols="4" >
            <div class="naslov" style="color: black !important; margin-top: 0px !important;">
              <h2>Pregled utakmica</h2>
            </div>
          </v-col>
        </v-row>

            <v-btn class="deleteBtn">Izbriši utakmicu</v-btn>

            <v-select
              label="Izaberite ligu za prikazati!"
              v-model="selectedLiga"
              style="width: 40%; margin-left: 30%;"
            ></v-select>
                
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
                class="search"
            ></v-text-field>
            

            <v-data-table
                :search="search"
                style="font-weight: bold; text-align: center;"
                class="elevation-1"
            >
            </v-data-table>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        selectedImageURL: '',
        headers: [
            { text: 'Kolo', value: 'kl'},
            { text: 'Domacin', value: 'dm'},
            { text: 'Golovi domačina', value: 'gd'},
            { text: ":", value: 'i'},
            { text: 'Golovi gostiju', value: 'gg'},
            { text: 'Gosti', value: 'gs'},
            { text: 'Liga', value: 'lg' },
            { text: 'Mjesto', value: 'ms' },
            { text: 'Stadion', value: 'std' },
            { text: 'Gledatelji', value: 'gl' },
            { text: 'Datum', value: 'dt' },
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

  .search {
    margin-left: 30%;
    margin-right: 30%;
    margin-bottom: 30px;
  }
  .image-box {
  width: 200px;
  height: 200px; 
  } 

  .deleteBtn {
    background-color: red !important;
    color: white; 
    margin-top: 30px;
    margin-bottom: 30px;
    margin-left: 37%;
    font-size: 30px;
  }
</style>