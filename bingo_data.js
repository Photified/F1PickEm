/* F1 2026 CONFIGURATION
   Static lists used to generate dynamic predictions.
*/

const BINGO_CONFIG = {
    // 2026 CALENDAR
    races: [
        {id:'aus', c:'au', n:'Australia', d:'Mar 8'},
        {id:'chn', c:'cn', n:'China', d:'Mar 15'},
        {id:'jpn', c:'jp', n:'Japan', d:'Mar 29'},
        {id:'bhr', c:'bh', n:'Bahrain', d:'Apr 12'},
        {id:'sau', c:'sa', n:'Saudi Arabia', d:'Apr 19'},
        {id:'mia', c:'us', n:'Miami', d:'May 3'},
        {id:'can', c:'ca', n:'Canada', d:'May 24'},
        {id:'mon', c:'mc', n:'Monaco', d:'Jun 7'},
        {id:'esp', c:'es', n:'Barcelona', d:'Jun 14'},
        {id:'aut', c:'at', n:'Austria', d:'Jun 28'},
        {id:'gbr', c:'gb', n:'Silverstone', d:'Jul 5'},
        {id:'bel', c:'be', n:'Spa', d:'Jul 19'},
        {id:'hun', c:'hu', n:'Hungary', d:'Jul 26'},
        {id:'ned', c:'nl', n:'Zandvoort', d:'Aug 23'},
        {id:'ita', c:'it', n:'Monza', d:'Sep 6'},
        {id:'mad', c:'es', n:'Madrid', d:'Sep 13'},
        {id:'aze', c:'az', n:'Baku', d:'Sep 27'},
        {id:'sin', c:'sg', n:'Singapore', d:'Oct 11'},
        {id:'usa', c:'us', n:'Austin', d:'Oct 25'},
        {id:'mex', c:'mx', n:'Mexico', d:'Nov 1'},
        {id:'bra', c:'br', n:'Brazil', d:'Nov 8'},
        {id:'lvg', c:'us', n:'Las Vegas', d:'Nov 21'},
        {id:'qat', c:'qa', n:'Qatar', d:'Nov 29'},
        {id:'abu', c:'ae', n:'Abu Dhabi', d:'Dec 6'}
    ],

    // THE 2026 GRID (Fixed)
    drivers: [
        { name: "Max Verstappen", team: "Red Bull", short: "VER" },
        { name: "Isack Hadjar", team: "Red Bull", short: "HAD" },
        { name: "Lando Norris", team: "McLaren", short: "NOR" },
        { name: "Oscar Piastri", team: "McLaren", short: "PIA" },
        { name: "Lewis Hamilton", team: "Ferrari", short: "HAM" },
        { name: "Charles Leclerc", team: "Ferrari", short: "LEC" },
        { name: "George Russell", team: "Mercedes", short: "RUS" },
        { name: "Kimi Antonelli", team: "Mercedes", short: "ANT" },
        { name: "Fernando Alonso", team: "Aston Martin", short: "ALO" },
        { name: "Lance Stroll", team: "Aston Martin", short: "STR" },
        { name: "Pierre Gasly", team: "Alpine", short: "GAS" },
        { name: "Franco Colapinto", team: "Alpine", short: "COL" },
        { name: "Alex Albon", team: "Williams", short: "ALB" },
        { name: "Carlos Sainz", team: "Williams", short: "SAI" },
        { name: "Liam Lawson", team: "VCARB", short: "LAW" },
        { name: "Arvid Lindblad", team: "VCARB", short: "LIN" }, // The actual rookie
        { name: "Esteban Ocon", team: "Haas", short: "OCO" },
        { name: "Ollie Bearman", team: "Haas", short: "BEA" },
        { name: "Nico Hulkenberg", team: "Audi", short: "HUL" },
        { name: "Gabriel Bortoleto", team: "Audi", short: "BOR" },
        { name: "Valtteri Bottas", team: "Cadillac", short: "BOT" },
        { name: "Sergio Perez", team: "Cadillac", short: "PER" }
    ],

    // SCORING OUTCOMES
    outcomes: [
        "Race Win", "Podium Finish", "Top 5 Finish", "Top 10 Finish", 
        "Points Finish", "Pole Position", "Front Row Start", "Q3 Appearance", 
        "Q1 Exit", "DNF (Retires)", "Fastest Lap", "Driver of the Day",
        "Beats Teammate", "Gains 5+ Places", "Penalty (5s+)", "Crash / Spin"
    ],

    // GENERIC CHAOS (Non-driver specific)
    chaos: [
        "Safety Car (Full)", "Virtual Safety Car", "Red Flag", "Rain During Race",
        "Turn 1 Pile-up", "Slow Stop (>4s)", "Less than 16 Finishers",
        "Leader Crashes", "Animal on Track", "Safety Car Ending"
    ]
};