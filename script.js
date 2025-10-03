let activities = [
{ place: "the beach", activity: "swimming" },
{ place: "city", activity: "shopping" },
{ place: "Puerto Rico", activity: "traveling" },
{ place: "a concert", activity: "singing" },
{ place: "summer house", activity: "sleep" }
];

function generateWish() {

}
// query select the div

let container = document.querySelector (".container");


activities.forEach((obj) => {
    let html = "<div class= \"card\" >" + obj.place + "</div>";
    container.insertAdjacentHTML("beforeend", html );
});



