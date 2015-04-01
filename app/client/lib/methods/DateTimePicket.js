DateTimePicker = {};
DateTimePicker.date = function (element) {
    element.datetimepicker({
        format: 'YYYY-MM-DD'
    });
};
DateTimePicker.dateTime = function (element) {
    element.datetimepicker({
        format: 'YYYY-MM-DD H:m:s'
    });
};
DateTimePicker.time = function (element) {
    element.datetimepicker({
        format: 'H:m:s'
    });
};
