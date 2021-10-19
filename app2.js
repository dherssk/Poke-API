for (let i = 1; i <= 100; i++) {
  const pokeURL = "https://pokeapi.co/api/v2/pokemon/" + i;
  fetch(pokeURL)
    .then((respuesta) => respuesta.json())
    .catch((err) => {
      setLoading(false);
      setError(true);
    })
    .then((data) => {
      let tabla = document.getElementById("tablaPokemon");
      const pokeImg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+ i +".png";
      let pokeID = data.id;
      let pokeName = data.name;
        console.log(pokeImg);
      const datos = `
                <tr>
                    <td> ${pokeID} </td>
                    <td> ${pokeName} </td>
                    <td> <img src="${pokeImg}"> </td>
                </tr>`;
      tabla.innerHTML += datos;
    });
};