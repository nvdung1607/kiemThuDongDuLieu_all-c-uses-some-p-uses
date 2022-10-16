import { danhHieu } from './main.js'
const expect = chai.expect;

describe('Kiem thu dong dieu khien cho do do C2: function danhHieu()', () => {
    it('1. Test case: 9.0, tot', () => {
        const result = danhHieu(9.0, 'tot');
        expect(result).to.equal('hocSinhGioi');
    });

    it('2. Test case: 7.0, tot', () => {
        const result = danhHieu(7.0, 'tot');
        expect(result).to.equal('hocSinhTienTien');
    });

    it('3. Test case: 7.0, kha', () => {
        const result = danhHieu(7.0, 'kha');
        expect(result).to.equal('hocSinhTienTien');
    });

    it('4. Test case: 5.0, trungBinh', () => {
        const result = danhHieu(5.0, 'trungBinh');
        expect(result).to.equal('khongCoDanhHieu');
    });

});

