export default class App {


    sumarParesFor()
    {
        let suma = 0;
        for (let i = 1; i<=20; i = i + 1)
        {
            
            if(i % 2 == 0)
            {
                suma = suma + i;
            }
        }
        return suma;
    }

    contarImparesFor(inicio,fin)
    {   
        let impares = 0;
        if(inicio > fin)
        {
            let temporal;
            temporal = inicio;
            inicio = fin;
            fin = temporal;
        }
        for(let i = inicio; i <= fin; i = i + 1 )
        {
            if(i % 2 != 0)
            {
                impares = impares + 1;
            }
        }
        return impares;
    }
    sumarParesWhile()
    {
        let i = 1;
        let suma = 0;
        while(i<=20)
        {
            if(i % 2 == 0)
            {
                suma = suma + i;
            }
            i++;
        }
        return suma;
    }
    contarImparesWhile(inicio, fin)
    {
        let impares = 0;
        if(inicio > fin)
        {
            let temporal;
            temporal = inicio;
            inicio = fin;
            fin = temporal;
        }
        let i = inicio;
        while (i<=fin)
        {
            if(i % 2 != 0)
            {
                impares = impares + 1;
            }
            i++;
        }
        return impares;
    }
    sumarParesDo()
    {
        let i = 1;
        let suma = 0;
        do
        {
            if(i % 2 == 0)
            {
                suma = suma + i;
            }
            i ++;
        }
        while(i<=20);
        return suma;
    }
    contarImparesDo(inicio,fin)
    {
        if(inicio > fin)
        {
            let temporal;
            temporal = inicio;
            inicio = fin;
            fin = temporal;
        }
        let i = inicio;
        let impares = 0;
        do
        {
            if(i % 2 != 0)
            {
                impares = impares + 1;
            }
            i++
        }
        while(i<=fin)
        return impares;
    }
}

let app = new App();
console.log("Probando sumarParesFor()");
console.log(app.sumarParesFor()); //Resultado debe ser 110

console.log("Probando contarImparesFor()");
console.log(app.contarImparesFor(5,20)); //Resultado debe ser 8
console.log(app.contarImparesFor(20,5)); //Resultado debe ser 8

console.log("Probando sumarParesWhile()");
console.log(app.sumarParesWhile()); //Resultado debe ser 110

console.log("Probando contarImparesWhile()");
console.log(app.contarImparesWhile(3,25)); //Resultado debe ser 12
console.log(app.contarImparesWhile(25,3)); //Resultado debe ser 12

console.log("Probando sumarParesDo()");
console.log(app.sumarParesDo()); //Resultado debe ser 110

console.log("Probando contarImparesDo()")
console.log(app.contarImparesDo(8,17)); //Resultado debe ser 5
console.log(app.contarImparesDo(17,8)); //Resultado debe ser 5