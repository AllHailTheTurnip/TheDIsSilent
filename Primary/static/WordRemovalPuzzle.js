// Creates three lists of names: two that contain several duplicates, and one that's empty.
const ListOfNames1 =
    [
        "Matt Johnson",
        "Matt Johnson",
        "Bart Paden",
        "Ryan Doss",
        "Jared Malcolm"
    ];
const ListOfNames2 =
    [
        "Matt Johnson",
        "Bart Paden",
        "Bart Paden",
        "Jordan Heigle",
        "Jordan Heigle",
        "Tyler Viles"
    ];

let ListOfNames3 = [];
let alreadyCompleted = false;

// Combines the two arrays and returns a new one with only unique albums.
function RemoveCopies(array1, array2) {

    // First check if the process has been done before, and if so, abort.
    if (alreadyCompleted) {
        window.alert("The list has already been sorted.")
        return ListOfNames3;
    }

    // Combine the arrays and return a unique one.
    let array3 = array1.concat(array2);
    array3 = Array.from(new Set(array3));

    // Flags it to true, so it won't be done twice.
    alreadyCompleted = true;
    return array3
}

// Populates (what is assumed to be) a list-type element with a list-items elements, containing items
// from an array.
function PopulateBulletedList(targetList, array) {
    let list = document.getElementById(targetList);

    // Append the UL's inner HTML.
    let listHTML = "";
    for (let i = 0; i < array.length; i++) {
        let arrayItem = array[i];
        listHTML += `<li>` + arrayItem + `</li>`;
    }

    list.innerHTML = listHTML;
}