import i18n from 'i18n';
import path from 'path';

i18n.configure({
  locales: ['es', 'en'],
  directory: path.join(__dirname, '../../language'),
  cookie: 'locale',
  defaultLocale: 'es',
  directoryPermissions: '755',
  register: global,
  api: {
    '__': 't',  //now req.__ becomes req.t
    '__n': 'tn' //and req.__n can be called as req.tn
  },

});

export default i18n;