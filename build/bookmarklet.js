(()=>{"use strict";(()=>{var e;const o=null===(e=document.querySelector(".gb_Ab"))||void 0===e?void 0:e.nextElementSibling,t=o&&o.innerText?o.innerText:"0";navigator.clipboard.writeText(window.location.href.replace(/(\/u\/0)\/.*\/(.+$)/,`/u/${t}/#all/$2`));const r=`notification-${crypto.randomUUID()}`,n=document.createElement("div"),d=document.querySelector("#:1s").innerText;n.id=r,n.setAttribute("style","position: absolute; top: 1em; right: 1em; padding: 1em; background: lightgoldenrodyellow; color: darkgoldenrod; border-radius: 0.5em; border: solid 1px goldenrod; z-index:100000;"),n.innerText=`Copied message link to "${d}" to  clipboard`,document.body.append(n),setTimeout((()=>{var e;return null===(e=document.body.querySelector(`#${r}`))||void 0===e?void 0:e.remove()}),1e3)})()})();