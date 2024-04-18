//creamos as variables
let nombreFinca=prompt("Cal é o nome da finca?");
let extension=prompt("Cal é a sua extensión?");
let tipoSuelo=prompt("Que tipo de suelo ten?");
let valorCatastral=prompt("Cal é oseu valor catastral?");


try{
    //comprobamos que non veñan vacias as variables
    if(nombreFinca=="" || extension=="" || tipoSuelo=="" || valorCatastral==""){
        //si estan vacias mandamos o erro
        throw new Error ("Error: Non se recibiu ningun valor.");
    } else {
        //si non veñen vacias creamos o objeto
        var objeto={"nombreFinca":nombreFinca,"extension":extension,"tipoSuelo":tipoSuelo,"valorCatastral":valorCatastral}
    }
    //vamos a intentar acceder a un valor que non existe
    try{
        objeto.nombreDueño;
        //mandamos o erro
        throw new Error("Error: Non temos ese dato.");
    } catch (error){
        //ensinamos o erro
        document.write(error);
    } finally{
        //mandamos o finally que se vai a amosar siempre que entremos neste try catch
        document.write("<br>A pesares de terse intentado o acceso o obxecto... NON FOI POSIBLE pois a propiedade non existe")
    }
    //ensinamos o erro si as variables veñen vacias
} catch (error){
    alert(error);
}
