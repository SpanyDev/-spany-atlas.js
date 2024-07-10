const axios = require('axios');

async function tdk(kelime) {
    try {
        const response = await axios.get(`https://sozluk.gov.tr/gts?ara=${encodeURIComponent(kelime)}`);
        const data = response.data;

        if (!data || data.error) {
            throw new Error('Kelime bulunamadı veya API hatası oluştu.');
        }

        const kelimeBilgileri = data[0];

        const anlamlarListe = kelimeBilgileri?.anlamlarListe || [];
        const anlamlar = anlamlarListe.map(item => {
            let anlamObj = {
                anlam_id: item.anlam_id,
                anlam: item.anlam,
                anlam_sira: item.anlam_sira,
                orneklerListe: item.orneklerListe || []
            };

            if (item.ozel_mi !== undefined) anlamObj.ozel_mi = item.ozel_mi;
            if (item.cogul_mu !== undefined) anlamObj.cogul_mu = item.cogul_mu;
            if (item.lisan !== undefined) anlamObj.lisan = item.lisan;

            return anlamObj;
        });

        const birlesikler = kelimeBilgileri?.birlesikler || [];

        return {
            kelime: kelimeBilgileri?.madde,
            madde_id: kelimeBilgileri?.madde_id,
            kac: kelimeBilgileri?.kac,
            birlesikler: birlesikler,
            anlamlar: anlamlar,
        };
    } catch (error) {
        console.error('Bir hata oluştu:', error.message);
        return {
            kelime: kelime,
            anlamlar: [],
            hata: error.message
        };
    }
}

module.exports = tdk;