# Unit Converter
A Javascript utility to convert different measurement units such as cm, inches and feet/inches  to another unit and vice-versa

# Example Usage
```
const converter = new UnitConverter();
converter.createFromCentimeter(200);

const inchValue = converter.getInch(); // returns the value in inches
const feetInchObject = converter.getFeetInch(); // return an object containing feet and inch
```
