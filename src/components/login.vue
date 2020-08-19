<template> 
<div class="login-"> 
    <!-- Header -->
    <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
        <b-container>
            <div class="header-body text-center mb-7">
                <b-row class="justify-content-center">
                    <b-col xl="5" lg="6" md="8" class="px-5">
                        <h1 class="text-black">Welcome!</h1>
                        <p class="text-lead text-black">blablabla</p>
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
        <router-link class="link-inicio" v-bind:to="{path: '/register'}">

            <div>
                <b-button pill variant="outline-danger" block >Don't you have account yet? Get one now!</b-button>
            </div>
        </router-link>
        <br>
            <b-card bg-variant="light" no-body class="bg-secondary border-0 mb-0">
                <b-card-header class="bg-transparent pb-5"  >
                    <div class="text-muted text-center mt-2 mb-3"><small class="text-black">Sign in with</small></div>
                    <div class="btn-wrapper text-center">
                        <a href="#" class="btn btn-neutral btn-icon">
                        <span class="btn-inner--icon"><img src="img/icons/common/github.svg"></span>
                        <span class="btn-inner--text">Github</span>
                        </a>
                        <a href="#" class="btn btn-neutral btn-icon">
                        <span class="btn-inner--icon"><img src="img/icons/common/google.svg"></span>
                        <span class="btn-inner--text">Google</span>
                        </a>
                    </div>
            </b-card-header>  
            <b-card-body class="px-lg-5 py-lg-5">
                <div class="text-center text-muted mb-4">
                    <small class="text-black">Or sign in with credentials</small>
                </div> 
            <!--Login   
            <b-form @submit="LogIn" @reset="onResetLogIn" v-if="show">-->
            <b-form @submit.prevent="LogIn" v-if="show">

                <b-form-group id="input-group-1-login" label="Your Name:" label-for="input-1-login">
                    <b-form-input id="input-1-login" v-model="formLogIn.name" required placeholder="Enter name"
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2-login" label="Email address:" label-for="input-2-login" >
                    <b-form-input id="input-2-login" v-model="formLogIn.email" type="email" required
                    placeholder="Enter email">
                    </b-form-input>
                </b-form-group>

                <b-form-group b-form-group id="input-group-3-login" label="Password:" label-for="input-3-login" >
                    <b-form-input type="password" class="form-control" label-for="input-3-login"
                        name="password" required v-model="formLogIn.password" placeholder="Enter email">
                    </b-form-input>
                </b-form-group>

                <b-button type="submit" variant="primary">Log In</b-button>
                <!--<b-button type="reset" variant="danger">Reset</b-button>-->
            </b-form>
            </b-card-body>
            </b-card>
        </b-col>
        <b-col></b-col>
        <br>
        <br>
        <br>
    </b-row>
   
</div>    
    
</template>

<script>



export default {
    name:'Registro',
    data() {
        return{
            formLogIn:{
                name:'',
                password:'',
                email:''
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

        LogIn(){
            console.log('Login user')
            const datosLogIn= {email:this.formLogIn.email, password: this.formLogIn.password}
            this.$store.dispatch('logIn',datosLogIn)
           

        },
        LogOut(){
            this.$store.dispatch('logOut')

        }
        


        }/*,
        onReset(evt) {
            evt.preventDefault()
            // Reset our form values

            this.formCreate.email = '';
            this.formCreate.name = '';
            this.formCreate.password = '';
            this.formCreate.RepeatPassword = '';

        },
        onResetLogIn(evt) {
            evt.preventDefault()
            // Reset our form values

            this.formLogIn.email = '';
            this.formLogIn.name = '';
            this.formLogIn.password = '';

        },*/
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