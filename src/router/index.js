import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DialogGrid from  '../components/Buttons/DialogGridOption.vue'
import DialogSelect from '../components/Buttons/DialogSelect.vue'
import DialogShortAnswer from '../components/Buttons/DialogShortAnswer.vue'
import OptionPalettes from '../components/Buttons/OptionPalettes.vue'
import  DialogDate from '../components/Buttons/Borrar/DialogDate.vue'
import  DialogUpload from '../components/Buttons/Borrar/DialogUploadFile.vue' 
import Principal from  '../components/Principal/Principal.vue'
import Formulario from '../components/Principal/Formulario.vue'
import FormulariosPublicados  from  '../components/Principal/FormulariosPublicados.vue'
import FormulariosGuardados from '../components/Principal/FormulariosGuardados.vue'
import MenuStudent from '../components/Student/Menu.vue'
import Convocatorias from '../components/Student/Convocatorias.vue'
import Informativo from '../components/Student/Informativo.vue'
import Postulaciones from '../components/Student/Postulaciones.vue'
import Postulacion from '../components/Student/Postulacion.vue'
import Intercambio from '../components/Student/Intercambio.vue'
// import NewConvocatoria from '../components/Admin/NewConvocatoria.vue'
import Perfil from '../components/Student/Perfil.vue'
import MenuAdmin from '../components/Admin/Menu.vue'
import MenuConvocatorias from '../components/Admin/MenuConvocatorias.vue'
import MenuFormularios from '../components/Admin/MenuFormulario.vue'
import PostulacionesAdmin from '../components/Admin/Postulaciones.vue'
import PostulacionAdmin from '../components/Admin/Postulacion.vue'
// import EditSteps from '../components/Admin/EditSteps.vue'
import IntercambioAdmin from '../components/Admin/Intercambio.vue'



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
      path: '/IntercambioAdmin',
      name: 'IntercambioAdmin',
      component: IntercambioAdmin
    },

    {
      path: '/EditSteps',
      name: 'EditSteps',
      component: EditSteps
    },
    {
      path: '/PostulacionAdmin',
      name: 'PostulacionAdmin',
      component: PostulacionAdmin
    },

    {
      path: '/PostulacionesAdmin',
      name: 'PostulacionesAdmin',
      component: PostulacionesAdmin

    },
    {
      path: '/MenuFormularios',
      name: 'MenuFormularios',
      component: MenuFormularios

    },
    {
      path: '/MenuConvocatorias',
      name: 'MenuConvocatorias',
      component: MenuConvocatorias

    },
    {
      path: '/MenuAdmin',
      name: 'MenuAdmin',
      component: MenuAdmin

    },


    {
      path: '/Perfil',
      name: 'Perfil',
      component: Perfil

    },


    {
      path: '/Intercambio',
      name: 'Intercambio',
      component: Intercambio
    },

    {
      path: '/Postulaciones',
      name: 'Postulaciones',
      component: Postulaciones
    },
    {
      path: '/Postulacion',
      name: 'Postulacion',
      component: Postulacion
    },

    {
      path: '/Convocatorias',
      name: 'Convocatorias',
      component: Convocatorias
    },
    {
      path: '/Informativo',
      name: 'Informativo',
      component: Informativo
    },

    {
      path: '/MenuStudent',
      name: 'MenuStudent',
      component: MenuStudent
    },

  {
    path: '/Formulario',
    name: 'Formulario',
    component: Formulario
  },
  {
    path: '/FormulariosPublicados',
    name: 'FormulariosPublicados',
    component: FormulariosPublicados
  },
  {
    path: '/FormulariosGuardados',
    name: 'FormulariosGuardados',
    component: FormulariosGuardados
  },

  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/ShortAnswer',
    name: 'ShortAnswer',
    component: DialogShortAnswer
  },
  {
    path:'/Select',
    name: 'Select',
    component: DialogSelect
  },
  {
    path:'/Grid',
    name: 'Grid',
    component: DialogGrid
  },
  {
    path:'/UploadFile',
    name: 'UploadFile',
    component: DialogUpload
  },
  {
    path:'/Date',
    name: 'Date',
    component: DialogDate 
  },
  {
    path:'/OptionPalettes',
    name: 'OptionPalettes',
    component: OptionPalettes
  },
  {
    path:'/Principal',
    name: 'Principal',
    component: Principal
  },

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
