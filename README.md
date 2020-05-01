# Image Search

Its a wrapper where anybody can search by an image.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install Image Search.

```bash
npm install --save image-search
```

## Usage

```javascript
const searchByImage = require("searchByImage");

searchByImage("<image_link>").then((res) => console.log(res));
```

## Outputs

```javascript
[
  {
    header: "Google's New Logo",
    link: "https://www.google.com/doodles/googles-new-logo",
  },
  {
    header: "Google+ Google Logo, PNG, 1600x1067px, Google, Brand, G ...",
    link: "https://favpng.com/png_view/google-google-google-logo-png/NHaPBUJP",
  },
  {
    header: "Smarter attribution for everyone - The Keyword",
    link:
      "https://www.blog.google/products/marketingplatform/analytics/smarter-attribution-for-everyone-pmm",
  },
  {
    header: "Google Logo Png 2017 - Clipart.Email",
    link: "https://www.clipart.email/clipart/google-logo-png-2017-489768.html",
  },
  {
    header: "Evolving the Google Identity - Library - Google Design",
    link: "https://design.google/library/evolving-google-identity/",
  },
  {
    header: "Join us live on May 23, 2017 as we announce the latest Ads ...",
    link:
      "https://www.blog.google/products/ads/join-us-live-on-may-23-2017-as-we_20",
  },
  {
    header: "Join us live on May 23, 2017 as we announce the latest ...",
    link:
      "https://www.blog.google/products/marketingplatform/analytics/join-us-live-on-may-23-2017-as-we",
  },
];
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
