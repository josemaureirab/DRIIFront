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
////

/// ADMINISTRATOR ///
import MenuAdministrator from '../components/Administrator/Menu.vue'
// Convocatorias //
import ListConvocatorias from '../components/Administrator/Convocatorias/ListConvocatorias.vue'
import NewConvocatoria from '../components/Administrator/Convocatorias/NewConvocatoria.vue'
import EditConvocatoria from '../components/Administrator/Convocatorias/EditConvocatoria.vue' // NO DEBERIA IR! 
import ViewConvocatoria from '../components/Administrator/Convocatorias/ViewConvocatoria.vue' // NO DEBERIA IR 
// Formularios//
import ListFormularios from '../components/Administrator/Formularios/ListFormularios.vue'
/////
// Postulaciones //
import ListPostulaciones from '../components/Administrator/Postulaciones/ListPostulaciones.vue'
import ViewPostulacionAdministrator from  '../components/Administrator/Postulaciones/ViewPostulacion.vue' // NO DEBERIA IR!
//// 
/// Step's // 
import EditSteps from '../components/Administrator/Steps/EditSteps.vue'
////
/// Manage Users // 
import ShowUsers from '../components/Administrator/Users/ShowUsers.vue'
/// ADMINISTRATOR/// 

//FORMULARIOS//
import NewFormulario from '../components/Formulario/NewFormulario.vue'
import EditFormulario from '../components/Formulario/EditFormulario.vue' // ESTA NO DEBERIA IR! 
import ViewFormulario from '../components/Formulario/ViewFormulario.vue' // ESTA NO DEBERIA IR! 
/// 

Vue.use(VueRouter)

  const routes = [


/// Nuevas rutas


// OUT STUDENT // 
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
  path: '/ViewConvocatoria',
  name: 'ViewConvocatoria',
  component: ViewConvocatoria
},

/// Formulario Administrator

{
  path: '/ListFormularios',
  name: 'ListFormularios',
  component: ListFormularios
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



//// Step's Administrator //

{
  path: '/EditSteps',
  name: 'EditSteps',
  component: EditSteps
},

// FORMULARIO

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
