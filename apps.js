let pets=["Fish","Dog", "Bird", "Cat"];
const Dog = {
    name: 'Spike',
    age: 2,
    type: 'Beagle',
}

for (var i = 0; i < pets.length; i++) 
{
    document.write (pets[i] + "<br>");
}
document.write( "<p> This is the one we want </p>")
document.write("<p>" + pets[1]+"</p>");
document.write(Dog.name);