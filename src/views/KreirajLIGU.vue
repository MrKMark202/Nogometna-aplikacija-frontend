<template>
    <div>
        <div class="naslov">
            <h1>Kreiraj ligu</h1>
        </div>
    
        <div class="obrub">
            <v-form ref="form" v-model="form" style="margin-top: 20px;">
                <v-text-field v-model="ligaName" label="Naziv Lige" variant="underlined" :rules="[rules.required]"></v-text-field>
                <v-text-field v-model="ligaYear" label="Godina osnivanja" variant="underlined" :rules="[rules.required]"></v-text-field>
                <v-text-field v-model="ligaCountry" label="Država" variant="underlined" :rules="[rules.required]"></v-text-field>
            </v-form>

            <h3 class="grb">Grb Lige</h3>

            <input 
                class="butot" 
                type="file" 
                ref="ligaPictureFile" 
            />
 
            <v-btn 
                @click="UploadLigaImageToStorage() " 
                elevation="2" class="btn_style" 
                style="background-color: green; color: white; margin-top:40px; margin-left: 85% !important;"
                :disabled="!form"
                :loading="isLoading"
            >Kreiraj!</v-btn>
        </div>
    </div>
</template>

<script>
    export default {
        name: "createLIGA",
        data: () => ({
            ligaName: null,
            ligaYear: null,
            ligaCountry: null,
            form: false,
            isLoading: false,
            LigaPictureURL: "",
            rules: {
                required: v => !!v || 'This field is required'
            },
        }),

        methods: {
            clearFormData() {
                this.ligaName = null;
                this.ligaYear = null;
                this.ligaCountry = null;
            },
        },
    }
</script>


<style>
    .obrub
    {
        border: 2px solid white;
        background-color: white;
        padding: 50px;
        margin-left: 25% !important;
        margin-right: 25% !important;
        margin-top: 100px;

        
    }

    .v-text-field
    {
        font-size: 20px;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
        font-weight: bold;
    }

    .butot
    {
        margin-top: 20px;
        background-color: green;
        color: black;
        font-size: 20px;
        font-weight: bold;
    }

    .grb
    {
        margin-top: 20px;
        color: black;
        font-size: 30px;
    }
</style>