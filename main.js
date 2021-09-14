"use strict"
let cats = {
    cat1: {
        color: "blue",
        weight: 5,
        catName: "Вася"
    },
    cat2: {
        color: "белый",
        weight: 3,
        catName: "Мурка",
    }, 
    cat3: {
        color: "Рыжая",
        weight: 1,
        catName: "Тиша",
    }
}
//console.log(cats.cat1);
//объект- координаты прямоугольника
const rectangle = {
    topleftX: -10,
    topleftY: 5,
    bottomrightX: 10,
    bottomrightY: -5,
}
function placePoint (x,y) {
    if (x===0&& y===0) return `Точка (${x}, ${y}) находится в начале координат`;
    else if (x===0) return `Точка (${x}, ${y}) находится на оси Y`;
    else if (y===0) return `Точка (${x}, ${y}) находится на оси X`;
    else if (x>0&& y>0) return `Точка (${x}, ${y}) находится в I четверти`;
    else if (x>0&& y<0) return `Точка (${x}, ${y}) находится в II четверти`;
    else if (x<0&& y<0) return `Точка (${x}, ${y}) находится в III четверти`;
    else return `Точка (${x}, ${y}) находится в IV четверти`;
}
function writeInfo (rect) {
    document.getElementById ("f1").innerHTML=`
    <p> Левая верхняя ${placePoint (rect.topleftX, rect.topleftY)} </p>
    <p> Правая верхняя ${placePoint (rect.bottomrightX, rect.topleftY)} </p>
    <p> Левая нижняя ${placePoint (rect.topleftX, rect.bottomrightY)} </p>
    <p> Правая нижняя ${placePoint (rect.bottomrightX, rect.bottomrightY)} </p>
    `;
}
writeInfo (rectangle);

//принимает прямоугольник и возвращает ширину
function rectangleWidth (rect) {
    return rect.bottomrightX - rect.topleftX;
}

let rectWidth = rectangleWidth (rectangle);


document.getElementById ("f2").innerHTML = `
<p> Ширина прямоугольника равна ${rectWidth} м</p>`;
//высота

function rectangleHeight (rect) {
    return rect.topleftY - rect.bottomrightY;
}
let rectHeight = rectangleHeight (rectangle);
document.getElementById ("f3").innerHTML = `
<p> Высота прямоугольника равна ${rectHeight} м</p>`;

//Площадь прямоугольника

function squareRectangle (rect) {
    return rectangleWidth (rect) * rectangleHeight (rect);
}
document.getElementById ("f4").innerHTML = `
<p> Площадь прямоугольника равна ${squareRectangle (rectangle)} кв.м</p>`;

//Периметр


function rectanglePerimeter (rect) {
    return (rectangleWidth (rect) + rectangleHeight (rect))*2;
}
let rectPerimeter = rectanglePerimeter (rectangle);
document.getElementById ("f5").innerHTML = `
<p> Периметр прямоугольника равен ${rectPerimeter} м</p>`;

//изменение ширины


function changeWidth (rect, dd) {
    rect.bottomrightX += dd;
    return rect;
}
let changeDd = +prompt ("На сколько метров изменить ширину?");
let rect2 = changeWidth (rectangle, changeDd);
document.getElementById ("f6").innerHTML = `
<p> После изменения ширины на  ${changeDd} м, правая верхняя точка  (${rect2.bottomrightX} , ${rect2.topleftY}); правая нижняя точка (${rect2.bottomrightX} , ${rect2.bottomrightY}) </p>`;

//изменение высоты

function changeHeight (rect, dd) {
    rect.topleftY += dd;
    return rect;
}
let changeDh = +prompt ("На сколько метров изменить высоту?");
let rect3 = changeHeight (rectangle, changeDh);
document.getElementById ("f7").innerHTML = `
<p> После изменения высоты на  ${changeDh} м, левая верхняя точка  (${rect3.topleftX} , ${rect3.topleftY}); правая верхняя точка (${rect3.bottomrightX} , ${rect3.topleftY}) </p>`;

// изменение высоты и ширины
function resizeRect (rect, dd, dh) {
    return changeHeight (changeWidth (rect, dd), dh)
}
let rect4 = resizeRect (rectangle, changeDd, changeDh);
document.getElementById ("f8").innerHTML = `
<p> После изменения высоты на  ${changeDh} м и ширины на ${changeDd} м, левая верхняя точка  (${rect4.topleftX} , ${rect4.topleftY}); правая нижняя точка (${rect4.bottomrightX} , ${rect4.bottomrightY}) </p>`;
