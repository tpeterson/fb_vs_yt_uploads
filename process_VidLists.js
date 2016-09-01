const fs = require('fs');
const processHelper = require('./processHelper');

const publisher = 'nowthis'

const fb_data = fs.readFileSync(`./data/vid_lists/facebook/${publisher}vids_200.json`);
const yt_data = fs.readFileSync(`./data/vid_lists/youtube/${publisher}vids_200.json`);

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

// let lists_by_date = combineVidLists(fb_vids_byDate, yt_vids_byDate);
// console.log(lists_by_date);
