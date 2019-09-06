$(document).ready(function(){
    class Figura
    {
        constructor(x,y)
        {
            this.x = x;
            this.y = y;
        }
    }

    class Rectangulo extends Figura
    {
        constructor(x,y,lado1,lado2)
        {
            super(x,y);
            this.lado1 = lado1;
            this.lado2 = lado2;
        }

        area()
        {
            return this.lado1*this.lado2;
        }
    }

    $("#areaR").click(function()
    {
        let base = $("#base").val();
        let altura = $("#altura").val();

        let rectangulo = new Rectangulo(0,0,base,altura);
        let areaRectangulo = rectangulo.area();

        $("#datos").text("Area: "+areaRectangulo);
        console.log(base);
        console.log(altura);
    });

    
});