import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


// Refactor///

// OUT STUDENT 
import MenuOutStudent from '../components/OutStudent/Menu.vue'
import ConvocatoriaOutStudent from '../components/OutStudent/Convocatorias.vue'
import PostulacionesOutStudent from '../components/OutStudent/Postulaciones.vue'
import PerfilOutStudent from '../components/OutStudent/Perfil.vue'
import IntercambioOutStudent from '../components/OutStudent/Intercambio.vue'
import ViewConvocatoria from '../components/OutStudent/ViewConvocatoria.vue'
import Postulacion from '../components/OutStudent/Postulacion.vue'
////

/// ADMINISTRATOR ///
import MenuAdministrator from '../components/Administrator/Menu.vue'
// Convocatorias //
import ListConvocatorias from '../components/Administrator/Convocatorias/ListConvocatorias.vue'
import NewConvocatoria from '../components/Administrator/Convocatorias/NewConvocatoria.vue'
import EditConvocatoria from '../components/Administrator/Convocatorias/EditConvocatoria.vue' // NO DEBERIA IR! 
import ViewConvocatoriaAdmin from '../components/Administrator/Convocatorias/ViewConvocatoria.vue' // NO DEBERIA IR 
// Formularios//
import ListFormularios from '../components/Administrator/Formularios/ListFormularios.vue'
import ViewFormularioAdmin from '../components/Administrator/Formularios/ViewFormulario.vue'
/////


// Postulaciones //
import ListPostulaciones from '../components/Administrator/Postulaciones/ListPostulaciones.vue'
import ViewPostulacionAdministrator from  '../components/Administrator/Postulaciones/ViewPostulacion.vue' // NO DEBERIA IR!
import EditStatus from '../components/Administrator/Postulaciones/EditStatus.vue'
//// 
/// Step's // 
import EditSteps from '../components/Administrator/Steps/EditSteps.vue'
////
/// Manage Users // 
import ShowUsers from '../components/Administrator/Users/ShowUsers.vue'
/// Manage Users // 
import ShowCareers from '../components/Administrator/Careers/ShowCareers.vue'
import AddCarreer from '../components/Administrator/Careers/Create.vue'
import EditCareer from '../components/Administrator/Careers/Update.vue'
import AddAdministrator from '../components/auth/create.vue'
/// ADMINISTRATOR/// 

import ShowUniversities from '../components/Administrator/Universities/ShowUniversities.vue'
import AddUniversity from '../components/Administrator/Universities/Create.vue'
import EditUniversity from '../components/Administrator/Universities/Update.vue'

import ShowSteps from '../components/Administrator/Steps/ShowSteps.vue'
import AddStep from '../components/Administrator/Steps/Create.vue'
import EditStep from '../components/Administrator/Steps/Update.vue'

//FORMULARIOS//
import NewFormulario from '../components/Formulario/NewFormulario.vue'
import EditFormulario from '../components/Formulario/EditFormulario.vue' // ESTA NO DEBERIA IR! 
import ViewFormulario from '../components/Formulario/ViewFormulario.vue' // ESTA NO DEBERIA IR! 

import DialogShortAnswer from '../components/Formulario/ShortAnswer/DialogShortAnswer.vue'
import DialogEditShortAnswer from '../components/Formulario/ShortAnswer/DialogEditShortAnswer.vue'
import DialogSeccion from  '../components/Formulario/Seccion/DialogSeccion.vue'



import DialogSelectAnswer from '../components/Formulario/SelectAnswer/DialogSelectAnswer.vue'
import DialogEditSelectAnswer from '../components/Formulario/SelectAnswer/DialogEditSelectAnswer.vue'

import DialogUniversidad from '../components/Formulario/Universidad/DialogUniversidad.vue'
import DialogEditUniversidad from  '../components/Formulario/Universidad/DialogEditUniversidad.vue'

import EditNameFormulario from '../components/Formulario/EditNameFormulario.vue'

/// 

import SignIn from '../views/Auth/SignIn.vue'
import SignInAdm from '../components/auth/SignInAdm.vue'
import SignUp from '../views/Auth/SignUp.vue'
import SignUpUsach from '../views/Auth/SignUpUsach.vue'
import Account from '../views/Accounts/Account.vue'
import AccountUsach from '../views/Accounts/AccountUsach.vue'
import AccountInt from '../views/Accounts/AccountInt.vue'
Vue.use(VueRouter)

  const routes = [


/// Nuevas rutas

// TEMPORAL HOME //

{
  path: '/',
  name: '',
  component: MenuAdministrator
},
{
  path: '/home',
  name: 'Home',
  component: Home
},
{
  path: '/SignIn',
  name: 'SignIn',
  component: SignIn
},
{
  path: '/SignInAdm',
  name: 'SignInAdm',
  component: SignInAdm
},
{
  path: '/SignUp',
  name: 'SignUp',
  component: SignUp
},
{
  path: '/Account',
  name: 'Account',
  component: Account
},
{
  path: '/SignUpUsach',
  name: 'SignUpUsach',
  component: SignUpUsach
},

// OUT STUDENT // 


{
  path: '/PostulacionOutStudent',
  name: 'PostulacionOutStudent',
  component: Postulacion
},

{
  path: '/MenuOutStudent',
  name: 'MenuOutStudent',
  component: MenuOutStudent
},
{
  path: '/ConvocatoriaOutStudent',
  name: 'ConvocatoriaOutStudent',
  component: ConvocatoriaOutStudent
},
{
  path: '/PostulacionesOutStudent',
  name: 'PostulacionesOutStudent',
  component: PostulacionesOutStudent
},
{
  path: '/PerfilOutStudent',
  name: 'PerfilOutStudent',
  component: PerfilOutStudent
},
{
  path: '/IntercambioOutStudent',
  name: 'IntercambioOutStudent',
  component: IntercambioOutStudent
},
{
  path: '/ViewConvocatoria',
  name: 'ViewConvocatoria',
  component: ViewConvocatoria
},



// ADMINISTRATOR 
{
  path: '/MenuAdministrator',
  name: 'MenuAdministrator',
  component: MenuAdministrator
},

// Gestion de Usuarios Administrador //
{
  path: '/ShowUsers',
  name: 'ShowUsers',
  component: ShowUsers
},
{
  path: '/AddAdministrator',
  name: 'AddAdministrator',
  component: AddAdministrator
},

// Gestion de Carreras Administrador //
{
  path: '/ShowCareers',
  name: 'ShowCareers',
  component: ShowCareers
},
{
  path: '/AddCarreer',
  name: 'AddCarreer',
  component: AddCarreer
},
{
  path: '/EditCareer',
  name: 'EditCareer',
  component: EditCareer
},
// Gestion de Univesidades Administrador //
{
  path: '/ShowUniversities',
  name: 'ShowUniversities',
  component: ShowUniversities
}, {
  path: '/AddUniversity',
  name: 'AddUniversity',
  component: AddUniversity
}, {
  path: '/EditUniversity',
  name: 'EditUniversity',
  component: EditUniversity
},

// Gestion de Steps Administrador //
{
  path: '/ShowSteps',
  name: 'ShowSteps',
  component: ShowSteps
}, {
  path: '/AddStep',
  name: 'AddStep',
  component: AddStep
}, {
  path: '/EditStep',
  name: 'EditStep',
  component: EditStep
},

// Convocatorias Administrator //

{
  path: '/ListConvocatorias',
  name: 'ListConvocatorias',
  component: ListConvocatorias
},
{
  path: '/NewConvocatoria',
  name: 'NewConvocatoria',
  component: NewConvocatoria
},
{
  path: '/EditConvocatoria',
  name: 'EditConvocatoria',
  component: EditConvocatoria
},
{
  path: '/ViewConvocatoriaAdmin',
  name: 'ViewConvocatoriaAdmin',
  component: ViewConvocatoriaAdmin
},

/// Formulario Administrator

{
  path: '/ListFormularios',
  name: 'ListFormularios',
  component: ListFormularios
},
{
  path: '/ViewFormularioAdmin',
  name: 'ViewFormularioAdmin',
  component: ViewFormularioAdmin
},

/// Postulaciones Administrator
{
  path: '/ListPostulaciones',
  name: 'ListPostulaciones',
  component: ListPostulaciones
},
{
  path: '/ViewPostulacionAdministrator',
  name: 'ViewPostulacionAdministrator',
  component: ViewPostulacionAdministrator
},
{
  path: '/EditStatus',
  name: 'EditStatus',
  component: EditStatus
},

//// Step's Administrator //

{
  path: '/EditSteps',
  name: 'EditSteps',
  component: EditSteps
},

// FORMULARIO

{
  path: '/DialogShortAnswer',
  name: 'DialogShortAnswer',
  component: DialogShortAnswer
},
{
  path: '/DialogEditShortAnswer',
  name: 'DialogEditShortAnswer',
  component: DialogEditShortAnswer
},

{
  path: '/DialogSelectAnswer',
  name: 'DialogSelectAnswer',
  component: DialogSelectAnswer
},
{
  path: '/DialogEditSelectAnswer',
  name: 'DialogEditSelectAnswer',
  component: DialogEditSelectAnswer
},
{
  path: '/DialogUniversidad',
  name: 'DialogUniversidad',
  component: DialogUniversidad
},
{
  path: '/DialogEditUniversidad',
  name: 'DialogEditUniversidad',
  component: DialogEditUniversidad
},

{
  path: '/DialogSeccion',
  name: 'DialogSeccion',
  component: DialogSeccion
},

{
  path: '/NewFormulario',
  name: 'NewFormulario',
  component: NewFormulario
},
{
  path: '/EditFormulario',
  name: 'EditFormulario',
  component: EditFormulario
},

{
  path: '/ViewFormulario',
  name: 'ViewFormulario',
  component: ViewFormulario
},
{
  path: '/EditNameFormulario',
  name: 'EditNameFormulario',
  component: EditNameFormulario
},


//
////



  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
