class CandyStore {
    constructor() {
        this.stock = {
            chamallows: 510,
            oursons: 4
        }
    }

    removeCandy(type, quantityRemove) {
        return this.stock[type] -= quantityRemove
    }

    addCandy(type, quantityAdd) {
        return this.stock[type] += quantityAdd
    }

    getStock(type) {
        return this.stock[type]
    }
}
