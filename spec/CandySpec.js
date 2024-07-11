

describe("Count stock candy", function() {

    let store;

    beforeEach(function() {
        store = new CandyStore
    })

    it("retire 1 candy chamallows", function() {
        totalStockChamallows = store.getStock("chamallows")
        store.removeCandy("chamallows", 20)
        expect(store.getStock("chamallows")).toEqual(totalStockChamallows - 20)
    });
    
    it("add 600 candy ourson", function() {
        totalStockOursons = store.getStock("oursons")
        store.addCandy("oursons", 600)
        expect(store.getStock('oursons')).toEqual(totalStockOursons + 600)
    });

});
