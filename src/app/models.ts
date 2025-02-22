export interface Cart {
    lineItems: LineItem[]
    grandTotal: number
}

export interface LineItem {
    key: string
    itemInfo: Inventory
    quantity: number
    totalCost: number
}

export interface UpdateItemEvent {
    key: string
    qtyUpdate: number
}

export interface Inventory {
    key: string
    name: string
    image: string
    unitPrice: number
}

export const INVENTORY: Inventory[] = [
    {
        key: 'apple',
        name: 'Apple',
        image: 'apple.png',
        unitPrice: 0.5
    },
    {
        key: 'blueberries',
        name: 'Blueberries',
        image: 'blueberries.png',
        unitPrice: 3.5
    },
    {
        key: 'corn',
        name: 'Corn',
        image: 'corn.png',
        unitPrice: .75
    },
    {
        key: 'potato',
        name: 'Potato',
        image: 'potato.png',
        unitPrice: 2
    },
    {
        key: 'pumpkin',
        name: 'Pumpkin',
        image: 'pumpkin.png',
        unitPrice: 2
    },
    {
        key: 'zucchini',
        name: 'Zucchini',
        image: 'zucchini.png',
        unitPrice: 4
    }
]