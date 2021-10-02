import Calcul from "../src/calcul";

describe("Calcul de 2 nbrs", ()=>{
    it('doit retourner 13', function () {
        let a:number=8;
        let b:number=5;
        let expected=13;
        expect(Calcul.somme(a,b)).toBe(expected);
    });
});
