import * as uicomponents from './components'
//import theme
import './themes/core.css'
import './themes/default.css'

const install = function installKat(Vue, options){
    if (install.installed) return;
    install.installed = true;

    Object.values(uicomponents).forEach((component) => {
        Vue.component(component.name, component);
    });
    
    if(options) console.log('[KATUI] Options not supported yet. Read documentation katcss.com')
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

const plugin = {install}

export * from './components' //individual use
export default plugin