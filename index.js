"use strict";
var feedback = {
  install(Vue){
     /**
     * v-feedback
     *      .opacity = 0.75
     *      .scale = 0.8
     * 
     * 实现方法
     *      event
     *      active
     * 变化类型
     *      style
     *      css
     * 
     * 使用 
     * v-feedback.scale="0.8"
     * v-feedback.opacity="0.8"
     * 
     */
    Vue.directive('feedback', {
        inserted(el, binding, vnode) {
            // touchstart
            const idClass = 'feedback' + Date.now() + Math.floor(Math.random() * 100000000);
            const style = document.createElement('style');
            let ctn;
            if (binding.modifiers.opacity) {
                let opacity = 0.8;
                if (binding.value > 0 && binding.value < 1) {
                    opacity = binding.value;
                }
                ctn = document.createTextNode('.' + idClass + 'opacity:' + opacity);
            }
            if (binding.modifiers.scale) {
                let scale = 0.75;
                if (binding.value > 0 && binding.value < 1) {
                    scale = binding.value;
                }
                ctn = document.createTextNode('.' + idClass + '-webkit-transform-origin: center center;-webkit-transform:scale(' + scale +')')
            }
            if (!binding.modifiers.opacity && !binding.modifiers.scale) {
                let opacity = 0.8;
                if (binding.value > 0 && binding.value < 1) {
                    opacity = binding.value;
                }
                ctn = document.createTextNode('.' + idClass + 'opacity:' + opacity);
            }
            style.appendChild(ctn);
            el.parentNode.insertBefore(style, el);
            el.addEventListener('touchstart', (e) => {
                el.classList.toggle(idClass);
            }, false);
            el.addEventListener('touchend', () => {
                el.classList.toggle(idClass);
            }, false);


        },
    });
  }
}

module.exports = feedback