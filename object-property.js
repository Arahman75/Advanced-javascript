const student = [
    {id: 21, name:"Omar Sunny"},
    {id: 31, name:"Maaannaaa"},
    {id: 41, name:"Moyoury"},
    {id: 71, name:"DeepJol"},
    
]
const output = [];
for(let i = 0; i < student.length; i ++){
    const element = student[i];
    const result = element;
    output.push(result);
}
console.log(output);

const student = [
    {id: 21, name:"Omar Sunny"},
    {id: 31, name:"Maannaaa"},
    {id: 41, name:"Moyoury"},
    {id: 71, name:"DeepJol"},
    

]
const names = student.map(s => s.name);
console.log(names);

const student = [
    {id: 21, name:"Omar Sunny"},
    {id: 31, name:"Maannaaa"},
    {id: 41, name:"Moyoury"},
    {id: 71, name:"DeepJol"},
    

]
const ids = student.map(s => s.id);
console.log(ids);

const student = [
    {id: 21, name:"Omar Sunny"},
    {id: 31, name:"Maannaaa"},
    {id: 41, name:"Moyoury"},
    {id: 71, name:"DeepJol"},
    

]
const bigger = student.filter(s => s.id > 40);
console.log(bigger);

const student = [
    {id: 21, name:"Omar Sunny"},
    {id: 31, name:"Maannaaa"},
    {id: 41, name:"Moyoury"},
    {id: 71, name:"DeepJol"},
    

]
const bigger2 = student.find(s => s.id > 40);
console.log(bigger2);