import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-curso';

  constructor() {
    const testMap = [1, 2, 3, 4, 5, 6].map((item) => item * 2);
    console.log(testMap);

    const testForEach = [1, 2, 3, 4, 5, 6].forEach((item) => item); //no devuelve nada, solo recorre
    console.log(testForEach);

    const testFind = [1, 2, 3, 4, 5, 6].find((item) => item != 1); //Busca sun resultado(solo un valor)
    console.log(testFind);

    const testFilter = [1, 2, 3, 4, 5, 6].filter((item) => item !== 1); //Filtra datos, trae todos(array)
    console.log(testFilter);

    const testIndex = [90, 1, 2, 3, 4, 5, 6].findIndex((item) => item == 90); //Arroja la posicion, solo arrays
    console.log(testIndex);

    const testIndexOf = [90, 1, 2, 3, 4, 5, 6].indexOf(3); //Arroja la posicion, trabaja con cadenas y arrays(devuelve el primero que encuentre)
    console.log(testIndexOf);

    const testJoin = [90, 1, 2, 3, 4, 5, 6].join('-'); //crea una cadena y lo junta
    console.log(testJoin);

    const testSplit = '90, 1, 2, 3, 4, 5, 6'.split(','); //Dado una cadena genera un array, (es lo contrario de join)
    console.log(testSplit);

    const testSpliceA = [10, 20, 30, 40, 50, 60];
    const testSplice = [1, 2, 3, 4, 5, 6].splice(1, 2); //obtine los valores dado una posicion, modifica directamente el array
    console.log(testSplice, testSpliceA.splice(0, 1));

    const testReduce = [1, 2, 3, 4, 5, 6].reduce(
      (acumulador, value) => acumulador + value,
      100
    ); //recorre objetos, array para realizar operaciones(retorna el acumulador)
    console.log(testReduce);

    const testEntries = { value: 'ricardo', key: 'RPC' };
    console.log(Object.entries(testEntries)); //para convertir json , devuelve un array , Object.keys y Object.value

    const array1 = [1, 2, 3, 4, 5];
    const array2 = [9, 10, 11, ...array1]; //spread operator
    console.log(array2);

    const per1 = { name: 'a', age: 12 };
    const per2 = { data: 'R', ...per1 };
    console.log(per2);
  }
}

// function getName(name:string):string{
//   return 'Hola' + name;
// }

// (name:string) =>{
//   return 'Hola' + name;
// }

// function getName2():string{//sin parametros
//   return 'Hola' ;
// }
// const test = ()=>"Hola";//retorna el texto, se da por implicito
