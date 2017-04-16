var reglas = {   get(target, propKey, receiver) {
            if('_'+propKey in target){
                const campo = target['_'+propKey];
                return campo;
                /*if(campo instanceof Function){
                    return async function (...args) {
                        let result = await campo(...args);
                        return result;
                    };
                }else{
                    return campo;
                }*/
            }else if('__'+propKey in target){
                throw {message: "No puede acceder a propiedad privada: "+ propKey, name: "EJ"};
            }else if(propKey == "___instancia"){
                return target;
            }else if(propKey == "___esProxy"){
                return true;
            }else{
                //throw {message: "Intentó acceder a una propiedad inexistente: "+ propKey, name: "EJ"};
                return target[propKey];
            }

        }
    }
exports.reglas = reglas;
