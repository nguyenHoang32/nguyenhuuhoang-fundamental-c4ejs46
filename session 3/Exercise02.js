let myFlock = [33, 20, 18, 20 ,50 ,99];
console.log(`My name is Hoang and there is my flock [${myFlock}]`);
for(let i = 0; i < 4; i++){
    console.log(`Month ${i}`);
    let biggest = myFlock[0];
    for(let i = 0; i < myFlock.length; i++)
    {
    if(myFlock[i] >= biggest) 
        {
        biggest = myFlock[i];
        var a = i;
        }
    
    }
    console.log(`Now my biggest sheep has size ${biggest} let's shear it`);
    console.log(myFlock);
    myFlock[a] = 8;
    console.log(`After shearing , here is my flock [${myFlock}]`);
    for(let i = 0; i< myFlock.length; i++)
    {
        myFlock[i] = myFlock[i] + 50;
    }
    console.log(`One month has passed, now here is my flock [${myFlock}]`);
}
let total = 0;
for(let i = 0; i < myFlock.length; i++){
    total = total + myFlock[i];
}
console.log(`My flock has size in total: ${total}`);
console.log(`I would get ${total} * 2$ = ${total * 2}$`);