var greet = function (name, age) {
    var result = "Hello ".concat(name, ", you are ").concat(age, " old");
    console.log(result);
};
greet("John", 40);
;
var printStudent = function (student) {
    var result = JSON.stringify(student);
    console.log(result);
};
var student = {
    name: "Zayyni",
    age: 21,
    college: "LGU"
};
printStudent(student);
