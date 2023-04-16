import { createI18n } from 'vue-i18n';
export const i18n=createI18n({
    locale:'en',
    messages:{
        en:{"MyComponent":'My component', "ClickMe":'Click me'},
        es:{"MyComponent":'Mi componente',"ClickMe":'Haz click'},
        fr:{"MyComponent":'mon composant',"ClickMe":'Cliquez sur'}
    }
})

export default i18n;