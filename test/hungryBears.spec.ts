import 'mocha';
import {expect} from 'chai';
import { hungryBears } from '../src/hungryBears.ts';

describe("hungryBears", function(){
    it("should return an array for empty input", function() {
        expect(hungryBears([])).to.be.a('array');
    });

    it("should satisfy the email example", function() {
        const bears = [
            { name: 'Baloo', hunger: 6 },
            { name: 'Yogi', hunger: 9 },
            { name: 'Paddington', hunger: 4 },
            { name: 'Winnie', hunger: 10 },
            { name: 'Chicago', hunger: 20 },
        ];
        expect(hungryBears(bears)).to.eql(["Chicago", "Winnie"]);
    });

    it("should return empty for one input", function() {
        const bears = [
            { name: 'George', hunger: 1 }
        ];
        expect(hungryBears(bears)).to.eql([]);
    });

    it("should return the hungrier of 2 bears", function() {
        const bears = [
            { name: 'John', hunger: 1 },
            { name: 'Paul', hunger: 2 }
        ];
        expect(hungryBears(bears)).to.eql(["Paul"]);
    });

    it("should treat negative hungers as 0", function() {
        const bears = [
            { name: "Unhungry", hunger: -100 },
            { name: "Unfull", hunger: -10 },
            { name: "Hungry", hunger: 1 }
        ];
        expect(hungryBears(bears)).to.eql(["Hungry"]);
    });
});