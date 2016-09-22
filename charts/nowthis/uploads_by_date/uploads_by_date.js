'use strict';
(function() {
  var fb_dates = [{
    "date": "2016-09-21",
    "num": 1,
    "source": "Facebook"
  }, {
    "date": "2016-09-20",
    "num": 16,
    "source": "Facebook"
  }, {
    "date": "2016-09-19",
    "num": 13,
    "source": "Facebook"
  }, {
    "date": "2016-09-18",
    "num": 11,
    "source": "Facebook"
  }, {
    "date": "2016-09-17",
    "num": 13,
    "source": "Facebook"
  }, {
    "date": "2016-09-16",
    "num": 16,
    "source": "Facebook"
  }, {
    "date": "2016-09-15",
    "num": 15,
    "source": "Facebook"
  }, {
    "date": "2016-09-14",
    "num": 13,
    "source": "Facebook"
  }, {
    "date": "2016-09-13",
    "num": 2,
    "source": "Facebook"
  }];
  var yt_dates = [{
    "date": "2016-09-21",
    "num": 1,
    "source": "YouTube"
  }, {
    "date": "2016-09-20",
    "num": 6,
    "source": "YouTube"
  }, {
    "date": "2016-09-19",
    "num": 6,
    "source": "YouTube"
  }, {
    "date": "2016-09-17",
    "num": 3,
    "source": "YouTube"
  }, {
    "date": "2016-09-16",
    "num": 8,
    "source": "YouTube"
  }, {
    "date": "2016-09-15",
    "num": 5,
    "source": "YouTube"
  }, {
    "date": "2016-09-14",
    "num": 9,
    "source": "YouTube"
  }, {
    "date": "2016-09-13",
    "num": 11,
    "source": "YouTube"
  }, {
    "date": "2016-09-12",
    "num": 10,
    "source": "YouTube"
  }, {
    "date": "2016-09-11",
    "num": 1,
    "source": "YouTube"
  }, {
    "date": "2016-09-10",
    "num": 2,
    "source": "YouTube"
  }, {
    "date": "2016-09-09",
    "num": 10,
    "source": "YouTube"
  }, {
    "date": "2016-09-08",
    "num": 11,
    "source": "YouTube"
  }, {
    "date": "2016-09-07",
    "num": 10,
    "source": "YouTube"
  }, {
    "date": "2016-09-06",
    "num": 7,
    "source": "YouTube"
  }];

  // COLLECT LIST OF DATES FOR X AXIS SCALING
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

  // SET X AXIS SCALE
  var xScale = d3.time.scale().domain(xStartEnd.reverse()).range([
    25,
    1900
  ]);

  // SET Y AXIS SCALE
  var yScale = d3.scale.linear().domain([
    0,
    d3.max(all_dates, function(d) {
      return d.num;
    })
  ]).range([
    0,
    275
  ]);

  // SET WIDTH OF BARS AND SPACING BETWEEN BARS
  var bar_width = 25;

  var bar_area = d3.select('#main_chart').append('g').attr('id', 'bar_area');

  // PLOT FACEBOOK DATES
  bar_area.selectAll('rect.fb_bar').data(fb_dates).enter().append('rect').attr('class', 'fb_bar').attr('width', bar_width).attr('height', function(d) {
    return yScale(d.num);
  }).attr('x', function(d, i) {
    return xScale(new Date(d.date));
  }).attr('y', function(d) {
    return 300 - yScale(d.num);
  }).on('click', function(d) {
    d3.select('#date_info').text(d.num + ' videos posted to Facebook on ' + d.date);
  });

  // PLOT YOUTUBE DATES
  bar_area.selectAll('rect.yt_bar').data(yt_dates).enter().append('rect').attr('class', 'yt_bar').attr('width', bar_width).attr('height', function(d) {
    return yScale(d.num);
  }).attr('x', function(d, i) {
    return xScale(new Date(d.date)) + bar_width;
  }).attr('y', function(d) {
    return 300 - yScale(d.num);
  }).on('click', function(d) {
    d3.select('#date_info').text(d.num + ' videos posted to YouTube on ' + d.date);
  });

  // SET X AXIS ENTRY LABELS
  bar_area.selectAll('text.x_label').data(all_dates_only).enter().append('text').attr('class', 'axis_label').text(function(d) {
    return d;
  }).attr('y', 325).attr('x', function(d) {
    return xScale(new Date(d));
  }).attr('transform', function(d) {
    return 'rotate(40 ' + xScale(new Date(d)) + ' 325)';
  });

  // SET Y AXIS LABEL
  d3.select('text#y_axis_label').text(d3.max(all_dates, function(d) {
    return d.num;
  }));
}());
