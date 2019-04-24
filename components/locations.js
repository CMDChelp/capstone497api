const locations = [
    {
        name: 'arts',
        niceName: "Arts Building"
    },
    {
        name: 'cchm',
        niceName: "Clark County Historical Museum"
    },
    {
        name: 'elks',
        niceName: "Elks Building"
    },
    {
        name: 'esther',
        niceName: "Esther Short Park"
    },
    {
        name: 'evergreen',
        niceName: "Evergreen Hotel"
    },
    {
        name: 'heritage',
        niceName: "Heritage Building"
    },
    {
        name: 'hidden',
        niceName: "Hidden House"
    },
    {
        name: 'kiggins',
        niceName: "Kiggins Theatre"
    },
    {
        name: 'providence',
        niceName: "Providence Academy"
    },
    {
        name: 'schofield',
        niceName: "Schofield Building"
    },
    {
        name: 'slocum',
        niceName: "Slocum House"
    },
    {
        name: 'smith',
        niceName: "Smith Tower"
    },
]

class Locations {
    getAll(res) {
        res.send(locations);
    }

    getOne(res, name) {
        res.send(locations.find(loc => loc.name === name) || {});
    }
}

module.exports = new Locations();