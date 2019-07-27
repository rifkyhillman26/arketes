function biodata() {
    return {
        nama: "muhamad rifki hilman",
        age: 17,
        address: "jalan tanah kusir 2, no 62 Rt.11/Rw.11, kebayoran lama selatan, jakarta selatan",
        hobbies: ["touring", "main game"],
        is_married: false,
        list_school: [{
            name: "Tk it baitul muslim",
            year_in: "2006",
            year_out: "2007",
            major: null
        }, {
            name: "Sd it baitul muslim",
            year_in: "2007",
            year_out: "2013",
            major: null
        }, {
            name: "Smp it baiutl muslim",
            year_in: "2013",
            year_out: "2016",
            major: null
        }, {
            name: "Sma it baitul muslim",
            year_in: "2016",
            year_out: "2019",
            major: "ips"
        }],
        skills: [{
            skill_name: "mobile legends",
            level: "advanced"
        }, {
            skill_name: "Html",
            level: "beginner"
        }, {
            skill_name: "javascript",
            level: "beginner"
        }, {
            skill_name: "css dasar",
            level: "beginner"
        }, {
            skill_name: "css flex",
            level: "beginner"
        }, {
            skill_name: "DOM",
            level: "beginner"
        }],
        interest_in_coding: true,
    }
}

console.log(biodata())