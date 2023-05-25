import { createStore } from "vuex";

export default createStore({
  state: {},
  mutations: {
    closeNav() {
      const appNav  = document.querySelector('#AppNav');
      const appHeaderTrigger = document.querySelector('#AppHeader__trigger');
      if(appNav && appHeaderTrigger){
        appNav?.classList.remove('navOpen');
        appHeaderTrigger.classList.remove('isOpen');
      }
    }
  },
  actions: {},
  modules: {},
});
