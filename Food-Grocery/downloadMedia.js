const fs = require('fs');
const request = require('request');
const groceryListPath = './src/groceryList.json';
const groceries = require(groceryListPath);

const download = (grocery, filename) => {
  return new Promise((resolve, reject) => {
    request.head(grocery.url, (err, res, body) => {
      if (err) {
        reject(console.log('err for url', grocery.url, err));
        return;
      }

      request(grocery.url)
        .pipe(fs.createWriteStream(filename))
        .on('close', resolve);
    });
  });
};

let newGroceriesURLs = [];
let downloadPromises = [];

console.log('beginning download...');

groceries.forEach((grocery, index) => {
  const nameGUID =
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15);

  const newURL = `${nameGUID}.jpg`;
  const downloadLocation = `./public/img/${newURL}`;
  const p = download(grocery, downloadLocation);

  downloadPromises.push(p);
  newGroceriesURLs.push(newURL);
});

Promise.all(downloadPromises).then(() => {
  console.log('done with download');
  newGroceriesURLs.forEach((newURL, index) => {
    groceries[index].url = `/img/${newURL}`;
  });

  console.log('writing file with new URLs...');
  fs.writeFileSync(groceryListPath, JSON.stringify(groceries, null, 2));
});
