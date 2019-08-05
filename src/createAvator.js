import TestImage from "./images/test.jpg"
import style from './css/index.scss'
function createAvator(){
    var img = new Image();
    img.src = TestImage;
    img.classList.add(style.testImage)
    var root = document.getElementById('root');
    root.append(img)
}
export default createAvator