<template lang="">
    <div id="parent">
        <form @submit.prevent="formSubmit">
            <h1>Sign up form</h1>
            <!-- Using v-model to save data in properties -->
            <label>Email:</label>
            <input type="email" required v-model="email">
            <label>Password:</label>
            <input type="password" required v-model="password">

            <label>Role:</label>
            <select v-model="role">
                <option value="developer">Web Developer</option>
                <option value="designer">Web Designer</option>
                <option value="">Select a role:</option>
            </select>
            <label>Languages:</label>
            <input type="text" v-model="currentLanguage" @keydown="keyfinder" @keyup.enter.alt="addLanguage()">
            <button type="submit">Submit</button>
            <div v-for="(lang, index) in languages" :key="index+1">
                <p id="para" @click="deleteLang(lang)">
                    {{index+1}}:{{lang}}
                </p>
            </div>
            <div class="terms">
                <!-- you can use the v-model on a checkbox and when checked it can register a boolean value as true -->
                <input type="checkbox" required v-model="terms">
                <label>Accept Terms and Conditions</label>
                <h4>People wanted in your teams:</h4>
                <div>
                    <input type="checkbox" value="Mario" v-model="names">
                    <label>Mario</label>
                </div>
                <div>
                    <input type="checkbox" value="Dean" v-model="names">
                    <label>Dean</label>
                </div>
                <div>
                    <input type="checkbox" value="Luigi" v-model="names">
                    <label>Luigi</label>
                </div>
            </div>
        </form>
    </div>
    <!-- showing information -->
    <div>
        <p>Email:{{email}}</p>
        <p>Password:{{password}}</p>
        <p>Role:{{role}}</p>
        <p>Terms:{{terms}}</p>
        <p>People:{{names}}</p>
        <p>Current language:{{currentLanguage}}</p>
        <p>Language:{{languages}}</p>
    </div>
</template>
<script>
export default {
    data (){
        return{
            email:'',
            password:'',
            role:'',
            // If you want default value to be checked then change boolean to true.
            terms:false,
            names:[],
            currentLanguage:'',
            languages:['English','Spanish']

        }
    },
    methods:{
        formSubmit(){
            console.log('The page has refreshed');
            this.email = '';
            this.password = '';
            this.terms = '';
            this.currentLanguage = '';
            this.role = '';
        },
        keyfinder(event){
            console.log(event);  
        },
        deleteLang(lang){
            this.languages = this.languages.filter(item=> item !=lang)
            
        },
        addLanguage(){
            if(!this.languages.includes(this.currentLanguage)){
                this.currentLanguage.push(this.currentLanguage)
            }
        },
    }
}
</script>
<style >
    #parent{
        display: flex;
    }
    form{
        width: 20cap;
        padding: 5cap;
        text-align: center;
        margin-left: 25%;
        background-color: #092C4E;
        margin-left: auto;
        margin-right: auto;
    }
    input, select{
        background-color: #0B4580;
        border: 1px whitesmoke solid;
        border-radius: 5px;
        width: 250px;
        padding-bottom: 5px;
    }
    label{
       padding-top:5px ;
        width: 250px;
        text-align: left;
        font-size: small;
    }
    .terms{
       display: flex;
       width: 400px;
    }
    input[type='checkbox']{
        height: 16px;
        width: 16px;
        position: relative;
        top: 2px;
    }
    #para{
        width: 200px;
        height: 10px;
        box-sizing: content-box;
        border: white dashed 5px;
        margin: 0px;
        padding: 10px 10px 15px 5px;
        cursor: pointer;
    }
    #para:hover{
        background-color: aliceblue;
    }
</style>