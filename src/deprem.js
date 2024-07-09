const axios = require('axios');

async function sonDepremler(numberOfEarthquakes) {
    try {
        const response = await axios.get('https://api.orhanaydogdu.com.tr/deprem/kandilli/live');
        if (isNaN(sonDepremler)) throw new Error('sonDepremler parametresi sayı olmalıdır!');
        if (numberOfEarthquakes < 1) throw new Error('sonDepremler parametresi 1\'den küçük olamaz!');
        if (numberOfEarthquakes > response.data.result.length) throw new Error('API\'dan dönen deprem sayısından fazla bir değer girdiniz!');

        const depremler = response.data.result.slice(0, numberOfEarthquakes);

        const translatedDepremler = depremler.map(deprem => {
            return {
                "Deprem ID": deprem.id,
                "Tarih": deprem.date,
                "Büyüklük": deprem.mag,
                "Derinlik": deprem.depth,
                "Konum": deprem.title,
                "En Yakın Şehir": deprem.location_properties.closestCity.name,
                "En Yakın Şehire Mesafe (km)": (deprem.location_properties.closestCity.distance / 1000).toFixed(2),
                "En Yakın Şehir Nüfusu": deprem.location_properties.closestCity.population,
                "Merkez Üssü": deprem.location_properties.epiCenter.name,
                "Merkez Üssü Nüfusu": deprem.location_properties.epiCenter.population,
                "Koordinatlar": deprem.geojson.coordinates,
                "geoJson": deprem.geojson,
            };
        });

        return translatedDepremler;
    } catch (error) {
        console.error('API çağrısında hata oluştu:', error);
        throw error;
    }
}

module.exports = {
    sonDepremler
};