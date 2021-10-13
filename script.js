let countriesInfo = [
    {
      name: "India",
      population: " 1,394,975,829",
      region: "Asia",
      flag: "https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png",
      capital: "New delhi",
    },
    {
      name: "Germany",
      population: "81,770,900",
      region: "Europe",
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
      capital: "Berlin",
    },
    {
      name: "United states",
      population: "323,947,000",
      region: "Americas",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png",
      capital: "Washington D.C",
    },
    {
      name: "Brazil",
      population: "206,135,893",
      region: "Americas",
      flag: "https://upload.wikimedia.org/wikipedia/commons/0/01/Brazil_flag_300.png",
      capital: "Brasilia",
    },
    {
      name: "Iceland",
      population: "334,300",
      region: "Europe",
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/640px-Flag_of_Iceland.svg.png",
      capital: "Reykjavik",
    },
  
    {
      name: "Kuwait",
      population: "4270563",
      region: "Asia",
      flag: "https://flagcdn.com/w320/kw.png",
      capital: "Kuwait City",
    },
    {
      name: "Bangladesh",
      population: "164689383",
      region: "Asia",
      flag: "https://flagcdn.com/w320/bd.png",
      capital: "Dhaka",
    },
    {
      name:"Indonesia" ,
      population:"273523621" ,
      region:"Asia" ,
      flag: "https://flagcdn.com/w320/id.png" ,
      capital:"Jakarta" ,
    },
    {
      name: "Canada",
      population: "38005238",
      region: "Americas",
      flag: "https://flagcdn.com/w320/ca.png",
      capital: "Ottawa",
    },
    {
      name: "Australia",
      population: "25687041",
      region: "Oceania",
      flag: "https://flagcdn.com/w320/au.png",
      capital: "Canberra",
    },
  ];
  

  const country = document.createElement("div");
  countriesInfo.forEach((users) =>{
      const container = document.createElement("div");
      container.className = "container";
      container.innerHTML = `
      <img src="${users.flag}">
      <div>Name: ${users.name}</div>
      <div>Population: ${users.population}</div>
      <div>Region: ${users.region}</div>
      <div>Capital: ${users.capital}</div><br>
      `;
      country.append(container);
  });
  document.body.append(country);