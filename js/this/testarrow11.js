greetarrow=()=>{
    console.log(this);

}

function callit() {
    console.log(this);
}
callit();
greetarrow();