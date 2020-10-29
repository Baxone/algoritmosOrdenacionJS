class Order {

    constructor() { }

    selectionSort = pArray => {
        for (let i = 0; i < pArray.length; i++) {
            let min = i;
            for (let j = i + 1; j < pArray.length; j++) {
                if (pArray[j] < pArray[min]) min = j;
            }
            let temp = pArray[i];
            pArray[i] = pArray[min];
            pArray[min] = temp;

        }

        return pArray;
    }

    insertionSort = pArray => {
        for (let i = 0; i < pArray.length; i++) {
            let position = i;
            let currentValue = pArray[position];

            while (position > 0 && currentValue < pArray[position - 1]) {
                pArray[position] = pArray[position - 1];
                position--;
            }

            pArray[position] = currentValue;

        }
        return pArray;
    }


    bubbleSort = pArray => {
        for (let i = 0; i < pArray.length; i++) {
            for (let j = 0; j < pArray.length - 1 - i; j++) {
                if (pArray[j] > pArray[j + 1]) {
                    let temp = pArray[j];
                    pArray[j] = pArray[j + 1];
                    pArray[j + 1] = temp;

                }
            }
        }
        return pArray;
    }

    quickSort = pArray => {
        if (pArray.length < 1) {
            return pArray
        }
        const arrayLeft = new Array();
        const arrayRight = new Array();
        let pivot = pArray[0];

        for (let i = 1; i < pArray.length; i++) {
            if (pArray[i] < pivot) {
                arrayLeft.push(pArray[i]);
            } else {
                arrayRight.push(pArray[i]);
            }
        }

        const arrayOrder = new Array()
        return arrayOrder.concat(this.quickSort(arrayLeft), pivot, this.quickSort(arrayRight));
    }
}

module.exports = Order;