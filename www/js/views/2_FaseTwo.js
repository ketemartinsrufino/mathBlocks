var MathBlocks = MathBlocks || {};
MathBlocks.Views = MathBlocks.Views || {};

MathBlocks.Views.FaseTwo = (function() {

  function Fase() {

    //MathBlocks.Views.FaseOne.apply (this, arguments);

    this.DataBlocks = {

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

    this.DataMath = this.DataBlocks;

  }

  return Fase;

})();
