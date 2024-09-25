const module2 = {
    x: 42,
    getX: function () {
      return this.x;
    },
  };

  const b=module2.getX
  console.log(b());
  
console.log(module2.getX());
  