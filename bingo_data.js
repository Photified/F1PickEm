/* F1 2026 BINGO DATA - DYNAMIC TEMPLATES
   This file generates specific outcomes for any driver/team combination.
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

    // DRIVER ROSTER (2026 Confirmed)
    drivers: [
        { name: "Max Verstappen", team: "Red Bull", color: "#3671C6" },
        { name: "Isack Hadjar", team: "Red Bull", color: "#3671C6" },
        { name: "Lando Norris", team: "McLaren", color: "#FF8000" },
        { name: "Oscar Piastri", team: "McLaren", color: "#FF8000" },
        { name: "Lewis Hamilton", team: "Ferrari", color: "#E80020" },
        { name: "Charles Leclerc", team: "Ferrari", color: "#E80020" },
        { name: "George Russell", team: "Mercedes", color: "#27F4D2" },
        { name: "Kimi Antonelli", team: "Mercedes", color: "#27F4D2" },
        { name: "Fernando Alonso", team: "Aston Martin", color: "#229971" },
        { name: "Lance Stroll", team: "Aston Martin", color: "#229971" },
        { name: "Pierre Gasly", team: "Alpine", color: "#FF87BC" },
        { name: "Franco Colapinto", team: "Alpine", color: "#0093CC" },
        { name: "Alex Albon", team: "Williams", color: "#64C4FF" },
        { name: "Carlos Sainz", team: "Williams", color: "#64C4FF" },
        { name: "Liam Lawson", team: "VCARB", color: "#6692FF" },
        { name: "Arvid Lindblad", team: "VCARB", color: "#6692FF" },
        { name: "Esteban Ocon", team: "Haas", color: "#B6BABD" },
        { name: "Ollie Bearman", team: "Haas", color: "#B6BABD" },
        { name: "Nico Hulkenberg", team: "Audi", color: "#F2F2F2" },
        { name: "Gabriel Bortoleto", team: "Audi", color: "#F2F2F2" },
        { name: "Valtteri Bottas", team: "Cadillac", color: "#FFD700" },
        { name: "Sergio Perez", team: "Cadillac", color: "#FFD700" }
    ],

    // TEMPLATES (Used to generate chips)
    templates: {
        driver: [
            "Win", "Podium", "Pole Position", "Fastest Lap", "Top 5", "Top 10", 
            "Points Finish", "Q1 Exit", "Crash / DNF", "Beats Teammate", 
            "Driver of the Day", "5s Penalty"
        ],
        team: [
            "Double Podium", "1-2 Finish", "Double Points", "Double DNF", 
            "Pit Stop Error (>4s)", "Strategy Error", "Engine Failure", "Mechanical DNF"
        ],
        tech: [
            "MOM (Manual Override) Pass", "X-Mode Stuck", "Z-Mode Fail",
            "MGU-K Clipping", "Underweight Car", "Fuel Flow Breach",
            "Narrow Tyre Lock-up", "Active Aero Damage", "Newey Trick Spotted"
        ],
        chaos: [
            "Safety Car", "Virtual SC", "Red Flag", "Rain", "Turn 1 Pile-up",
            "Start Aborted", "Track Limits Warning", "Animal on Track", "Safety Car Finish"
        ]
    }
};