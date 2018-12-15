//1.
for(let i = 1; i < 21; i++){
   console.log(i);
}


//2.
for(let i=0; i < 201; i +=2){
    console.log(i);
}


//3.

const catMessage = ["Human!! Why you taking picture of me?", "...the catnip made me do it", "why does the red dot always go away"];
for(let i = 0; i < 20; i++){
    if(i % 2 == 0){
    const randomNumberUptoThree = Math.floor(Math.random()* 3)
    console.log(catMessage[randomNumberUptoThree]);
}
}
//4.
for(let i = 0; i < 101; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }
    else if(i % 3 === 0){
        console.log("Fizz");
    }
    else if(i % 5 === 0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}

//5. getting to know you
const shahzad = ["Shahzad", 1000, "Austin"];
const jim = ["Jim", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const daniel = ["Daniel", 186, "Dallas"];
const ryan = ["Ryan", 65, "Denver"];
//1.
shahzad[0] = "gameboy";
//2.
daniel[1] = daniel[1] + 1;
//3.
ryan[2] = "Gotham City";
//4.
reuben[2] = "Chicago";
//5.
jim[2] = ("Denver", "Ny", "Paris");

console.log(daniel); console.log(jim); console.log(reuben); console.log(daniel); console.log(ryan);

//6. Yell at Ninja Turtle/pretty sure i didnt get this right
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
for(i = 0; i < ninjaTurtles.length; i++){
    console.log(ninjaTurtles[i].toUpperCase());
}

//7. Return of the closets
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  //1.
  var kristynsShoes = kristynsCloset.shift();
  console.log(kristynsCloset);

  //2. 
  



  

//8. 
console.log("Answer for no. 8 here");

//9.
let multipleNum = 0;
for(let i = 0; i < 1001; i++){
    if(i % 3 === 0 || i % 5 === 0){
        multipleNum += i;
    }
}

console.log(multipleNum);












