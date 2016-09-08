'use strict';
(function() {
  var fb_dates = [{
    "date": "2016-09-08",
    "num": 2,
    "source": "Facebook"
  }, {
    "date": "2016-09-07",
    "num": 16,
    "source": "Facebook"
  }, {
    "date": "2016-09-06",
    "num": 14,
    "source": "Facebook"
  }, {
    "date": "2016-09-05",
    "num": 12,
    "source": "Facebook"
  }, {
    "date": "2016-09-04",
    "num": 13,
    "source": "Facebook"
  }, {
    "date": "2016-09-03",
    "num": 14,
    "source": "Facebook"
  }, {
    "date": "2016-09-02",
    "num": 16,
    "source": "Facebook"
  }, {
    "date": "2016-09-01",
    "num": 14,
    "source": "Facebook"
  }, {
    "date": "2016-08-31",
    "num": 14,
    "source": "Facebook"
  }, {
    "date": "2016-08-30",
    "num": 12,
    "source": "Facebook"
  }, {
    "date": "2016-08-29",
    "num": 12,
    "source": "Facebook"
  }, {
    "date": "2016-08-28",
    "num": 12,
    "source": "Facebook"
  }, {
    "date": "2016-08-27",
    "num": 12,
    "source": "Facebook"
  }, {
    "date": "2016-08-26",
    "num": 14,
    "source": "Facebook"
  }, {
    "date": "2016-08-25",
    "num": 13,
    "source": "Facebook"
  }, {
    "date": "2016-08-24",
    "num": 13,
    "source": "Facebook"
  }, {
    "date": "2016-08-23",
    "num": 15,
    "source": "Facebook"
  }, {
    "date": "2016-08-22",
    "num": 15,
    "source": "Facebook"
  }, {
    "date": "2016-08-21",
    "num": 11,
    "source": "Facebook"
  }, {
    "date": "2016-08-20",
    "num": 11,
    "source": "Facebook"
  }, {
    "date": "2016-08-19",
    "num": 14,
    "source": "Facebook"
  }, {
    "date": "2016-08-18",
    "num": 12,
    "source": "Facebook"
  }, {
    "date": "2016-08-17",
    "num": 12,
    "source": "Facebook"
  }, {
    "date": "2016-08-16",
    "num": 16,
    "source": "Facebook"
  }, {
    "date": "2016-08-15",
    "num": 12,
    "source": "Facebook"
  }, {
    "date": "2016-08-14",
    "num": 14,
    "source": "Facebook"
  }, {
    "date": "2016-08-13",
    "num": 14,
    "source": "Facebook"
  }, {
    "date": "2016-08-12",
    "num": 15,
    "source": "Facebook"
  }, {
    "date": "2016-08-11",
    "num": 11,
    "source": "Facebook"
  }, {
    "date": "2016-08-10",
    "num": 14,
    "source": "Facebook"
  }, {
    "date": "2016-08-09",
    "num": 14,
    "source": "Facebook"
  }, {
    "date": "2016-08-08",
    "num": 14,
    "source": "Facebook"
  }, {
    "date": "2016-08-07",
    "num": 14,
    "source": "Facebook"
  }, {
    "date": "2016-08-06",
    "num": 13,
    "source": "Facebook"
  }, {
    "date": "2016-08-05",
    "num": 14,
    "source": "Facebook"
  }, {
    "date": "2016-08-04",
    "num": 16,
    "source": "Facebook"
  }, {
    "date": "2016-08-03",
    "num": 12,
    "source": "Facebook"
  }, {
    "date": "2016-08-02",
    "num": 12,
    "source": "Facebook"
  }, {
    "date": "2016-08-01",
    "num": 10,
    "source": "Facebook"
  }, {
    "date": "2016-07-31",
    "num": 9,
    "source": "Facebook"
  }, {
    "date": "2016-07-30",
    "num": 12,
    "source": "Facebook"
  }, {
    "date": "2016-07-29",
    "num": 12,
    "source": "Facebook"
  }, {
    "date": "2016-07-28",
    "num": 14,
    "source": "Facebook"
  }, {
    "date": "2016-07-27",
    "num": 16,
    "source": "Facebook"
  }, {
    "date": "2016-07-26",
    "num": 12,
    "source": "Facebook"
  }, {
    "date": "2016-07-25",
    "num": 10,
    "source": "Facebook"
  }, {
    "date": "2016-07-24",
    "num": 11,
    "source": "Facebook"
  }, {
    "date": "2016-07-23",
    "num": 12,
    "source": "Facebook"
  }, {
    "date": "2016-07-22",
    "num": 15,
    "source": "Facebook"
  }, {
    "date": "2016-07-21",
    "num": 13,
    "source": "Facebook"
  }, {
    "date": "2016-07-20",
    "num": 15,
    "source": "Facebook"
  }, {
    "date": "2016-07-19",
    "num": 13,
    "source": "Facebook"
  }, {
    "date": "2016-07-18",
    "num": 16,
    "source": "Facebook"
  }, {
    "date": "2016-07-17",
    "num": 9,
    "source": "Facebook"
  }, {
    "date": "2016-07-16",
    "num": 15,
    "source": "Facebook"
  }, {
    "date": "2016-07-15",
    "num": 11,
    "source": "Facebook"
  }, {
    "date": "2016-07-14",
    "num": 10,
    "source": "Facebook"
  }, {
    "date": "2016-07-13",
    "num": 15,
    "source": "Facebook"
  }, {
    "date": "2016-07-12",
    "num": 15,
    "source": "Facebook"
  }, {
    "date": "2016-07-11",
    "num": 12,
    "source": "Facebook"
  }, {
    "date": "2016-07-10",
    "num": 9,
    "source": "Facebook"
  }, {
    "date": "2016-07-09",
    "num": 13,
    "source": "Facebook"
  }, {
    "date": "2016-07-08",
    "num": 17,
    "source": "Facebook"
  }, {
    "date": "2016-07-07",
    "num": 8,
    "source": "Facebook"
  }, {
    "date": "2016-07-06",
    "num": 13,
    "source": "Facebook"
  }, {
    "date": "2016-07-05",
    "num": 11,
    "source": "Facebook"
  }, {
    "date": "2016-07-04",
    "num": 10,
    "source": "Facebook"
  }, {
    "date": "2016-07-03",
    "num": 10,
    "source": "Facebook"
  }, {
    "date": "2016-07-02",
    "num": 11,
    "source": "Facebook"
  }, {
    "date": "2016-07-01",
    "num": 14,
    "source": "Facebook"
  }, {
    "date": "2016-06-30",
    "num": 14,
    "source": "Facebook"
  }, {
    "date": "2016-06-29",
    "num": 15,
    "source": "Facebook"
  }, {
    "date": "2016-06-28",
    "num": 14,
    "source": "Facebook"
  }, {
    "date": "2016-06-27",
    "num": 14,
    "source": "Facebook"
  }, {
    "date": "2016-06-26",
    "num": 10,
    "source": "Facebook"
  }, {
    "date": "2016-06-25",
    "num": 11,
    "source": "Facebook"
  }, {
    "date": "2016-06-24",
    "num": 12,
    "source": "Facebook"
  }, {
    "date": "2016-06-23",
    "num": 14,
    "source": "Facebook"
  }, {
    "date": "2016-06-22",
    "num": 5,
    "source": "Facebook"
  }];
  var yt_dates = [{
    "date": "2016-09-08",
    "num": 40,
    "source": "YouTube"
  }, {
    "date": "2016-09-07",
    "num": 400,
    "source": "YouTube"
  }, {
    "date": "2016-09-06",
    "num": 400,
    "source": "YouTube"
  }, {
    "date": "2016-09-03",
    "num": 40,
    "source": "YouTube"
  }, {
    "date": "2016-09-02",
    "num": 120,
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
  var xScale = d3.time.scale().domain(xStartEnd).range([
    10,
    4900
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
  d3.select('#main_chart').selectAll('rect.fb_bar').data(fb_dates).enter().append('rect').attr('class', 'fb_bar').attr('width', 10).attr('height', function(d) {
    return yScale(d.num);
  }).attr('x', function(d, i) {
    return xScale(new Date(d.date));
  }).attr('y', function(d) {
    return 450 - yScale(d.num);
  }).on('click', function(d) {
    d3.select('#vid_source').text('Facebook');
    d3.select('#vid_date').text(d.date);
    d3.select('#vid_num').text(d.num + ' videos');
  });
  d3.select('#main_chart').selectAll('rect.yt_bar').data(yt_dates).enter().append('rect').attr('class', 'yt_bar').attr('width', 10).attr('height', function(d) {
    return yScale(d.num);
  }).attr('x', function(d, i) {
    return xScale(new Date(d.date)) + 10;
  }).attr('y', function(d) {
    return 450 - yScale(d.num);
  }).on('click', function(d) {
    d3.select('#vid_source').text('YouTube');
    d3.select('#vid_date').text(d.date);
    d3.select('#vid_num').text(d.num + ' videos');
  });
  d3.select('#main_chart').selectAll('text.x_label').data(all_dates_only).enter().append('text').attr('class', 'x_label').text(function(d) {
    return d;
  }).attr('y', 475).attr('x', function(d) {
    return xScale(new Date(d));
  }).attr('transform', function(d) {
    return 'rotate(40 ' + xScale(new Date(d)) + ' 475)';
  });
}());
