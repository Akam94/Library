let animal = {
    eats: true
};
let rabbit = {
    jumps: true
};

Object.setPrototypeOf(rabbit, animal); 

console.log(Object.getPrototypeOf(rabbit));