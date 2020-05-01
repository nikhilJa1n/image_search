const osmosis = require('osmosis');

const searchByImage = async (url) => {
    let results = [];
    await osmosis
        .get('https://www.google.com/searchbyimage?image_url=' + encodeURIComponent(url))
        .set([
            osmosis
                .find('#rso>.g')
                .set({
                    url: '@href',
                    title: 'h3'
                })
        ])
        .data((sites) => {
            results = sites;
        });
    return results;
}

module.exports = searchByImage;