import 'mocha';
import {expect} from 'chai';
import { hungryBears } from '../src/hungryBears';

describe("hungryBears", function(){
    it("should return an array for empty input", function() {
        expect(hungryBears([])).to.be.a('array');
    });

    it("should satisfy the email example", function(){
        const bears = [
            { name: 'Baloo', hunger: 6 },
            { name: 'Yogi', hunger: 9 },
            { name: 'Paddington', hunger: 4 },
            { name: 'Winnie', hunger: 10 },
            { name: 'Chicago', hunger: 20 },
        ];
        expect(hungryBears(bears)).to.eql(["Chicago", "Winnie"]);
    });
});