const mixin = (target, ...sources) => {
    sources.forEach(source => {
        Object.getOwnPropertyNames(source.prototype).forEach(name => {
            if (name !== 'constructor') {
                target[name] = source.prototype[name];
            }
        });
    });
}
const waitElm=(UIElement)=>{
    return new Promise(resolve => {
        if (UIElement) {
            return resolve(UIElement);
        }
        const observer = new MutationObserver(() => {
            if (UIElement) {
                resolve(UIElement);
                observer.disconnect();
            }
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
  }
export {mixin,waitElm}