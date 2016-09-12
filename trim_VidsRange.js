const fs = require('fs');
const processHelper = require('./processHelper');

const publisher = 'tastemade';

const fb_data = fs.readFileSync(`./data/vid_lists/facebook/${publisher}vids_800.json`);
const yt_data = fs.readFileSync(`./data/vid_lists/youtube/${publisher}vids_800.json`);

const fb_vids = JSON.parse(fb_data);
const yt_vids = JSON.parse(yt_data);

const fb_vids_100 = processHelper.sortByProperty(fb_vids, 'timestamp').reverse().slice(0,100);
const yt_vids_100 =  processHelper.sortByProperty(yt_vids, 'timestamp').reverse().slice(0,100);

let fb_vids_100_byDate = processHelper.addVidsByDate(fb_vids_100, 'Facebook');
let yt_vids_100_byDate = processHelper.addVidsByDate(yt_vids_100, 'YouTube');

console.log('Facebook');
console.log(fb_vids_100_byDate);
console.log('YouTube');
console.log(fb_vids_100_byDate);

fs.writeFile('./data/vidByDate_lists/facebook/100_vids/' + publisher + 'vids_100.json', JSON.stringify(fb_vids_100_byDate, null, 2), function(err) {
  if (err) throw err;
  console.log(fb_vids_100_byDate.length + ' Facebook dates saved');
});

fs.writeFile('./data/vidByDate_lists/youtube/100_vids/' + publisher + 'vids_100.json', JSON.stringify(yt_vids_100_byDate, null, 2), function(err) {
  if (err) throw err;
  console.log(yt_vids_100_byDate.length + ' YouTube dates saved');
});
