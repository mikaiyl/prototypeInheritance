/* Speaker constructor */

function Speaker (givenName, surname, email, biography, isActive = true) {
    this.givenName = givenName;
    this.surname = surname;
    this.email = email;
    this.biography = biography;
    this.isActive = isActive;
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

function KeynoteSpeaker ( givenName, surname, email, biography, websites, keynoteTopics, breakouts, isActive ) {
    Speaker.call( this, givenName, surname, email, biography, isActive );
    this.websites = websites;
    this.keynoteTopics = keynoteTopics;
    this.breakouts = breakouts;
};

function WorkshopSpeaker ( givenName, surname, email, biography, workshopTopics ) {
    Speaker.call(this, givenName, surname, email, biography, isActive = true);
    this.workshopTopics = workshopTopics;
};

KeynoteSpeaker.prototype = Object.create(Speaker.prototype);
KeynoteSpeaker.prototype.constructor = KeynoteSpeaker;

WorkshopSpeaker.prototype = Object.create(Speaker.prototype);
WorkshopSpeaker.prototype.constructor = WorkshopSpeaker;

const taylor = new Speaker("Taylor", "Gentry", "tgentry@speaker.net", "mybiography");
const mikaiyl = new KeynoteSpeaker("Mikaiyl", "Davis", "mdavis@speaker.net", "hisbiography", "his websites", "histopics", "dontknowwhatbreakoutsare");
const brian = new WorkshopSpeaker("Brian", "Schuessler", "bschuessler@speaker.com", "brianbiography", "briantopics");

console.log( taylor.getBiography() );
console.log( mikaiyl.getBiography() );
console.log( brian.getBiography() );
