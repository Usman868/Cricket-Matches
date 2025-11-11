// ---------------- Teams Squads Object ----------------
var teams = {
    // Pakistan
    pakistanSquad: [
        { name: "Salman Ali Agha (c)", role: "All-rounder" },
        { name: "Abrar Ahmed", role: "Bowler" },
        { name: "Faheem Ashraf", role: "All-rounder" },
        { name: "Fakhar Zaman", role: "Batsman" },
        { name: "Haris Rauf", role: "Bowler" },
        { name: "Hasan Ali", role: "Bowler" },
        { name: "Hasan Nawaz", role: "Batsman" },
        { name: "Hussain Talat", role: "All-rounder" },
        { name: "Khushdil Shah", role: "All-rounder" },
        { name: "Mohammad Haris (wk)", role: "Wicket Keeper" },
        { name: "Mohammad Nawaz", role: "All-rounder" },
        { name: "Mohammad Wasim Jr", role: "All-rounder" },
        { name: "Sahibzada Farhan", role: "Batsman" },
        { name: "Saim Ayub", role: "Batsman" },
        { name: "Shaheen Shah Afridi", role: "Bowler" }
    ],

    // Sri Lanka
    sriLankaSquad: [
        { name: "Charith Asalanka (c)", role: "All-rounder" },
        { name: "Pathum Nissanka", role: "Batsman" },
        { name: "Lahiru Udara", role: "Batsman" },
        { name: "Kamil Mishara", role: "Batsman" },
        { name: "Kusal Mendis", role: "Batsman" },
        { name: "Sadeera Samarawickrama", role: "Wicket Keeper" },
        { name: "Kamindu Mendis", role: "All-rounder" },
        { name: "Janith Liyanage", role: "All-rounder" },
        { name: "Pavan Rathnayake", role: "All-rounder" },
        { name: "Wanindu Hasaranga", role: "All-rounder" },
        { name: "Maheesh Theekshana", role: "Bowler" },
        { name: "Jeffrey Vandersay", role: "Bowler" },
        { name: "Dushmantha Chameera", role: "Bowler" },
        { name: "Asitha Fernando", role: "Bowler" },
        { name: "Eshan Malinga", role: "Bowler" }
    ],

    // Qatar
    qatarSquad: [
        { name: "Iqbal Hussain", role: "All-rounder" },
        { name: "Vijayakanth Viyaskanth", role: "Bowler" },
        { name: "Awais Malik", role: "All-rounder" },
        { name: "Aqeebullah Khan", role: "Bowler" },
        { name: "Shariq Munir", role: "Batsman" },
        { name: "Shakkan Kassim", role: "Bowler" },
        { name: "Usman Tariq", role: "Batsman" },
        { name: "Basil Hameed", role: "All-rounder" },
        { name: "Muneeb Ahmed", role: "Wicket Keeper" },
        { name: "Jehan Mubarak", role: "Batsman" },
        { name: "Yaseen Ali", role: "Batsman" },
        { name: "Mohammad Dilawar", role: "Bowler" },
        { name: "Mohammad Aslam", role: "Bowler" },
        { name: "Shafiqullah Shah", role: "All-rounder" },
        { name: "Rohit Mohammad", role: "Batsman" }
    ],

    // Afghanistan
    afghanistanSquad: [
        { name: "Hashmatullah Shahidi (c)", role: "Batsman" },
        { name: "Ibrahim Zadran", role: "Batsman" },
        { name: "Rahmanullah Gurbaz", role: "Wicket Keeper" },
        { name: "Gulbadin Naib", role: "All-rounder" },
        { name: "Naveen-ul-Haq", role: "Bowler" },
        { name: "Mujeeb Ur Rahman", role: "Bowler" },
        { name: "Rashid Khan", role: "All-rounder" },
        { name: "Azmatullah Omarzai", role: "All-rounder" },
        { name: "Ibrahim Khan", role: "Batsman" },
        { name: "Qais Ahmad", role: "Bowler" },
        { name: "Nangyal Kharoti", role: "All-rounder" },
        { name: "Bilal Sami", role: "Bowler" },
        { name: "Abdullah Ahmadzai", role: "Bowler" },
        { name: "Sediqullah Atal", role: "Batsman" },
        { name: "Mohammad Ishaq", role: "Wicket Keeper" }
    ],

    // Bangladesh
    bangladeshSquad: [
        { name: "Najmul Hossain Shanto (c)", role: "Batsman" },
        { name: "Tamim Iqbal", role: "Batsman" },
        { name: "Yasir Ali", role: "Batsman" },
        { name: "Mushfiqur Rahim", role: "Wicket Keeper" },
        { name: "Mehidy Hasan Miraz", role: "All-rounder" },
        { name: "Shoriful Islam", role: "Bowler" },
        { name: "Taskin Ahmed", role: "Bowler" },
        { name: "Mahmudullah Riyad", role: "All-rounder" },
        { name: "Mustafizur Rahman", role: "Bowler" },
        { name: "Liton Das (wk)", role: "Wicket Keeper" },
        { name: "Towhid Hridoy", role: "Batsman" },
        { name: "Taijul Islam", role: "Bowler" },
        { name: "Shakib Al Hasan", role: "All-rounder" },
        { name: "Shuvagata Hom", role: "All-rounder" },
        { name: "Soumya Sarkar", role: "Batsman" }
    ],

    // Ireland
    irelandSquad: [
        { name: "Andrew Balbirnie (c)", role: "Batsman" },
        { name: "Paul Stirling", role: "All-rounder" },
        { name: "Curtis Campher", role: "All-rounder" },
        { name: "Cade Carmichael", role: "Batsman" },
        { name: "Stephen Doheny", role: "Wicket Keeper" },
        { name: "Gavin Hoey", role: "Bowler" },
        { name: "Graham Hume", role: "Bowler" },
        { name: "Matthew Humphreys", role: "Bowler" },
        { name: "Andy McBrine", role: "All-rounder" },
        { name: "Barry McCarthy", role: "Bowler" },
        { name: "Liam McCarthy", role: "Batsman" },
        { name: "Harry Tector", role: "Batsman" },
        { name: "Fionn Hand", role: "All-rounder" },
        { name: "Mark Adair", role: "Bowler" },
        { name: "James McCollum", role: "Batsman" }
    ],

    // New Zealand
    newZealandSquad: [
        { name: "Devon Conway", role: "Batsman" },
        { name: "Tom Latham (wk)", role: "Wicket Keeper" },
        { name: "Glenn Phillips", role: "All-rounder" },
        { name: "Rachin Ravindra", role: "All-rounder" },
        { name: "Daryl Mitchell", role: "All-rounder" },
        { name: "Mark Chapman", role: "Batsman" },
        { name: "Matt Henry", role: "Bowler" },
        { name: "Kyle Jamieson", role: "Bowler" },
        { name: "Jacob Duffy", role: "Bowler" },
        { name: "Michael Bracewell", role: "All-rounder" },
        { name: "Lockie Ferguson", role: "Bowler" },
        { name: "Finn Allen", role: "Batsman" },
        { name: "Mitchell Santner", role: "All-rounder" },
        { name: "Cole McConchie", role: "All-rounder" },
        { name: "Kane Williamson", role: "Batsman" }
    ],

    // West Indies
    westIndiesSquad: [
        { name: "Roston Chase", role: "All-rounder" },
        { name: "Jason Holder", role: "All-rounder" },
        { name: "Shai Hope", role: "Wicket Keeper" },
        { name: "Brandon King", role: "Batsman" },
        { name: "Nicholas Pooran", role: "Wicket Keeper" },
        { name: "Shimron Hetmyer", role: "Batsman" },
        { name: "Akeal Hosein", role: "Bowler" },
        { name: "Alzarri Joseph", role: "Bowler" },
        { name: "Shamar Joseph", role: "Bowler" },
        { name: "Kemar Roach", role: "Bowler" },
        { name: "Justin Greaves", role: "All-rounder" },
        { name: "Oshane Thomas", role: "Bowler" },
        { name: "Romario Shepherd", role: "All-rounder" },
        { name: "Kyle Mayers", role: "All-rounder" },
        { name: "Johnson Charles", role: "Batsman" }
    ],

    // India
    indiaSquad: [
        { name: "Shubman Gill (c)", role: "Batsman" },
        { name: "Rishabh Pant (wk, vc)", role: "Wicket Keeper" },
        { name: "Yashasvi Jaiswal", role: "Batsman" },
        { name: "KL Rahul", role: "Batsman" },
        { name: "Sai Sudharsan", role: "Batsman" },
        { name: "Devdutt Padikkal", role: "Batsman" },
        { name: "Dhruv Jurel", role: "Wicket Keeper" },
        { name: "Ravindra Jadeja", role: "All-rounder" },
        { name: "Washington Sundar", role: "All-rounder" },
        { name: "Jasprit Bumrah", role: "Bowler" },
        { name: "Axar Patel", role: "All-rounder" },
        { name: "Nitish Kumar Reddy", role: "All-rounder" },
        { name: "Mohammed Siraj", role: "Bowler" },
        { name: "Kuldeep Yadav", role: "Bowler" },
        { name: "Akash Deep", role: "Bowler" }
    ],

    // South Africa
    southAfricaSquad: [
        { name: "Temba Bavuma (c)", role: "Batsman" },
        { name: "Aiden Markram", role: "Batsman" },
        { name: "Quinton de Kock", role: "Wicket Keeper" },
        { name: "Rassie van der Dussen", role: "Batsman" },
        { name: "Heinrich Klaasen", role: "Wicket Keeper" },
        { name: "Kagiso Rabada", role: "Bowler" },
        { name: "Anrich Nortje", role: "Bowler" },
        { name: "Marco Jansen", role: "All-rounder" },
        { name: "Tabraiz Shamsi", role: "Bowler" },
        { name: "Keshav Maharaj", role: "Bowler" },
        { name: "Lungi Ngidi", role: "Bowler" },
        { name: "Gerald Coetzee", role: "Bowler" },
        { name: "Bjorn Fortuin", role: "Bowler" },
        { name: "David Miller", role: "Batsman" },
        { name: "Reeza Hendricks", role: "Batsman" }
    ]
};

// ---------------- Matches Objescts----------------
var matches = {
    Pak_Vs_Sri_1: {
        match: "Pakistan vs Sri Lanka",
        date: "Nov 11, 2025",
        Stadium: "Rawalpindi Cricket Stadium, Rawalpindi",
        matchType: "ODI",
        teams: ["pakistanSquad", "sriLankaSquad"]
    },
    Qat_Vs_Afg: {
        match: "Qatar vs Afghanistan",
        date: "Nov 11, 2025",
        Stadium: "West End Park International Cricket Stadium, Doha",
        matchType: "T20I",
        teams: ["qatarSquad", "afghanistanSquad"]
    },
    Ban_Vs_Ire_1: {
        match: "Bangladesh vs Ireland",
        date: "Nov 11, 2025",
        Stadium: "Sylhet International Cricket Stadium, Sylhet",
        matchType: "Test (Day 1)",
        teams: ["bangladeshSquad", "irelandSquad"]
    },
    NZ_Vs_WI_1: {
        match: "New Zealand vs West Indies",
        date: "Nov 13, 2025",
        Stadium: "University Oval, Dunedin",
        matchType: "T20I",
        teams: ["newZealandSquad", "westIndiesSquad"]
    },
    Pak_Vs_Sri_2: {
        match: "Pakistan vs Sri Lanka (2nd ODI)",
        date: "Nov 13, 2025",
        Stadium: "Rawalpindi Cricket Stadium, Rawalpindi",
        matchType: "ODI",
        teams: ["pakistanSquad", "sriLankaSquad"]
    },
    Ind_Vs_RSA_1: {
        match: "India vs South Africa",
        date: "Nov 14, 2025",
        Stadium: "Eden Gardens, Kolkata",
        matchType: "Test",
        teams: ["indiaSquad", "southAfricaSquad"]
    },
    Pak_Vs_Sri_3: {
        match: "Pakistan vs Sri Lanka (3rd ODI)",
        date: "Nov 15, 2025",
        Stadium: "Rawalpindi Cricket Stadium, Rawalpindi",
        matchType: "ODI",
        teams: ["pakistanSquad", "sriLankaSquad"]
    },
    NZ_Vs_WI_2: {
        match: "New Zealand vs West Indies (1st ODI)",
        date: "Nov 16, 2025",
        Stadium: "Hagley Oval, Christchurch",
        matchType: "ODI",
        teams: ["newZealandSquad", "westIndiesSquad"]
    },
    Pak_Vs_Afg: {
        match: "Pakistan vs Afghanistan (T-S)",
        date: "Nov 17, 2025",
        Stadium: "Rawalpindi Cricket Stadium, Rawalpindi",
        matchType: "T20I",
        teams: ["pakistanSquad", "afghanistanSquad"]
    },
    Ban_Vs_Ire_2: {
        match: "Bangladesh vs Ireland",
        date: "Nov 18, 2025",
        Stadium: "Shere Bangla National Stadium, Dhaka",
        matchType: "Test",
        teams: ["bangladeshSquad", "irelandSquad"]
    },
    SL_Vs_Afg: {
        match: "Sri Lanka vs Afghanistan (T-S)",
        date: "Nov 19, 2025",
        Stadium: "Rawalpindi Cricket Stadium, Rawalpindi",
        matchType: "T20I",
        teams: ["sriLankaSquad", "afghanistanSquad"]
    },
    NZ_Vs_WI_3: {
        match: "New Zealand vs West Indies (3rd ODI)",
        date: "Nov 22, 2025",
        Stadium: "Seddon Park, Hamilton",
        matchType: "ODI",
        teams: ["newZealandSquad", "westIndiesSquad"]
    },
    Ind_Vs_RSA_2: {
        match: "India vs South Africa (2nd Test)",
        date: "Nov 22, 2025",
        Stadium: "Barsapara Cricket Stadium, Guwahati",
        matchType: "Test",
        teams: ["indiaSquad", "southAfricaSquad"]
    },
    Pak_Vs_Afg_2: {
        match: "Pakistan vs Afghanistan (T-S)",
        date: "Nov 24, 2025",
        Stadium: "Gaddafi Stadium, Lahore",
        matchType: "T20I",
        teams: ["pakistanSquad", "afghanistanSquad"]
    },
    SL_Vs_Afg_2: {
        match: "Sri Lanka vs Afghanistan (T-S F)",
        date: "Nov 25, 2025",
        Stadium: "Gaddafi Stadium, Lahore",
        matchType: "T20I",
        teams: ["sriLankaSquad", "afghanistanSquad"]
    },
};


// ---------------- Create Cards ----------------
var container = document.querySelector(".card-container");
var popup = document.querySelector(".match-popup");
var popupHeader = popup.querySelector(".popup-header h2");
var popupInfo = popup.querySelector(".popup-header p");
var teamBoxes = popup.querySelectorAll(".team-box ul");

for (var key in matches) {
    var match = matches[key];
    container.innerHTML += `
    <div class="match-card" onclick="popUp(event)" data-match="${key}">
      <div class="match-header">
        <h2>${match.match}</h2>
      </div>
      <div class="match-details">
        <p><strong>Date:</strong> ${match.date}</p>
        <p><strong>Venue:</strong> ${match.Stadium}</p>
        <p><strong>Match Type:</strong> ${match.matchType}</p>
      </div>
    </div>
    `;

}

// ---------------- Show PopUp ----------------
function popUp(event) {
    var card = event.target.closest(".match-card");
    if (!card) return;
    var matchKey = card.dataset.match;
    var match = matches[matchKey];

    popupHeader.textContent = match.match;
    popupInfo.textContent = "Date: " + match.date + " | Venue: " + match.Stadium + " | Type: " + match.matchType;

    var team1Key = match.teams[0];
    var team2Key = match.teams[1];
    var team1 = teams[team1Key];
    var team2 = teams[team2Key];

    var team1HTML = "";
    for (var i = 0; i < team1.length; i++) {
        team1HTML += "<li>" + (i + 1) + ". " + team1[i].name + " — <span>" + team1[i].role + "</span></li>";
    }
    teamBoxes[0].innerHTML = team1HTML;

    var team2HTML = "";
    for (var i = 0; i < team2.length; i++) {
        team2HTML += "<li>" + (i + 1) + ". " + team2[i].name + " — <span>" + team2[i].role + "</span></li>";
    }
    teamBoxes[1].innerHTML = team2HTML;


    popup.style.display = "flex";
};

// ---------------- Close PopUp ----------------
function closeBtn() {
    popup.style.display = "none";
};



