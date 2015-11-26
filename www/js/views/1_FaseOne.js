var MathBlocks = MathBlocks || {};
MathBlocks.Views = MathBlocks.Views || {};

MathBlocks.Views.FaseOne = (function() {

  function FaseOne() {

    this.chalenger_description = 'O resultado da equação indica quantos lados tem o polígono. ' +
      '\nClique na equação e depois do bloco para indicar que você realmente sabe matemática!';

    this.DataMath = {

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

    this.DataBlocks = this.DataMath;

    this.nextFase = MathBlocks.Views.FaseTwo;

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

      var blocks_container = createElement({ className: 'blocks_container' });

      for (var key in this.DataBlocks) {
        var element = createElement(this.DataBlocks[key]);
        blocks_container.appendChild(element);
      }

      var maths_container = createElement({ className: 'maths_container' });

      for (var key in this.DataMath) {
        var element = createElement(this.DataMath[key], this.DataMath[key].value);
        maths_container.appendChild(element);
      }

      container.appendChild(blocks_container);
      container.appendChild(maths_container);
      return container;

    };

  }

  return FaseOne;

})();
