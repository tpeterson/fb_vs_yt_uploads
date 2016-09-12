'use strict';
(function() {
  var fb_dates = [{
    "date": "2016-09-08",
    "num": 1,
    "source": "Facebook"
  }, {
    "date": "2016-09-07",
    "num": 18,
    "source": "Facebook"
  }, {
    "date": "2016-09-06",
    "num": 3,
    "source": "Facebook"
  }, {
    "date": "2016-09-02",
    "num": 5,
    "source": "Facebook"
  }, {
    "date": "2016-09-01",
    "num": 2,
    "source": "Facebook"
  }, {
    "date": "2016-08-31",
    "num": 7,
    "source": "Facebook"
  }, {
    "date": "2016-08-30",
    "num": 1,
    "source": "Facebook"
  }, {
    "date": "2016-08-29",
    "num": 12,
    "source": "Facebook"
  }, {
    "date": "2016-08-28",
    "num": 2,
    "source": "Facebook"
  }, {
    "date": "2016-08-27",
    "num": 2,
    "source": "Facebook"
  }, {
    "date": "2016-08-26",
    "num": 4,
    "source": "Facebook"
  }, {
    "date": "2016-08-25",
    "num": 5,
    "source": "Facebook"
  }, {
    "date": "2016-08-24",
    "num": 8,
    "source": "Facebook"
  }, {
    "date": "2016-08-23",
    "num": 3,
    "source": "Facebook"
  }, {
    "date": "2016-08-22",
    "num": 11,
    "source": "Facebook"
  }, {
    "date": "2016-08-21",
    "num": 3,
    "source": "Facebook"
  }, {
    "date": "2016-08-19",
    "num": 4,
    "source": "Facebook"
  }, {
    "date": "2016-08-18",
    "num": 4,
    "source": "Facebook"
  }, {
    "date": "2016-08-17",
    "num": 4,
    "source": "Facebook"
  }, {
    "date": "2016-08-16",
    "num": 1,
    "source": "Facebook"
  }];
  var yt_dates = [{
    "date": "2016-09-08",
    "num": 2,
    "source": "YouTube"
  }, {
    "date": "2016-09-07",
    "num": 3,
    "source": "YouTube"
  }, {
    "date": "2016-09-06",
    "num": 3,
    "source": "YouTube"
  }, {
    "date": "2016-09-05",
    "num": 2,
    "source": "YouTube"
  }, {
    "date": "2016-09-04",
    "num": 3,
    "source": "YouTube"
  }, {
    "date": "2016-09-03",
    "num": 4,
    "source": "YouTube"
  }, {
    "date": "2016-09-02",
    "num": 3,
    "source": "YouTube"
  }, {
    "date": "2016-09-01",
    "num": 3,
    "source": "YouTube"
  }, {
    "date": "2016-08-31",
    "num": 3,
    "source": "YouTube"
  }, {
    "date": "2016-08-30",
    "num": 3,
    "source": "YouTube"
  }, {
    "date": "2016-08-29",
    "num": 3,
    "source": "YouTube"
  }, {
    "date": "2016-08-28",
    "num": 4,
    "source": "YouTube"
  }, {
    "date": "2016-08-27",
    "num": 5,
    "source": "YouTube"
  }, {
    "date": "2016-08-26",
    "num": 4,
    "source": "YouTube"
  }, {
    "date": "2016-08-25",
    "num": 3,
    "source": "YouTube"
  }, {
    "date": "2016-08-24",
    "num": 3,
    "source": "YouTube"
  }, {
    "date": "2016-08-23",
    "num": 3,
    "source": "YouTube"
  }, {
    "date": "2016-08-22",
    "num": 3,
    "source": "YouTube"
  }, {
    "date": "2016-08-21",
    "num": 3,
    "source": "YouTube"
  }, {
    "date": "2016-08-20",
    "num": 5,
    "source": "YouTube"
  }, {
    "date": "2016-08-19",
    "num": 3,
    "source": "YouTube"
  }, {
    "date": "2016-08-18",
    "num": 3,
    "source": "YouTube"
  }, {
    "date": "2016-08-17",
    "num": 3,
    "source": "YouTube"
  }, {
    "date": "2016-08-16",
    "num": 4,
    "source": "YouTube"
  }, {
    "date": "2016-08-15",
    "num": 4,
    "source": "YouTube"
  }, {
    "date": "2016-08-14",
    "num": 3,
    "source": "YouTube"
  }, {
    "date": "2016-08-13",
    "num": 5,
    "source": "YouTube"
  }, {
    "date": "2016-08-12",
    "num": 3,
    "source": "YouTube"
  }, {
    "date": "2016-08-11",
    "num": 3,
    "source": "YouTube"
  }, {
    "date": "2016-08-10",
    "num": 4,
    "source": "YouTube"
  }];
  var all_dates = fb_dates.concat(yt_dates);

  function trimDates(arr) {
    var trimmed_dates_arr = [];
    arr.forEach(function(entry) {
      var no_has_date = trimmed_dates_arr.findIndex(function(item) {
        return item == entry.date;
      }) == -1;
      if (no_has_date) {
        trimmed_dates_arr.push(entry.date);
      }
    });
    return trimmed_dates_arr;
  }
  var all_dates_only = trimDates(all_dates);
  var xStartEnd = d3.extent(all_dates, function(d) {
    return new Date(d.date);
  });
  var xScale = d3.time.scale().domain(xStartEnd.reverse()).range([
    10,
    1900
  ]);
  var yScale = d3.scale.linear().domain([
    0,
    d3.max(all_dates, function(d) {
      return d.num;
    })
  ]).range([
    0,
    400
  ]);
  var bar_width = 25;
  d3.select('#main_chart').selectAll('rect.fb_bar').data(fb_dates).enter().append('rect').attr('class', 'fb_bar').attr('width', bar_width).attr('height', function(d) {
    return yScale(d.num);
  }).attr('x', function(d, i) {
    return xScale(new Date(d.date));
  }).attr('y', function(d) {
    return 450 - yScale(d.num);
  }).on('click', function(d) {
    // d3.select('#vid_source').text('Facebook');
    // d3.select('#vid_date').text(d.date);
    // d3.select('#vid_num').text(d.num + ' videos');
    d3.select('#date_info').text('BuzzFeed posted ' + d.num + ' videos to Facebook on ' + d.date + '.');
  });
  d3.select('#main_chart').selectAll('rect.yt_bar').data(yt_dates).enter().append('rect').attr('class', 'yt_bar').attr('width', bar_width).attr('height', function(d) {
    return yScale(d.num);
  }).attr('x', function(d, i) {
    return xScale(new Date(d.date)) + bar_width;
  }).attr('y', function(d) {
    return 450 - yScale(d.num);
  }).on('click', function(d) {
    // d3.select('#vid_source').text('YouTube');
    // d3.select('#vid_date').text(d.date);
    // d3.select('#vid_num').text(d.num + ' videos');
    d3.select('#date_info').text('BuzzFeed posted ' + d.num + ' videos to YouTube on ' + d.date + '.');
  });
  d3.select('#main_chart').selectAll('text.x_label').data(all_dates_only).enter().append('text').attr('class', 'x_label').text(function(d) {
    return d;
  }).attr('y', 475).attr('x', function(d) {
    return xScale(new Date(d));
  }).attr('transform', function(d) {
    return 'rotate(40 ' + xScale(new Date(d)) + ' 475)';
  });
}());
