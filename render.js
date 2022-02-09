export function renderState(object) {
    const divContainter = document.createElement('div');
    divContainter.classList.add('container');
    //state
    const divState = document.createElement('div');
    divState.classList.add('State');
    const h1 = document.createElement('h1');
    h1.textContent = object.name;
    const h3 = document.createElement('h3');
    h3.textContent = object.nickname;
    divState.append(h1, h3);
    //animal
    const divAnimal = document.createElement('div');
    divAnimal.classList.add('Animal');
    const imgAnimal = document.createElement('img');
    imgAnimal.classList.add('img');
    imgAnimal.src = `${object.animalImg}`;
    const pAnimal = document.createElement('p');
    pAnimal.textContent = `State Animal: ${object.animal}`;
    divAnimal.append(imgAnimal, pAnimal,);
    //flower
    const divFlower = document.createElement('div');
    divFlower.classList.add('flower');
    const imgFlower = document.createElement('img');
    imgFlower.classList.add('img');
    imgFlower.src = `${object.flowerImg}`;
    const pFlower = document.createElement('p');
    pFlower.textContent = `State Flower: ${object.flower}`;
    divFlower.append(imgFlower, pFlower);
    //fruit
    const divFruit = document.createElement('div');
    divFruit.classList.add('fruit');
    const imgFruit = document.createElement('img');
    imgFruit.classList.add('img');
    imgFruit.src = `${object.fruitImg}`;
    const pFruit = document.createElement('p');
    pFruit.textContent = `State Fruit: ${object.Fruit}`;
    divFruit.append(imgFruit, pFruit);
    //tree
    const divTree = document.createElement('div');
    divTree.classList.add('tree');
    const imgTree = document.createElement('img');
    imgTree.classList.add('img');
    imgTree.src = `${object.treeImg}`;
    const pTree = document.createElement('p');
    pTree.textContent = `State Tree: ${object.Tree}`;
    divTree.append(imgTree, pTree);
    divContainter.append(divState, divAnimal, divFlower, divFruit, divTree);
    return divContainter;
}

export function renderStateImg(object) {
    const div = document.createElement('div');
    div.classList.add('states');
    const h3 = document.createElement('h3');
    h3.textContent = object.name;
    const img = document.createElement('img');
    img.src = object.img;
    div.append(h3, img);
    return div;
}