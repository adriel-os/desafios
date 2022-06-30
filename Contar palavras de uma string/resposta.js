var teste  = 'sssdsefawesfawef tag as idwji as jwdi jwijd iiwjd ss ss ss iwj';

function hash(str)
{
var ret = {}
var pos = 0;

while(pos != -1)
{
    let posNext = teste.indexOf(' ' , pos+1)
    let part = teste.slice(pos, posNext).trim()
    pos = posNext

    if(!ret[part])
    ret[part] = 0
    ret[part]++
    
}
    return ret
}

console.log(hash(teste))