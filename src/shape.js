//file src/shape.js adalah file yang berisi method untuk 
//menghitung luas dan keliling persegi, segitiga dan lingkaran

function luasPersegi (a){
    
    return a*a
}
function kelilingPersegi (a){
    return 4*a
}
function luasSegitiga (a,t){
    return a*t/2
}
function kelilingSegitiga (a,t,sm){
    return a+t+sm
}
function luasLingkaran(r) {
    let phi =3.14
    return phi * r**2    
}
function kelilingLingkaran(r){
    let phi =3.14
return 2*phi*r**2
}

module.exports={
    luasPersegi:luasPersegi,
    kelilingPersegi:kelilingPersegi,
    luasSegitiga:luasSegitiga,
    kelilingSegitiga:kelilingSegitiga,
    luasLingkaran:luasLingkaran,
    kelilingLingkaran:kelilingLingkaran,
};
