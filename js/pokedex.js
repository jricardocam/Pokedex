const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./blur.jpg")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);
            let pokeId= data.id;
            PokeNum(pokeId);
            let pokename= data.name;
            PokeNombre(pokename);
            console.log(pokename);
            let ps = data.stats[0].base_stat;
            let at = data.stats[1].base_stat;
            let def =data.stats[2].base_stat;
            Pokeesta(ps,ps_element);
            Pokeesta(at,at_element);
            Pokeesta(def,def_element);

            let m1= data.moves[0].move.name;
            let m2= data.moves[1].move.name;
            let m3= data.moves[2].move.name;
            Pokemov(m1,m1_element);
            Pokemov(m2,m2_element);
            Pokemov(m3,m3_element);   
            let pokepeso= data.weight;
            pokeWeight(pokepeso);   
     
            let pokealtura= data.height;
            pokeHeight(pokealtura);   
   
        }
    });
}
const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeWeight =(url)=>{
    const peso = document.getElementById("peso");
    peso.innerHTML=url;
}

const pokeHeight =(url)=>{
    const altura = document.getElementById("altura");
    altura.innerHTML=url;
}

const PokeNum=(url)=>{
    const num= document.getElementById("NumPok");
    num.innerHTML=url;
}

const PokeNombre=(url)=>{
    const nombre= document.getElementById("NomPok");
    nombre.innerHTML=url;
}

const m1_element = document.getElementById("m1");
const m2_element = document.getElementById("m2");
const m3_element = document.getElementById("m3");

const Pokemov = (url,elementoHtml) =>{
    elementoHtml.innerHTML = url;
}

const ps_element = document.getElementById("PS");
const at_element = document.getElementById("att");
const def_element = document.getElementById("defe");

const Pokeesta = (url,elementoHtml) =>{
elementoHtml.innerHTML = url;

}

