import AHP from 'ahp';

const ahpContext = new AHP();

/*
notice that in this demo, we import price item ranking with matrix,
and import UX item ranking with absolute scores. Both are supported.
*/
ahpContext.import({
    items: ['VendorA', 'VendorB', 'VendorC'],
    criteria: ['price', 'functionality', 'UX'],
    criteriaItemRank: {
        price: [
            [1, 1, 0.5],
            [1, 1, 0.5],
            [2, 2, 1]
        ],
        functionality: [
            [1, 5, 5],
            [0.2, 1, 1],
            [0.2, 1, 1]
        ],
        UX: [10, 10, 1]
    },
    criteriaRank: [
        [1, 3, 3],
        [0.3333333333333333, 1, 1],
        [0.3333333333333333, 1, 1]
    ]
});

const output = ahpContext.run();
console.log(output);