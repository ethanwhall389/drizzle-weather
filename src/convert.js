export default class Convert {
    static dateToDay (date) {
        console.log(date);

        const dateObj = new Date(date);

        console.log(dateObj);

        const dayOfWeek = dateObj.toLocaleDateString('en-US', { weekday: 'short' });

        // const days = ['Sunday', 'Monday', 'Tuesday', 'Thursday', 'Friday'];

        // const today = days[dayOfWeek];


        return dayOfWeek;
        console.log('today:');
        console.log(today);
    }
}