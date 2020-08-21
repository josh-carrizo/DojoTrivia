<template> 
<div class="register"> 
    <!-- Header -->
    <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
        <b-container>
            <div class="header-body text-center mb-7">
                <b-row class="justify-content-center">
                    <b-col xl="5" lg="6" md="8" class="px-5">
                        <h1 class="text-black">Welcome!</h1>
                        <p class="text-lead text-black">Registrate!</p>
                    </b-col>
                </b-row>
            </div>
        </b-container>
        <div class="separator separator-bottom separator-skew zindex-100">
            <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <polygon class="adorno" points="2560 0 2560 100 0 100"></polygon>
            </svg>
        </div>
    </div>

    <b-row class=" body-row">
        <b-col></b-col>
        <b-col cols="5">
            <router-link class="link-inicio" v-bind:to="{path: '/login'}">
                <div>
                    <b-button pill variant="outline-danger" block >Do you have account? Get Login!</b-button>
                </div>
            </router-link>
            <br>
            <b-card bg-variant="light" no-body class="bg-secondary border-0 mb-0">
                <b-card-body class="px-lg-5 py-lg-5">
                    <!-- REGISTRO USUARIOS-->
                    <b-form @submit.prevent="CreateUser" @reset.prevent="onReset"  v-if="show">
                        <b-form-group id="input-group-1" label="Your Name:" label-for="input-1">
                            <b-form-input id="input-1" v-model="formCreate.name" required   placeholder="Enter name"></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-2" label="Email address:" label-for="input-2"   description="We'll never share your email with anyone else." class="text-white">
                            <b-form-input id="input-2" v-model="formCreate.email" type="email" required placeholder="Enter email"></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-3" label="Your Password:" label-for="input-3"  >
                            <b-form-input type="password" class="form-control" label-for="input-3" name="password" required v-model="formCreate.password" placeholder="Enter your password"></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-4" label="Repeat Your Password:" label-for="input-4"  >
                            <b-form-input type="password" class="form-control" label-for="input-4" name="RepeatPassword" required v-model="formCreate.RepeatPassword" placeholder="Repeat your password"></b-form-input>
                        </b-form-group>

                        <b-button-group class="mx-1">
                            <b-button type="submit" variant="outline-info">Create user</b-button>
                        </b-button-group>
                        <b-button-group class="mx-1">
                            <b-button type="reset" variant="outline-danger">Reset</b-button>
                        </b-button-group>
                    </b-form>
                </b-card-body>
            </b-card>
        </b-col>
        <b-col></b-col>
    </b-row>
</div>    
    
</template>

<script>



export default {
    name:'Registro',
    data() {
        return{
            formCreate: {
                password:'',
                RepeatPassword:'',
                email: '',
                name: '',
            },
            
            show: true
        }

    },
    computed: {
    error() {
      return this.$store.state.error;
    }
    },
    methods: {
        CreateUser() {

            if(this.formCreate.password != this.formCreate.RepeatPassword){
                alert('Ambas contraseñas deben coincidir');
                return;

            } 
            const datos= {name:this.formCreate.name, email:this.formCreate.email, password: this.formCreate.password}
            this.$store.dispatch('registerAction',datos)

        },
        LogOut(){
            this.$store.dispatch('logOut')

        },
        onReset(evt) {
            evt.preventDefault()
            // Reset our form values

            this.formCreate.email = '';
            this.formCreate.name = '';
            this.formCreate.password = '';
            this.formCreate.RepeatPassword = '';

        }
    }
}


</script>
<style scoped>
.body-row{
    background-color: #17a2b8;
}
.adorno{
    fill: #17a2b8;
}

.text-black{
    color:black
}

.text-white{
    color:white
}

card{
    background-color: cadetblue;
    opacity:80%;
}
</style>