export const callcTotalPrice = items => items.reduce((acc, item) =>  (acc += item.price), 0);