// If we had a PHP server I could use the safebooru api to pull from there.
const lolis = {
  0: ["ba_banner/mari 1.png", "Mari"],
  1: ["ba_banner/mari 2.png", "Mari"],
  2: ["ba_banner/hikari.png", "Hikari"]
};


function getISOWeekNumber(date) {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    let dayOfYear = Math.floor((date - startOfYear) / (24 * 60 * 60 * 1000));
    let dayOfWeek = startOfYear.getDay(); // Monday = 0, Sunday = 6
    let firstMondayOffset = (dayOfWeek === 0 ? 7 : 7 - dayOfWeek + 1); // Adjust for ISO weeks
    let daysSinceFirstMonday = dayOfYear - firstMondayOffset;
    let weekNumber = Math.ceil(daysSinceFirstMonday / 7) + 1; // Add 1 because weeks start at 1
    return weekNumber;
}

var today = new Date();
var currentWeekNumber = getISOWeekNumber(today);
const loliKeys = Object.keys(lolis).map(Number); // [1, 2, 3]
const totalLolis = loliKeys.length;

// Ensure currentWeekNumber maps to a valid key
currentWeekNumber = loliKeys[(currentWeekNumber - 1) % totalLolis];

const [imagePath, name] = lolis[currentWeekNumber];
document.getElementById("id_loli_image").src = imagePath;