export const tripleta = (input: Array<number> ) : Array<number> => {
    var deno = input.length;
    var res = [0,0,0];

    //cálculo
    for(var i = 0; i < deno; i++){
        if(input[i] > 0)
            res[0] = res[0] + 1;
    }

    //salida
    for(var i = 0; i < deno; i++){
            res[i] /= deno;
            res[i] = parseFloat(res[i].toFixed(6))
    }

    return res;
}
