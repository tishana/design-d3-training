function main(func) {
    d3.json('./cars.json', function (error, data) {
        if (error) {
            console.error('problem loading data');
        }

        func(data);
    });

}// Part 1 cars.json
//     - How many makes are considered common (where property make_is_common is 1)
getCommonMakes = (data) => {
    var makes = 0
    data.forEach(d => {
        if (d.make_is_common == 1) {
            makes += 1
        }
    });
    return makes
}
//     - How many makes are there per country.
getMakesPerCountry = (data) => {
    var mpc = data.map(d => {
        return d.make_country
    })
}

//     - How many makes are there by country and broken down by common and uncommon