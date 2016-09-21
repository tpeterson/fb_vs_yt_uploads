const fs = require('fs');
const processHelper = require('./processHelper');

const publisher = 'tastemade';

const fb_data = fs.readFileSync(`./data/vid_lists/facebook/${publisher}vids_800.json`);
const yt_data = fs.readFileSync(`./data/vid_lists/youtube/${publisher}vids_800.json`);

const fb_vids = JSON.parse(fb_data);
const yt_vids = JSON.parse(yt_data);

let fb_vids_byDate = processHelper.addVidsByDate(fb_vids, 'Facebook');
let yt_vids_byDate = processHelper.addVidsByDate(yt_vids, 'YouTube');

function getAvgVidsPerDay(date_arr, vid_arr) {
  let total_vids = vid_arr.length;
  let total_days = date_arr.length;

  return total_vids / total_days;
}

let fb_avg = getAvgVidsPerDay(fb_vids_byDate, fb_vids);
let yt_avg = getAvgVidsPerDay(yt_vids_byDate, yt_vids);

console.log(`Facebook: ${fb_avg} videos per day`);
console.log(`YouTube: ${yt_avg} videos per day`);
