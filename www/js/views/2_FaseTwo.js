var MathBlocks = MathBlocks || {};
MathBlocks.Views = MathBlocks.Views || {};

var Data = {

  'blocks_container': {
    className: 'blocks_container'
  },
  'triangle_up': {
    result: 3,
    className: 'triangle-up',
    state: 'unselected',
    value: '4 + 5 - 6'
  },

  circle: {
    result: 0,
    className: 'circle',
    state: 'unselected',
    value: '0 - 9 -1'
  },
  square: {
    result: 4,
    className: 'square',
    state: 'unselected',
    value: '2 + 4/2'
  }
};

MathBlocks.Views.FaseTwo = function() {

  return function() {

    this.nextFase = null;

    var createElement = function(element, value) {
      var result = element.result;
      var div = document.createElement('div');
      div.className = element.className;
      if(result) {
        div.setAttribute('result', result);
      }
      if(value) {
        div.innerHTML = value;
      }
      return div;
    };

    this.render = function() {
      var container = document.querySelector('.container');

      var blocks_container = createElement(Data.blocks_container);
      var triangle_up = createElement(Data.triangle_up);
      var circle = createElement(Data.circle);
      var square = createElement(Data.square);

      blocks_container.appendChild(triangle_up);
      blocks_container.appendChild(circle);
      blocks_container.appendChild(square);

      var maths_container = createElement(Data.maths_container);
      var triangle_up_math = createElement(Data.triangle_up);
      var circle_math = createElement(Data.circle);
      var square_math = createElement(Data.square);

      maths_container.appendChild(triangle_up_math);
      maths_container.appendChild(circle_math);
      maths_container.appendChild(square_math);


      container.appendChild(blocks_container);
      container.appendChild(maths_container);
      return container;

    };

  }

}();
