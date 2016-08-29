const https = require('https');
const url = require('url');

const token = process.env.FACEBOOK_GRAPH;

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
    https.request(url.format(link), function(res) {
      let data = new Buffer(0);

      res.on('data', function(chunk) {
        data += chunk;
      });

      res.on('end', function() {
        let info = JSON.parse(data.toString());
        let videos = info.data;
        resolve(videos);
      })
    }).end();
  });
}

if (!module.parent) {
  let channel_ID = '268804973206677';//'1318800798260799';
  fetchPageVideos(channel_ID).then(function(res){
    console.log(res.length);
    console.log(res[0] ? res[0] : 'no videos');
  });
}

module.exports = fetchPageVideos;
