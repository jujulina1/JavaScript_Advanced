/**
 * 
 * @number {*} width 
 * @number {*} height 
 * @string {*} color 
 */
function rectangle(width, height, color) {

    let color1 =color.charAt(0).toUpperCase() + color.slice(1);
    const obj = {
        width,
        height,
        color: color1,
        calcArea(){
            return this.width * this.height;
        }
    }

    return obj;
    
}



let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());