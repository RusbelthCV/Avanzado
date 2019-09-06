$(document).ready(function () {
    $("#top").click(() => {
        MOTOS.sort(ordenarPrecio);
        let mayor = MOTOS[MOTOS.length-1].preu;
        let menor = MOTOS[0].preu;
    
        $("tbody > tr > td:first-child").text(mayor);
        $("tbody > tr > td:nth-child(2)").text(menor);
    });

    $("#honda30").click(function()
    {
        let contador = 0;
        $(MOTOS).each(function(i)
        {
            if(MOTOS[i]["model"].includes("HONDA") && MOTOS[i]["kilometres"] <= 30000)
            {
                contador++;
            }
        });
        $("tbody > tr > td:nth-child(3)").text(contador);
    });

    $("#cc").click(function(){

        let filtradas = MOTOS.filter(el => el.kilometres <= 30000).filter(moto => moto.cilindrada > 240);

        $("tbody > tr > td:nth-child(4)").text(filtradas.length);
    });

    $("#rangoPrecio").click(function()
    {
        let filtradas = MOTOS.filter(el => el.kilometres < 25000).filter(el => el.cilindrada > 350).filter(el => el.preu > 1800).filter(el => el.preu < 2200);

        $("tbody > tr > td:nth-child(5)").text(filtradas.length);
    });

    $("#marcas").click(function()
    {
        let marcas = new Array();
        $(MOTOS).each(function(index,element)
        {
            
            let marca = MOTOS[index].model;
            marca = marca.split(" ");
            let busqueda = marcas.indexOf(marca[0]);
            if(busqueda == -1)
            {
                //marcas.push();
                //marcas.push(marca[0]);
            }
            else if(busqueda > -1)
            {
                marcas.contador++;
            }
        });
        /*let marcasCantidades = marcas.map(nombre => {
            cantidad = MOTOS.filter(el => el.model.includes(nombre)).length;
            return {marca:nombre,cantidad:cantidad};
        });

        console.log(marcasCantidades);*/
        console.log(marcas);
    });
});

function ordenarPrecio(a,b)
{
    if(a.preu > b.preu)
    {
        return 1;
    }
    else if(a.preu < b.preu)
    {
        return -1;
    }
    else
    {
        return 0;
    }
}