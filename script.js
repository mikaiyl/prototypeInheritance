function Speaker (givenName, surname, email, biography, isActive = true) {
    this.givenName = givenName;
    this.surname = surname;
    this.email = email;
    this.biography = biography;
};

Speaker.prototype = {
    getBiography: function () {
        console.log("Speaker's Name:" + " " + this.givenName + " || " + "Speaker's Biography:" + " " + this.biography)
    },

    markInactive: function (date) {
        this.isActive = false;
        this.inactiveDate = date;
    }

};

function KeynoteSpeaker (givenName, surname, email, biography, websites, keynoteTopics, breakouts, isActive = true) {
    this.websites = websites;
    this.keynoteTopics = keynoteTopics;
    this.breakouts = breakouts;
    Speaker.call(this, givenName, surname, email, biography, isActive = true);
};

function WorkshopSpeaker (givenName, surname, email, biography, workshopTopics, isActive = true) {
    this.workshopTopics = workshopTopics;
    Speaker.call(this, givenName, surname, email, biography, isActive = true);
};

KeynoteSpeaker.prototype = Object.create(Speaker.prototype);
KeynoteSpeaker.prototype.constructor = KeynoteSpeaker;

WorkshopSpeaker.prototype = Object.create(Speaker.prototype);
WorkshopSpeaker.prototype.constructor = WorkshopSpeaker;

const taylor = new Speaker("Taylor", "Gentry", "myemail", "mybiography");
const mikaiyl = new KeynoteSpeaker("Mikaiyl", "Davis", "hisemail", "hisbiography", "his websites", "histopics", "dontknowwhatbreakoutsare");
const brian = new WorkshopSpeaker("Brian", "Schuessler", "brianemail", "brianbiography", "briantopics");
console.log(taylor.getBiography());
console.log(mikaiyl.getBiography());
console.log(brian.getBiography());
