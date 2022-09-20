module.exports = class Human {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }

    static printHumanDetails() {
        return this.firstName + " " + this.lastName
    }
}