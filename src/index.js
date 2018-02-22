import _ from 'lodash';
import './style.css'
import Logo from './logo.png';
import Data from './data.xml';

function component() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack', Data.note.to], ' ');
  element.classList.add('hello');

  // Add the image to our existing div
  var myLogo = new Image();
  myLogo.src = Logo;
  element.appendChild(myLogo);

  console.log(Data);

  return element;
}

document.body.appendChild(component());
