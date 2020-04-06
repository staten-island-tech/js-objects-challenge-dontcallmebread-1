/* const Riya = {
    name: "Riya",
    dob: 2003,
    graduated: false,
        age: function() {
            console.log(this);
            return 2020 - this.dob;
        }
};
 */
//this refers to whatever the project is
/* 
const Homer = {
    name: "Homer",
    age: 32,
    family: {
        wife: {
            name: "Marge",
            age: 32
        },
        son: {
            name: "Bart",
            age: 10
        }
    },
    pets: ["cat", "dog"]
}

Homer.family.faughter = {
    name: "Lisa",
    age: 8
} */

/* const Riya = {
    name: "Riya",
    dob: 2003,
    graduated: false,
        age: function() {
            console.log(this);
            return 2020 - this.dob;
        }
};

const { name, age} = Riya; */
/* 
const presidents = [
    { name: "Donald Trump", terms: 1, party: "R" },
    { name: "Barack Obama", terms: 2, party: "D" },
    { name: "George W. Bush", terms: 2, party: "R" },
    { name: "Bill Clinton", terms: 2, party: "D" },
    { name: "George H.W. Bush", terms: 1, party: "R" },
    { name: "Ronald Reagan", terms: 2, party: "R" },
    { name: "Jimmy Carter", terms: 1, party: "D" },
    { name: "Gerlad Ford", terms: 1, party: "R" },
    { name: "Richard Nixon", terms: 2, party: "R" },
    { name: "John F. Kennedy", terms: 1, party: "D" },
    { name: "Lyndon Johnson", terms: 2, party: "D" },
    { name: "Dwight Eisenhower", terms: 2, party: "R" }
  ];  */
   
//NOTE! ! ! (need to block const presidents and use var when looking at #2 and #4,
//and also block the code for the question when you're looking at the other one
//I really tried and this is the best I could do T_T)

  //Challenge Questions
  //1) Filter all presidents, leaving only the Democratic ones
 /*   const Dems = presidents.filter(president => president.party === "D");  */

  //2)Filter all presidents to leave only one term Republican presidents HINT use If statement

var presidents = [
    { name: "Donald Trump", terms: 1, party: "R" },
    { name: "Barack Obama", terms: 2, party: "D" },
    { name: "George W. Bush", terms: 2, party: "R" },
    { name: "Bill Clinton", terms: 2, party: "D" },
    { name: "George H.W. Bush", terms: 1, party: "R" },
    { name: "Ronald Reagan", terms: 2, party: "R" },
    { name: "Jimmy Carter", terms: 1, party: "D" },
    { name: "Gerlad Ford", terms: 1, party: "R" },
    { name: "Richard Nixon", terms: 2, party: "R" },
    { name: "John F. Kennedy", terms: 1, party: "D" },
    { name: "Lyndon Johnson", terms: 2, party: "D" },
    { name: "Dwight Eisenhower", terms: 2, party: "R" }
  ]; 
  var filter = {
    terms: 1, 
    party: "R"
}; 

 presidents = presidents.filter(function(item) {
    for (var key in filter) {
        if (item[key] === undefined || item[key] != filter[key])
            return false;
    }
    return true;
}); 
console.log(presidents);

  //3) return only the last three presidents
  console.log(presidents.slice(-3))  
   
  //4) log all dems who served 2 terms. HINT use chain filter, filter and slice
/*   var filter = {
    terms: 2, 
    party: "D"
  }

presidents = presidents.filter(function(item) {
    for (var key in filter) {
        if (item[key] === undefined || item[key] != filter[key])
            return false;
    }
    return true;
});

console.log(presidents); */
   
  //BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"