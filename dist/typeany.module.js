var n={callHook:function(n){try{return Promise.resolve(fetch("localhost:4000/hooks",{method:"POST",mode:"cors",cache:"no-cache",headers:{token:"1234"},body:JSON.stringify({name:"locale",data:{lang:"en",text:n}})})).then(function(n){return n.json()})}catch(n){return Promise.reject(n)}},lang:"en"},o=function(o){n.lang=o},e=function(o){var e=[].slice.call(arguments,1),t=o.reduce(function(n,o,t){return n+o+(void 0!==e[t]?e[t]:"")},"");return n.callHook(t).then(function(n){console.log(n)}).then(function(n){console.log([n])}),t};export{e as AnyLocale,o as setLang};
//# sourceMappingURL=typeany.module.js.map
