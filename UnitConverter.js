function UnitConverter() {
    let cm = 0, inch = 0;
    let feetInch = {feet: 0, inch: 0};
    let _this = this;

    /**
     * get value in centimeter
     * @returns {number}
     */
    this.getCentimeter = function () {
        return cm;
    }

    /**
     * get value in inches
     * @returns {number}
     */
    this.getInch = function () {
        return inch;
    }

    /**
     * get value in feet and inches
     * @returns {{feet: number, inch: number}}
     */
    this.getFeetInch = function () {
        return feetInch;
    }

    /**
     * Create value from centimeters
     * @param cmValue
     * @returns {UnitConverter}
     */
    this.createFromCentimeter = function (cmValue) {
        cm = cmValue;
        inch = this._convertMeasurementUnit(cmValue, 'cm', 'inch');
        feetInch = this._convertMeasurementUnit(cmValue, 'cm', 'feet.inch');
        return _this;
    }

    /**
     * Create value from inches
     * @param inchValue
     * @returns {UnitConverter}
     */
    this.createFromInches = function (inchValue) {
        inch = inchValue;
        feetInch = this._convertMeasurementUnit(inchValue, 'inch', 'feet.inch');
        cm = this._convertMeasurementUnit(inchValue, 'inch', 'cm');
        return _this;
    }

    /**
     * Create value from Feet and Inches
     * @param args {{feet, inch}}
     * @returns {UnitConverter}
     */
    this.createFromFeetInches = function ({...args}) {
        feetInch.feet = args.feet;
        feetInch.inch = args.inch;
        cm = this._convertMeasurementUnit(feetInch, 'feet.inch', 'cm');
        inch = this._convertMeasurementUnit(feetInch, 'feet.inch', 'inch');
        return _this;
    }

    /**
     * Converts a value from a given unit to another uni
     * @param value {{feet: number, inch: number}|*|number}
     * @param from
     * @param to
     * @returns {{feet: number, inch: number}|*|number}
     * @private
     */
    this._convertMeasurementUnit = function (value, from, to) {
        if (from === 'cm') {
            switch (to) {
                case 'inch':
                    return value / 2.54;
                case 'feet.inch':
                    const wholeFeet = Math.floor(value / 30.48);
                    const wholeInches = ((value / 30.48) - wholeFeet) * 12;
                    return {feet: wholeFeet, inch: wholeInches};
                default:
                    return value;
            }
        } else if (from === 'inch') {
            switch (to) {
                case 'cm':
                    return (value * 2.54);
                case 'feet.inch':
                    return (value.feet * 12) + value.inch;
                default:
                    return value;

            }
        } else if (from === 'feet.inch') {
            const inches = (value.feet * 12) + value.inch;
            switch (to) {
                case 'cm':
                    return (inches * 2.54);
                case 'inch':
                    return inches;
                default:
                    return value;

            }
        }
    }


}
