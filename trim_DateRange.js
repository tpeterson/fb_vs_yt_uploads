const fs = require('fs');

const publisher = 'nowthis';

const fb_data = fs.readFileSync(`./data/vidByDate_lists/facebook/${publisher}vid_dates_800.json`);
const yt_data = fs.readFileSync(`./data/vidByDate_lists/youtube/${publisher}vid_dates_800.json`);

const fb_dates = JSON.parse(fb_data);
const yt_dates = JSON.parse(yt_data);

let fb_dates_30 = fb_dates.slice(0,30);
let yt_dates_30 = yt_dates.slice(0,30);

console.log('Facebook');
console.log(fb_dates_30);
console.log('YouTube');
console.log(yt_dates_30);
