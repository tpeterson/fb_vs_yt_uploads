const https = require('https');
const url = require('url');

const token = process.env.YOUTUBE;

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

function fetchRecentUploadsList(channel_name) {
  return fetchRecentUploadsID(channel_name).then(function(res) {
    let uploads_id = res.items[0].contentDetails.relatedPlaylists.uploads;

    return fetchChannelVideos(uploads_id).then(function(res) {
      return res.items;
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
