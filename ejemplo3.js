const series = {
    "serie1": {
      "name": "Game of Thrones",
      "premiereDate": "2023-03-01"
    },
    "serie2": {
      "name": "Breaking Bad",
      "premiereDate": "2022-09-05"
    },
    "serie3": {
      "name": "The Office",
      "premiereDate": "2023-03-15"
    },
    "serie4": {
      "name": "Stranger Things",
      "premiereDate": "2023-04-01"
    }
  };
  
  function findMarch2023Series(series) {
    const march2023Series = [];
    for (const serie in series) {
      if (series[serie].premiereDate.startsWith("2023-03")) {
        march2023Series.push(series[serie].name);
      }
    }
    return march2023Series;
  }
  
  console.log(findMarch2023Series(series));
  


 /* const findMarch2023Series = (series) => {
    const march2023Series = [];
    for (const serie in series) {
      if (series[serie].premiereDate.startsWith("2023-03")) {
        march2023Series.push(series[serie].name);
      }
    }
    return march2023Series;
  };
  
  console.log(findMarch2023Series(series));*/