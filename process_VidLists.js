const fs = require('fs');
const processHelper = require('./processHelper');

const publisher = 'tastemade';

const fb_data = fs.readFileSync(`./data/vid_lists/facebook/${publisher}vids_800.json`);
const yt_data = fs.readFileSync(`./data/vid_lists/youtube/${publisher}vids_800.json`);

const fb_vids = JSON.parse(fb_data);
const yt_vids = JSON.parse(yt_data);

function combineVidLists(list_one, list_two) {
  let omni_list = list_one.concat(list_two);
	omni_list = processHelper.sortByProperty(omni_list, 'timestamp');
  return omni_list;
}

let fb_vids_byDate = processHelper.addVidsByDate(fb_vids, 'Facebook');
let yt_vids_byDate = processHelper.addVidsByDate(yt_vids, 'YouTube');

console.log('Facebook:');
console.log(fb_vids_byDate);
console.log('YouTube:');
console.log(yt_vids_byDate);

fs.writeFile('./data/vidByDate_lists/facebook/' + publisher + 'vid_dates_800.json', JSON.stringify(fb_vids_byDate, null, 2), function(err) {
  if (err) throw err;
  console.log(fb_vids_byDate.length + ' Facebook dates saved');
});

fs.writeFile('./data/vidByDate_lists/youtube/' + publisher + 'vid_dates_800.json', JSON.stringify(yt_vids_byDate, null, 2), function(err) {
  if (err) throw err;
  console.log(yt_vids_byDate.length + ' YouTube dates saved');
});

// let lists_by_date = combineVidLists(fb_vids_byDate, yt_vids_byDate);
// console.log(lists_by_date);
