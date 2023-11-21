import moment from "moment";

export default class Time {
    static dateToDay (date) {
        const dayOfWeek = moment.utc(date).format('ddd');

        const today = moment().format('ddd');

        if (today === dayOfWeek) {
            return 'Today';
        } else {
            return dayOfWeek;
        }

    }

    static getCurrentTime () {
        return moment().format('HH:mm');
    }

    static formatTime24 (time) {
        return moment(time).format('HH:mm');
    }

    static formatTime12 (time) {
        return moment(time).format('h:mm');
    }
}