/**
 * Calculate the week number and day of the week for a given date.
 * @param {string} dateString - The input date string in 'YYYY-MM-DD' format.
 * @returns {Object} - An object containing the calculated week number and day of the week.
 */
function calculateWeekAndDay(dateString) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date(dateString);

    const startDate = new Date(currentDate.getFullYear(), 0, 1);

    const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));

    const weekNumber = Math.ceil(days / 7);

    const dayOfWeek = daysOfWeek[currentDate.getDay()];

    return {
        weekNumber,
        dayOfWeek
    };
}

module.exports = {
    calculateWeekAndDay,
}
