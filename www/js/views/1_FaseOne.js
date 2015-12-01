var MathBlocks = MathBlocks || {};
MathBlocks.Views = MathBlocks.Views || {};

MathBlocks.Views.FaseOne = (function() {

  function FaseOne() {

    this.chalenger_description = '(1) Quantos elementos tem nas figuras?';

    this.DataMath = {

      'threebaloons': {
        result: 3,
        className: 'threebaloons',
        state: 'unselected',
        value: '3'
      },

      oneball: {
        result: 1,
        className: 'oneball',
        state: 'unselected',
        value: '1'
      },
      sevendolls: {
        result: 4,
        className: 'sevendolls',
        state: 'unselected',
        value: '7'
      }
    };

    this.DataBlocks = this.DataMath;

    this.nextFase = MathBlocks.Views.FaseAddition;

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
      var container = document.querySelector('.container .main_content');
      var chalenger_description = document.querySelector('.chalenger_description');

      chalenger_description.innerHTML = this.chalenger_description;

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

      container.innerHTML = '';

      container.appendChild(blocks_container);
      container.appendChild(maths_container);
      return container;

    };

  }

  return FaseOne;

})();
