const Order = require('./index');
const order = new Order();

describe('Ordenaciones', () => {
    test('ordenacion por seleccion, recibe [3,4,2,6,8,9] y devuelve [2,3,4,6,8,9]', () => {
        expect(order.selectionSort([3, 4, 2, 6, 8, 9])).toStrictEqual([2, 3, 4, 6, 8, 9]);
    });

    test('ordenacion por inserción, recibe [10,4,5,1,8,9] y devuelve [1,4,5,8,9,10]', () => {
        expect(order.insertionSort([10, 4, 5, 1, 8, 9])).toStrictEqual([1, 4, 5, 8, 9, 10]);
    });

    test('ordenacion por burbuja, recibe [10, 4, 40, 32, 67, 12, 43, 31, 65, 1] y devuelve [1, 4, 10, 12, 31, 32, 40, 43, 65, 67]', () => {
        expect(order.bubbleSort([10, 4, 40, 32, 67, 12, 43, 31, 65, 1])).toStrictEqual([1, 4, 10, 12, 31, 32, 40, 43, 65, 67]);
    });

    test('ordenacion con quickSort, recibe [10, 4, 40, 32, 67, 12, 43, 31, 65, 1] y devuelve [1, 4, 10, 12, 31, 32, 40, 43, 65, 67]', () => {
        expect(order.quickSort([10, 4, 40, 32, 67, 12, 43, 31, 65, 1])).toStrictEqual([1, 4, 10, 12, 31, 32, 40, 43, 65, 67]);
    });
})

