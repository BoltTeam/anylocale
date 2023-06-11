const baseURL = 'localhost:4000/hooks';
function LocaleService({token}){
    const setting = {lang: 'en', store: {}};
    const callHook = async (text)=>{
        const response = await fetch(baseURL, {
                    method:'POST', 
                    mode:'cors', 
                    cache: 'no-cache', 
                    headers:{'token': token},
                    body: JSON.stringify({
                        'name':'locale', 
                        'data': {'lang':lang, 'text': text}
                    })})
        return response.json();
    }
    return {callHook, setting}
}
export const locale = LocaleService({token: '1234'});

export const AnyLocale = (strings, ...keys)=>{
    const text = strings.reduce((t, s, idx)=>{
        return t + s + (keys[idx]!==undefined?keys[idx]:'');
    }, '');
    localeService.callHook(text).then(data=>{
        console.log(data);
    }).then(error=>{
        console.log([error]);
    })
    const data = localStorage.getItem(text);
    const item = store?JSON.parse(data):{};
    return item[locale.lang]?item[locale.lang]:text;
}