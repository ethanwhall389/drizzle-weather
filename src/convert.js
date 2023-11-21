import moment from "moment";

export default class Convert {
    static dateToDay (date) {
        const dayOfWeek = moment.utc(date).format('ddd');

        const today = moment().format('ddd');

        if (today === dayOfWeek) {
            return 'Today';
        } else {
            return dayOfWeek;
        }

    }
}