//plugins added to dom
/* Popper and Jquery */
window.Popper = require('popper.js').default
window.$ = window.jQuery = require('jquery')
/* Form */
/* import Form from "vform";
window.Form = Form; */
/* i18n for languages */
import i18n from '~/plugins/i18n'
window.i18n = i18n;
/* Axios client HTTP for the browser */
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


