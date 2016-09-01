const https = require('https');
const url = require('url');

const token = process.env.YOUTUBE;

function fetchChannelID(channel_name) {
  let q = {
    part: 'id',
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
      });
    }).end();
  });
}

if (!module.parent) {
  let channel = 'nowthismedia';
  fetchChannelID(channel).then(function(res){
    console.log(res);
  });
}

module.exports = fetchChannelID;
