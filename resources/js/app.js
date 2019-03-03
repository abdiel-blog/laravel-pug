import Vue from 'vue';
import lista from './components/lista.vue';

const app = new Vue({
    el: '#main',
    components:{lista},
    data:{
        mensaje:'1234',
    }
});
