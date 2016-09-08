const fs = require('fs');
const processHelper = require('./processHelper');

const publisher = 'tastemade';

const fb_data = fs.readFileSync(`./data/vid_lists/facebook/${publisher}vids_800.json`);
const yt_data = fs.readFileSync(`./data/vid_lists/youtube/${publisher}vids_800.json`);

const fb_vids = JSON.parse(fb_data);
const yt_vids = JSON.parse(yt_data);

const fb_vids_100 = processHelper.sortByProperty(fb_vids, 'timestamp').reverse().slice(0,100);
const yt_vids_100 =  processHelper.sortByProperty(yt_vids, 'timestamp').reverse().slice(0,100);

console.log('Facebook');
console.log(fb_vids_100);
console.log('YouTube');
console.log(fb_vids_100);

fs.writeFile('./data/vidByDate_lists/facebook/100_vids/' + publisher + 'vids_100.json', JSON.stringify(fb_vids_100, null, 2), function(err) {
  if (err) throw err;
  console.log(fb_vids_100.length + ' Facebook dates saved');
});

fs.writeFile('./data/vidByDate_lists/youtube/100_vids/' + publisher + 'vids_100.json', JSON.stringify(yt_vids_100, null, 2), function(err) {
  if (err) throw err;
  console.log(yt_vids_100.length + ' YouTube dates saved');
});
