window.onload = function() {
  let first = "A ";

  let noun = ["The dog", "My grandma", "The mailman", "My bird"];

  let action = ["ate", "peed", "crushed", "broke"];
  let possetion = ["my homework ", "my car ", "my home "];
  let where = [
    "on the street",
    "in my house",
    "in my driveway",
    "in front of the office",
    "near the mall",
    "near the toilet",
    "at the bus station"
  ];

  let rdm1 = Math.floor(Math.random() * noun.length);
  let rdm2 = Math.floor(Math.random() * action.length);
  let rdm3 = Math.floor(Math.random() * possetion.length);
  let rdm4 = Math.floor(Math.random() * where.length);

  document.querySelector("#excuse").innerHTML =
    first + noun[rdm1] + action[rdm2] + possetion[rdm3] + where[rdm4];
};

