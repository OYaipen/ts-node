import Vue from 'vue'
import moment from 'moment';
import VueResource from 'vue-resource';

Vue.filter('myDate', function (created) {
    moment.locale('es');
    return moment(created).format('D MMM YYYY');
});
Vue.filter('upText', function (text) {
    return text.charAt(0).toUpperCase() + text.slice(1)
});

Vue.use(VueResource);
Vue.http.options.root = '/api';

window.Fire = new Vue();
import Gate from "./Gate";
Vue.prototype.$gate = new Gate(window.user);
