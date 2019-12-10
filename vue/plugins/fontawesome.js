import Vue from 'vue'
import '@fortawesome/fontawesome-free/css/all.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import { } from '@fortawesome/free-regular-svg-icons'

import {
  faUser,
  faLock,
  faSignOutAlt,
  faCog,
  faBars,
  faList,
  faSearch,
  faBell,
  faFileAlt,
  faDonate,
  faExclamationTriangle,
  faEnvelope,
  faDownload,
  faCalendar,
  faDollarSign,
  faClipboardList,
  faComments,
  faEllipsisV,
  faCircle,
  faLaughWink,
  faTachometerAlt,
  faWrench,
  faFolder,
  faChartArea,
  faTable,
  faAngleLeft,
  faAngleDown,
  faAngleRight,
  faLanguage,
  faUsers,
  faUserPlus,
  faEdit,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'

import {
  faGithub
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faUser,
  faLock,
  faSignOutAlt,
  faCog,
  faGithub,
  faBars,
  faList,
  faSearch,
  faBell,
  faFileAlt,
  faDonate,
  faExclamationTriangle,
  faEnvelope,
  faDownload,
  faCalendar,
  faDollarSign,
  faClipboardList,
  faComments,
  faEllipsisV,
  faCircle,
  faLaughWink,
  faTachometerAlt,
  faWrench,
  faFolder,
  faChartArea,
  faTable,
  faAngleLeft,
  faAngleRight,
  faAngleDown,
  faLanguage,
  faUsers,
  faUserPlus,
  faEdit,
  faTrash
)

Vue.component('fa', FontAwesomeIcon)
