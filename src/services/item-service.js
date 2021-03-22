import { storageService } from './storage-service'
// import { utilsService } from './utils-service'

const KEY = 'itemDB'
var src1=require('../assets/images/homepage/menu-items/menu-item1.jpg').default
var src2=require('../assets/images/homepage/menu-items/menu-item2.jpg').default
var src3=require('../assets/images/homepage/menu-items/menu-item3.jpg').default
// import src1 from '../assets/images/homepage/menu-items/menu-item1.jpg'
// import src2 from '../assets/images/homepage/menu-items/menu-item2.jpg'
// import src3 from '../assets/images/homepage/menu-items/menu-item3.jpg'
export const itemService = {
    query,
    // onSetFilter,
    // addItem
}
var gItems
_createItems()

function query() {
    return Promise.resolve(gItems)
}

function _createItems() {
    gItems = storageService.load(KEY)
    if (!gItems || !gItems.length) {
        gItems = _getDemoItems()
        _saveItemsToStorage()
    }
}

function _getDemoItems() {
    const items = [
        {
            title: 'Seared Salmon Fillet',
            desc: 'Our locally sourced salmon served with a refreshing buckwheat summer salad.',
            imgUrl: src1
        },
        {
            title: 'Rosemary Filet Mignon',
            desc: 'Our prime beef served to your taste with a delicious choice of seasonal sides.',
            imgUrl: src2
        },
        {
            title: 'Summer Fruit Chocolate Mousse',
            desc: 'Creamy mousse combined with summer fruits and dark chocolate shavings.',
            imgUrl: src3
        },

    ]
    return items
}

function _saveItemsToStorage() {
    storageService.save(KEY, gItems)
}

// function onSetFilter(filterBy) {
//     const regex = new RegExp(filterBy)
//     gItems = gItems.filter(item => regex.test(item.address))
//     query()
// }
// function addItem(title, msg) {
//     const newItem = {
//         title
//         desc: '',
//         imgUrl: ''
//     }
//     gItems = [newItem, ...gItems]
//     _saveItemsToStorage()
//     return Promise.resolve(gItems)
// }