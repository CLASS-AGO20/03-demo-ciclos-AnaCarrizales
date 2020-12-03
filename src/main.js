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
}

let app = new App();
console.log(app.sumarParesFor());

console.log(app.contarImparesFor(5,20));//Resultado debe ser 8
console.log(app.contarImparesFor(20,5));//Resultado debe ser 8
