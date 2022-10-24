//cuando son valores se usan {} si son funciones  por fuera {}
import saludar, {Saludar,PI} from './constantes.js';
//se puede poner alias a los nombre con as
import {aritmetica as cal} from './aritmetica.js';

console.log(cal.sumar(5,4));

saludar();
let saludo=new Saludar();
saludo;
console.log('modulo'+PI ) ;



/*los expor default para valores con const let o funciones  expresadas
  primero se hace la asignaciony luego se expota solo se puede hacer un expor defaul
 el expor defaul con class y funciones declaradas si se pueden exportar default en el momento de asignarcion
  */