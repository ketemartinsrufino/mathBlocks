var MathBlocks = MathBlocks || {};
MathBlocks.Views = MathBlocks.Views || {};

MathBlocks.Views.FaseTwo = (function() {

  function Fase() {

    MathBlocks.Views.FaseOne.apply (this, arguments);

    this.nextFase = MathBlocks.Views.FaseOne;

    this.DataBlocks = {

      'parallelogram': {
        result: 4,
        className: 'parallelogram',
        state: 'unselected',
        value: '1 + 2 * 5 - [(3 * 2) + 1]'
      },

      'triangle-down': {
        result: 3,
        className: 'triangle-down',
        state: 'unselected',
        value: '2 * 5 - [(3 * 2) + 1]'
      },

      circle: {
        result: 0,
        className: 'circle',
        state: 'unselected',
        value: '2 * 10/5 + ( 3 + 1 ) * -1'
      },
      square: {
        result: 4,
        className: 'square',
        state: 'unselected',
        value: '12/4 + ( 3 - 2)'
      }
    };

    this.DataMath = {

      'triangle-down': {
        result: 3,
        className: 'triangle-down',
        state: 'unselected',
        value: '2 * 5 - [(3 * 2) + 1]'
      },

      'parallelogram': {
        result: 4,
        className: 'parallelogram',
        state: 'unselected',
        value: '1 + 2 * 5 - [(3 * 2) + 1]'
      },

      square: {
        result: 4,
        className: 'square',
        state: 'unselected',
        value: '12/4 + ( 3 - 2)'
      },

      circle: {
        result: 0,
        className: 'circle',
        state: 'unselected',
        value: '2 * 10/5 + ( 3 + 1 ) * -1'
      }

    };

  }

  return Fase;

})();
