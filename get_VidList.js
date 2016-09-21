const reqFbVids = require('./facebook/get_channelVidsALT');
const reqYtVids = require('./youtube/get_channelVidsALT');
const fs = require('fs');

const fb_channels = {
  buzzfeed: '1318800798260799',
  tastemade: '268804973206677',
  nowthis: '341163402640457'
};
const yt_channels = {
  buzzfeed: 'BuzzFeedVideo',
  tastemade: 'tastemade',
  nowthis: 'nowthismedia'
}

function getFbVids(channel_id, end_file_name) {
  reqFbVids(channel_id).then(function(video_list) {
    let fb_vid_times = [];

    video_list.forEach((vid) => {
      let vid_obj = {
        timestamp: vid.updated_time,
        title: vid.description,
        source: 'Facebook'
      };

      fb_vid_times.push(vid_obj);
    });

    fs.writeFile('./data/vid_lists/facebook/' + end_file_name + 'vids_800.json', JSON.stringify(fb_vid_times, null, 2), function(err) {
      if (err) throw err;
      console.log(fb_vid_times.length + ' Facebook videos saved');
    });
  });
}

function getYtVids(channel_name, end_file_name) {
  reqYtVids(channel_name).then(function(video_list) {
    let yt_vid_times = [];

    video_list.forEach((vid) => {
      let vid_obj = {
        timestamp: vid.snippet.publishedAt,
        title: vid.snippet.title,
        source: 'YouTube'
      };

      yt_vid_times.push(vid_obj);
    });

    fs.writeFile('./data/vid_lists/youtube/' + end_file_name + 'vids_800.json', JSON.stringify(yt_vid_times, null, 2), function(err) {
      if (err) throw err;
      console.log(yt_vid_times.length + ' YouTube videos saved');
    });
  });
}

const pub_to_check = 'tastemade';

const fb_channel_id = fb_channels[pub_to_check];
const yt_channel_name = yt_channels[pub_to_check];

getFbVids(fb_channel_id, pub_to_check);
getYtVids(yt_channel_name, pub_to_check);
