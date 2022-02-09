import { renderState } from '../render.js';

const test = QUnit.test;

test('testing state function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="container"><div class="State"><h1>Oregon</h1><h3>The Beaver State</h3></div><div class="Animal"><img class="img" src="../assets/francesco-ungaro-cHVKmOwd0A8-unsplash.jpg"><p>State Animal: American beaver</p></div><div class="flower"><img class="img" src="../assets/oregon-state-flower-gcdc3b0078_1920.jpg"><p>State Flower: Oregon Grape</p></div><div class="fruit"><img class="img" src="../assets/pexels-mali-maeder-568471.jpg"><p>State Fruit: Pear</p></div><div class="tree"><img class="img" src="../assets/douglas-fir-g2ee540245_1920.jpg"><p>State Tree: Douglas-fir</p></div></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderState({
        id: '1',
        name: 'Oregon',
        nickname: 'The Beaver State',
        img: 'assets/icons8-oregon-100.png',
        animal: 'American beaver',
        animalImg: '../assets/francesco-ungaro-cHVKmOwd0A8-unsplash.jpg',
        flower: 'Oregon Grape',
        flowerImg: '../assets/oregon-state-flower-gcdc3b0078_1920.jpg',
        Fruit: 'Pear',
        fruitImg: '../assets/pexels-mali-maeder-568471.jpg',
        Tree: 'Douglas-fir',
        treeImg: '../assets/douglas-fir-g2ee540245_1920.jpg',
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});