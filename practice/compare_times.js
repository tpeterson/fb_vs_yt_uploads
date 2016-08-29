const getFbVids = require('../facebook/get_channelVids');
const getYtVids = require('../youtube/get_ChannelVids');

const fb_channel_id = '268804973206677';//'1318800798260799';
const yt_channel_name = 'tastemade';//'BuzzFeedVideo';

let fb_vid_times = [];
let yt_vid_times = [];

getFbVids(fb_channel_id).then(function(video_list) {
  video_list.forEach((vid) => {
    let vid_obj = {
      timestamp: vid.updated_time,
      title: vid.description,
      source: 'Facebook'
    };
    fb_vid_times.push(vid_obj);
    //fb_vid_times.push(vid.updated_time);
  });

  if (fb_vid_times.length === 25 && yt_vid_times.length == 25) {
    sortLists(fb_vid_times, yt_vid_times);
  }
});

getYtVids(yt_channel_name).then(function(video_list) {
  video_list.forEach((vid) => {
    let vid_obj = {
      timestamp: vid.snippet.publishedAt,
      title: vid.snippet.title,
      source: 'YouTube'
    };
    //yt_vid_times.push(vid.snippet.publishedAt);
    yt_vid_times.push(vid_obj);
  });

  if (fb_vid_times.length === 25 && yt_vid_times.length == 25) {
    sortLists(fb_vid_times, yt_vid_times);
  }
});

function sortLists(fb_list, yt_list) {
  sortByTimestamp(fb_list);
  sortByTimestamp(yt_list);

  console.log('FACEBOOK');
  console.log(fb_list);
  console.log('YOUTUBE');
  console.log(yt_list);

  //let fb_data = objectifyLists(fb_list, 'Facebook');
  //let yt_data = objectifyLists(yt_list, 'Youtube');

  let total_data = combineLists(fb_list, yt_list);
}

function objectifyLists(list, list_name) {
  let end_list = [];
  list.forEach((x) => {
    let item = {
      source: list_name,
      timestamp: new Date(x)
    };
    end_list.push(item);
  });
  return end_list;
}

function combineLists(fb_data, yt_data) {
  let all_data = yt_data.concat(fb_data);
	sortByTimestamp(all_data);
  return all_data;
}

function sortByTimestamp(arr) {
  arr.sort(function(a, b) {
		if (a.timestamp > b.timestamp) {
			return 1;
		}
		if (a.timestamp < b.timestamp) {
			return -1;
		}
		return 0;
	});
}
