var mix = [42, true, "towel", [2, 1], 'hello', 34.4, { "name": "juan" }];

//your code here
var typeVal = [];

for (var item in mix) {
    typeVal.push(typeof (mix[item]));

}
console.log(typeVal)

