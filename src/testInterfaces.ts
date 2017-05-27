interface Animal {
    name: string;
    description: {
        code?: string;
        internationalIdentifier: string;
    }
}

function printAnimal(animal?: Animal) {
    if (animal){
        console.log("internationalIdentifier: ", animal.description.internationalIdentifier);
    }
}


printAnimal(
    {
        name: "", 
        description: { 
            internationalIdentifier: "3"
        }
    });