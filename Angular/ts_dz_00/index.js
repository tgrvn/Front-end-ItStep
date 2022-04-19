var DateDiff = /** @class */ (function () {
    function DateDiff() {
        this.dateNow = new Date();
        do {
            var userQuestion = prompt('Введите дату в формате: YYYY.MM.DD' +
                '\n\nВремя автоматически будет установлено на 00:00:00');
            this.dateUser = new Date("".concat(userQuestion)).getTime();
        } while (isNaN(this.dateUser) && this.dateUser);
    }
    DateDiff.prototype.getMilisec = function () {
        var dateNow = this.dateNow;
        var dateUser = this.dateUser;
        if (dateNow > dateUser) {
            return dateNow - dateUser;
        }
        return dateUser - dateNow;
    };
    DateDiff.prototype.getSeconds = function () {
        return Math.floor(this.getMilisec() / 1000);
    };
    DateDiff.prototype.getMinutes = function () {
        return Math.floor(this.getSeconds() / 60);
    };
    DateDiff.prototype.getHours = function () {
        return Math.floor(this.getMinutes() / 60);
    };
    DateDiff.prototype.getDays = function () {
        return Math.floor(this.getHours() / 24);
    };
    DateDiff.prototype.addZero = function (anyTime) {
        return "".concat((anyTime) < 10 ? '0' + anyTime : anyTime);
    };
    DateDiff.prototype.showDateDifference = function () {
        var dateNow = this.dateNow;
        var dateUser = this.dateUser;
        if (dateUser > dateNow) {
            return ("Days: ".concat(this.getDays(), " ").concat(this.addZero(this.getHours()), ":").concat(this.addZero((this.getMinutes() % 60)), ":").concat(this.addZero((this.getSeconds() % 60))));
        }
        return ("Days: ".concat(this.getDays(), " ").concat(this.addZero(this.getHours()), ":").concat(this.addZero(60 - (this.getMinutes() % 60)), ":").concat(this.addZero(60 - (this.getSeconds() % 60))));
    };
    return DateDiff;
}());
var newDateDifference = new DateDiff();
alert(newDateDifference.showDateDifference());
