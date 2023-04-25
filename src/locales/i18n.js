import { createI18n } from 'vue-i18n';
export const i18n=createI18n({
    locale:'en',
    messages:{
        en:{"Inicio":'Start',"Card":'Card',"Form":'Form',"About":'About Peru',"CardAb":'Card About Peru',"AboutUs":'About Us',
            "Name":'Name',"OfficialName":'Official Name',"Currencie":'Currencie',"Capital":'Capital',"Region":'Region',"SubRegion":'Sub Region',
            "Languages":'Languages',"Area":'Area',"Population":'Population',"PeruFlag":'Peru Flag',"CoatOfArms":'Coat of Arms'},
        es:{"Inicio":'inicio',"Card":'Carta',"Form":'Formulario',"About":'Sobre Peru',"CardAb":'Carta sobre Peru',"AboutUs":'Sobre Nosotros',
            "Name":'Nombre',"OfficialName":'nombre Oficial',"Currencie":'Moneda',"Capital":'Capital',"Region":'Region',"SubRegion":'Sub Region',
            "Languages":'Lenguajes',"Area":'Area',"Population":'Poblacion',"PeruFlag":'Bandera del Peru',"CoatOfArms":'Escudo de Armas'}
      
    }
})

export default i18n;