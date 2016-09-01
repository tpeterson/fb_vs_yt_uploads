const https = require('https');
const url = require('url');

const token = process.env.FACEBOOK_GRAPH;
const vids_to_get = 200;
let total_vids = [];

function fetchPageVideos(channel_ID) {
  let q = {
    access_token: token
  };

  let link = {
    protocol: 'https',
    hostname: 'graph.facebook.com/v2.7',
    pathname: channel_ID + '/videos',
    query: q
  };

  return new Promise(function(resolve, reject) {
    reqVids(url.format(link), resolve);
  });
}

function reqVids(address, cb) {
  https.request(address, function(res) {
    let data = new Buffer(0);

    res.on('data', function(chunk) {
      data += chunk;
    });

    res.on('end', function() {
      let info = JSON.parse(data.toString());
      let videos = info.data;
      total_vids = total_vids.concat(videos);
      if (info.paging.next && (total_vids.length < vids_to_get)) {
        reqVids(info.paging.next, cb);
      } else {
        cb(total_vids);
      }
    });
  }).end();
}


if (!module.parent) {
  let channel_ID = '1318800798260799';
  fetchPageVideos(channel_ID).then(function(res) {
    console.log(res.length);
    console.log(res[0] ? res[0] : 'no videos');
  });
}

module.exports = fetchPageVideos;
