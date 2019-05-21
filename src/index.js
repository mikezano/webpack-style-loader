import _ from 'lodash';
import './style.css';
import './test.scss';
import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
  
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');
  
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

	return element;
  }

  let element = component(); //store element
  document.body.appendChild(element);

  if( module.hot){
	  module.hot.accept('./print.js', function(){
		  console.log('Accepting the updated printMe module!');
		  document.body.removeChild(element);
		  element = component(); //Re-render the 'component' to update click
		  document.body.appendChild(element);
	  })
  }