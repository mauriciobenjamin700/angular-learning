
type Hero ={
    name: string;
    hero_name: string;
}

function printHero(hero: Hero){
    console.log(hero);
}

printHero({
    name: 'Bruce Wayne',
    hero_name: 'Batman'
})