let students = [
    {name:"Antonio", surname:"Iannibelli", age:"22", city:"Napoli", hoppy:"Playng videogames", favoriteFood:"Pizza", favoriteVideoGame:"Call of duty", favoriteFilm: "Interstellar", favoriteBook:"", petName:"Dalì"},
    {name : 'Joele', surname : 'Esposito', age : '21', city : 'Massa', hobby : 'Guitar playing', favoriteFood : '', favoriteVideoGame : 'Ocarina of time', favoriteFilm : 'Taxi driver', favoriteBook : '', petName : '' },
    {name : "Vincenzo",surname : "Pallante",age : "28",city : "Verona",hobby : "Play the guitar",favoriteFood : "Pizza",favoriteVideoGame : "Call of Duty",favoriteFilm : "I'm legend",favoriteBook : "Undefined",petName : "Marley"}
];


function getMiddleAge(students){
    let ageCount = 0;
    students.forEach(element => { 
        
        ageCount += Number(element.age);
        
    });

    let midAge = ageCount;

    console.log(midAge);
}

function hasPet(students){
    students.forEach(element => {
        if (element.petName){
            console.log(`${element.name} ${element.petName}`);
        } 
    })
}

getMiddleAge(students)