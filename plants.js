
//some variables that contain the possible values for different keys
var locations = [
  "Amazon",
  "Sahara",
  "Trinidad",
  "Galapagos",
  "Bruce Trail",
  "Yellowstone",
  "Fiji",
  "Kew Gardens",
  "Walmart",
  "Evergreen Brickworks"
];
var colours = [
  "red",
  "blue",
  "white",
  "yellow"
];

/*make a function that builds a plant and populates its keys with randomly chosen values
and "return" it*/
function makePlant () {
  var plant = {};
  plant.height = 5*getRandomInt (1, 10) + 5*getRandomInt (1, 10);
  plant.petal_number = getRandomInt (2, 6);
  if (getRandomInt(0, 1)==0) {
    plant.leaf_veins = "parallel";
  } else {
    plant.leaf_veins = "branched";
  }
  plant.location = locations[getRandomInt(0, locations.length-1)];
  plant.petal_colour = colours[getRandomInt(0, colours.length-1)];
  return plant;
};

function makeIndex (trait, plantList) {
  var index = {};
  plantList.forEach(function(plant){
    var value = plant[trait];
    if(!index.hasOwnProperty(value)){
      index[value] = [];
    }
    index[value].push(plant);
  });
  return(index);
};


//a function that returns a random integer between "min" and "max"
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//run makePlant 10 times and store the new plants in plantList
//then show the list on the console
var i;
var plantListTest = [];
for(i=0; i<1000; i++) {
  plantListTest.push(makePlant());
};
//console.log(plantListTest);
var index = makeIndex("height", plantListTest);
Object.keys(index).forEach(function(value){
  console.log(value, index[value].length);
});
