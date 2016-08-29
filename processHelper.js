const processData = {
  addVidsByDate: function addDates(arr, arr_name) {
    let dates = [];

    arr.forEach((entry) => {
      let entry_date = entry.timestamp.split('T')[0];
      let has_date = (dates.findIndex((item) => item.date == entry_date)) == -1;

      if (has_date) {
        dates.push({
          date: entry_date,
          num: 1,
          source: arr_name
        });
      } else {
        let el_i = dates.findIndex((item) => item.date == entry_date);
        dates[el_i].num += 1;
      }
    });

    return dates;
  },
  sortByProperty: function(arr, prop) {
    let sorting_arr = arr;
    sorting_arr.sort(function(a, b) {
      if (a[prop] > b[prop]) {
        return 1;
      }
      if (a[prop] < b[prop]) {
        return -1;
      }
      return 0;
    });
    return sorting_arr;
  }
};

module.exports = processData;
