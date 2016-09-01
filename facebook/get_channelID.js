const https = require('https');
const url = require('url');

const token = process.env.FACEBOOK_GRAPH;

function fetchPageID(channel_name) {
  let q = {
    access_token: token
  };

  let link = {
    protocol: 'https',
    hostname: 'graph.facebook.com',
    pathname: channel_name,
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
        resolve(info.id);
      });
    }).end();
  });
}

if (!module.parent) {
  let channel = 'NowThisNews';//'tastemade';//'BuzzFeedVideo';
  fetchPageID(channel).then(function(res){
    console.log(res);
  });
}

module.exports = fetchPageID;
