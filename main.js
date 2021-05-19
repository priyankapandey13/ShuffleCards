// Algorithm :
// 1) Generate cards : CreateCards
// 2) Generate a new random array : using Math.random and then sorting it

const mainarr = [
  { cardid: 1, class: "card1" },
  { cardid: 2, class: "card2" },
  { cardid: 3, class: "card3" },
  { cardid: 4, class: "card4" },
  { cardid: 5, class: "card5" },
  { cardid: 6, class: "card6" },
  { cardid: 7, class: "card7" },
  { cardid: 8, class: "card8" },
  { cardid: 9, class: "card9" },
];

function CreateCards(mainarr) {
  const result = mainarr.forEach((items) => {
    var element = document.createElement("div");
    element.innerText = items.cardid;
    element.className = items.class;
    document.getElementById("CardContainer").appendChild(element);
  });
}

function cleardiv() {
  document.getElementById("CardContainer").innerHTML = "";
}

function Shufflecards() {
  cleardiv();

  // randomize the array
  mainarr.sort(function () {
    return Math.random() - 0.5;
  });
  CreateCards(mainarr);
}

function Sortcards() {
  cleardiv();
  const fresharr = [
    { cardid: 1, class: "card1" },
    { cardid: 2, class: "card2" },
    { cardid: 3, class: "card3" },
    { cardid: 4, class: "card4" },
    { cardid: 5, class: "card5" },
    { cardid: 6, class: "card6" },
    { cardid: 7, class: "card7" },
    { cardid: 8, class: "card8" },
    { cardid: 9, class: "card9" },
  ];
  CreateCards(fresharr);
}

window.onload = () => {
  Sortcards();
};
