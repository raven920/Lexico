import t, {reify} from 'flow-runtime';
import type {Type} from 'flow-runtime';

type cantidad = number|Number;
const cantidadType = (reify: Type<cantidad>);
cantidadType.addConstraint((input: number|Number) => {
  if (!isFinite(input)) {
    return input+ ' no es un número válido';
  }
});

type caracter = string|String;

exports.caracter = caracter;
exports.cantidad = cantidad;
