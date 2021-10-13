const exampleSet = new Set([1, 2, 3, 4, 5]);

exampleSet.add(7).add(19);
exampleSet.delete(2);


console.log(exampleSet);
console.log(exampleSet.has(4));

exampleSet.clear();

console.log(exampleSet);