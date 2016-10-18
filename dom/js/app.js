//put interpreter into strict mode
"use strict";

console.log(numeral(BABYNAMES.length).format ("0.0"));

function compareSex(sex) { //closure: return a function of a function 
    return function (record) {
        return sex == record.sex; 
    }
}

//SORTING: 

function compareByCount (rec1, rec2) {
    return rec1.count - rec2.count; //if rec 1 is less than 1, then it goes before - that's the logic
}

function descending (comparator) {
    return function(rec1, rec2) {
        return -(comparator(rec1, rec2));
    }
}

//filtering and ordering the names 
var females = BABYNAMES.filter(compareSex ("F")); 
females.sort(descending(compareByCount));
console.log(females.length);

var males = BABYNAMES.filter (compareSex ("M"));
console.log(males.length);

var tbody = document.querySelector("tbody");

function render(records) {
    tbody.innerHTML = ""; // how to clear the thing so we can rerender

    records.forEach(function(record) {
        var tr = document.createElement("tr");
        tr.classList.add("sex-" + record.sex.toLowerCase()); //add and remove style classes

        var td = document.createElement("td");
        td.textContent = record.name;
        tr.appendChild(td);

        td = document.createElement("td");
        td.textContent = record.sex;
        tr.appendChild(td);

        td = document.createElement("td");
        td.textContent = record.count;
        tr.appendChild(td);

        tbody.appendChild(tr);
    });
}

render(BABYNAMES);

//render(females.slce (0,100)); //Top 100 of females

var searchInput = document.getElementById ("name-search-input");
searchInput.addEventListener ("input", function() {
    //console.log("input event"); to put input things into the console
    var query = searchInput.value.toLowerCase(); // make sure you are comparing lowercase to lowercase 
    if (query.length < 2) {
        render(BABYNAMES);
        return;
    }
    var matches = BABYNAMES.filter(function(record) {
        return record.name.toLowerCase().indexOf(query) >=0;
    });
    render(matches);

});

var countColHeading = document.getElementById ("count-col-header");
countColHeading.addEventListener("click", function () {
        console.log ("clicked col header!");
        BABYNAMES.sort(descending(compareByCount));
        render(BABYNAMES);

});



