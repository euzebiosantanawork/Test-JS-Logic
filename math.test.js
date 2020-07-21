const { sum , compoundSum , multiplication , calc } = require ( ` ./math ` ) ;

describe ( ` the sum function ` () => {

    test ( ` Sum of 1 and 2 must be 3 ` , () => {

        expect ( sum ( 1 , 2 ) ) .toBe ( 3 ) ;

    } );

    test ( ` Sum of 1 , 2 and 3 must be 6 ` , () => {

        expect ( compoundSum ( 1 , 2  , 3 ) ) .toBe ( 6 ) ;

    } ) ;

} );

describe ( ` the multiplication function ` , () => {

    test ( ` A multiplication of 5 and 2 must be 10 ` , () => {

        expect ( multiplication ( 5 , 2) ) .toBe ( 10 ) ;

    } ) ;

} ) ;

describe ( ' the calculation function ' , () => {

    test ( ' the calculation of 1 , 2 and 2 must be 6 ' , () => {

        expect( calc (1 , 2 ,2 )) .toBe ( 6 ) ;

    } ) ;

}) ;