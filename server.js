const osmosis = require('osmosis');

const searchByImage = async (url) => {
    let results = [];
    await osmosis
        .get('https://www.google.com/searchbyimage?image_url=' + encodeURIComponent(url))
        .set([
            osmosis
                .find('#rso>.g')
                .set({
                    header: 'h3',
                    link: '@href',
                })
                .data((site) => {
                    site.header = site.header.replace(/[^\w\s]/gi, '');
                })
        ])
        .data((sites) => {
            results = sites;
        });
    return results;
}

module.exports = searchByImage;