const https = require('https');
const url = require('url');

const token = process.env.YOUTUBE;
const vids_to_get = 200;
let total_vids = [];

function fetchRecentUploadsID(channel_name) {
  let q = {
    part: 'contentDetails',
    forUsername: channel_name,
    key: token
  };

  let link = {
    protocol: 'https',
    hostname: 'www.googleapis.com/youtube/v3',
    pathname: 'channels',
    query: q
  };

  return new Promise(function(resolve, reject) {
    https.request(url.format(link), function(res) {
      let data = new Buffer(0);

      res.on('data', function(chunk) {
        data += chunk;
      });

      res.on('end', function() {
        let info = JSON.parse(data.toString());
        resolve(info);
      })
    }).end();
  });
}

function fetchChannelVideos(channel_ID) {
  let q = {
    part: 'snippet',
    playlistId: channel_ID,
    maxResults: 25,
    key: token
  };

  let link = {
    protocol: 'https',
    hostname: 'www.googleapis.com/youtube/v3',
    pathname: 'playlistItems',
    query: q
  };

  return new Promise(function(resolve, reject) {
    reqVids(url.format(link), channel_ID, resolve);
  });
}

function reqVids(address, channel, cb) {
  https.request(address, function(res) {
    let data = new Buffer(0);

    res.on('data', function(chunk) {
      data += chunk;
    });

    res.on('end', function() {
      let info = JSON.parse(data.toString());
      let videos = info.items;
      total_vids = total_vids.concat(videos);
      if (info.nextPageToken && (total_vids.length < vids_to_get)) {
        let q = {
          part: 'snippet',
          playlistId: channel,
          maxResults: 25,
          nextPageToken: info.nextPageToken,
          key: token
        };

        let link = {
          protocol: 'https',
          hostname: 'www.googleapis.com/youtube/v3',
          pathname: 'playlistItems',
          query: q
        };

        let new_address = url.format(link);
        reqVids(new_address, channel, cb);
      } else {
        cb(total_vids);
      }
    });
  }).end();
}

function fetchRecentUploadsList(channel_name) {
  return fetchRecentUploadsID(channel_name).then(function(res) {
    let uploads_id = res.items[0].contentDetails.relatedPlaylists.uploads;

    return fetchChannelVideos(uploads_id).then(function(res) {
      return res;
    });
  });
}

if (!module.parent) {
  let channel_name = 'BuzzFeedVideo';
  fetchRecentUploadsList(channel_name).then(function(video_list) {
    console.log(video_list.length);
    console.log(video_list[0] ? video_list[0] : 'no videos');
  });
}

module.exports = fetchRecentUploadsList;
