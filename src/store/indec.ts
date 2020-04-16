import Vue from 'vue'
import Vuex from 'vuex'
import Beers from '@/store/indec.ts';
Vue.use(Vuex)

const store: any = new Vuex.Store({
    modules : {
        Beers
    }
})

export default store