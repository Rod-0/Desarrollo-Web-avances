import { createI18n } from 'vue-i18n';
export const i18n=createI18n({
    locale:'en',
    messages:{
        en:{"Inicio":'Start',"Card":'Card',"Form":'Form',"About":'About Peru',"CardAb":'Card About Peru'},
        es:{"Inicio":'inicio',"Card":'Carta',"Form":'Formulario',"About":'Sobre Peru',"CardAb":'Carta sobre Peru'}
      
    }
})

export default i18n;