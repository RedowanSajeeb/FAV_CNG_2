

// ------------object-------------
var firstObject = {
    id: 200,
    name: "redowan",
    years: 2022,
    end: "the-end"
}
console.log(firstObject.id);
var da = firstObject.name ;
console.log(da);
// ---------------------cng

firstObject.id = 500;
console.log(firstObject);

firstObject["id"] = 700;
console.log(firstObject);

var rnd = "years";
firstObject [rnd] ="redo";
console.log(firstObject)
