function makeFriendlyDates(arr) {
    var dateS = arr;
    var _lookup_m = ["", "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    var _lookup_end = {
        1: "1st",
        2: "2nd",
        3: "3rd",
        13: "13th"
    };
    arr = arr.map(function(a, b) {
        a = a.split("-");
        a[1] = (_lookup_m[parseInt(a[1])]);
        var day = (a[2]);
        if (a[2] == 13) {
            day = _lookup_end[day];
        } else if (_lookup_end[day[day.length - 1]]) {
            day = _lookup_end[day[day.length - 1]];
        } else {
            day = parseInt(day) + 'th';
        }
        return {
            month: a[1],
            'day': day,
            year: a[0]
        };
    });
    arr = arr.reduce(function(a, b) {
        var date;


        if (a.year === b.year && a.year == "2016") {
            if (a.month === b.month) {
                if (a.day === b.day) {
                    return [a.month + ' ' + a.day + ', ' + b.year];
                } else {
                    return [a.month + ' ' + a.day, b.day];
                }
            } else {
                return [a.month + ' ' + a.day, b.month + ' ' + b.day];
            }
        } else if ((Date.parse(dateS[1]) === Date.parse(dateS[0]))) {
            return [a.month + ' ' + a.day + ', ' + a.year];
        } else if ((((Date.parse(dateS[1]) - Date.parse(dateS[0])) / 1000) < (365 * 60 * 60 * 24))) {
            if (a.year !== "2016") {
                return [a.month + ' ' + a.day + ', ' + a.year, b.month + ' ' + b.day];
            } else {
                return [a.month + ' ' + a.day, b.month + ' ' + b.day];
            }
        } else if ((((Date.parse(dateS[1]) - Date.parse(dateS[0])) / 1000) > (365 * 60 * 60 * 24))) {

            return [a.month + ' ' + a.day + ', ' + a.year, b.month + ' ' + b.day + ', ' + b.year];
        } else {
            return [a.month + ' ' + a.day + ', ' + a.year, b.month + ' ' + b.day + ', ' + b.year];
        }

    });
    return arr;
}

makeFriendlyDates(['2016-07-01', '2016-07-04']);
