import { createStore } from 'vuex'

export default createStore({
  state: {
    // stores variables/data
    // data -> property; null -> value
    // data:null /* placeholder for the varible with it's data type/value*/
    aboutMe:null,
    education:null,
    workExp:null,
    skills:null,
    projects:null,
    testimonials:null,
  },
  getters: {
    // gets information and used to preview the information
    // filterData(){
      // return Array.filter()
    // }
    
  },
  mutations: {
    // use this to change/update the state
    // updateData(state, payload){
    // payload -> when the mutation is commited, it will pass information into state
    //   state.data = payload
    // }
    setAboutMe(state, payload){
      state.aboutMe = payload
    },
    setEducation(state, payload){
      state.education = payload
    },
    setWorkExp(state, payload){
      state.workExp = payload
    },
    setSkills(state, payload){
      state.skills = payload
    },
    setProjects(state, payload){
      state.projects = payload
    },
    setTestimonials(state, payload){
      state.testimonials = payload
    }
    
  },
  actions: {
    // run all async code
    // dispathing an action
    // fetchData({commit}){
    //    commit /* commit will represent state*/
    // }
    async getAboutMe({commit}){
      let fetchedinfo = await fetch('https://c0dingforfun.github.io/firstAPI/data/data.json')
      let data = await fetchedinfo.json()
      let {aboutMe,projects,education,skills,workExp,testimonials} = data
      commit('setAboutMe', aboutMe)  
      commit('setEducation', education)  
      commit('setWorkExp', workExp)  
      commit('setSkills', skills)  
      commit('setProjects', projects)  
      commit('setTestimonials', testimonials)  
    }
  },
  modules: {
    // separates information -> you can more than one module to save different information
  }
})