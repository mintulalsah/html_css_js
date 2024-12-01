let a={name:"mintu",
    mob:{mob1:"98708",mob2:"876887"}
}

let b=JSON.parse(JSON.stringify(a));
// b={addre:"delhi"};
b.name='aman';
b.mob.mob1=""
console.log(a);
