var MathBlocks = MathBlocks || {};
MathBlocks.Views = MathBlocks.Views || {};

MathBlocks.Views.FaseMultiplication = (function() {

  function Fase() {

    MathBlocks.Views.FaseOne.apply (this, arguments);

    this.chalenger_description = '(4) Sabe multiplicar? Temos certeza que sim!\n' +
      'Mostre que você já quase um adulto em matemática';

    this.nextFase = MathBlocks.Views.FaseDivision;

    this.DataMath = {

      eigthavengers: {
        result: 8,
        className: 'eigthavengers',
        state: 'unselected',
        value: '2 * 4'
      },

      twentytwoavengers: {
        result: 22,
        className: 'twentytwoavengers',
        state: 'unselected',
        value: '2 * 5 * 2 + 2'
      },

      'hulkandthor': {
        result: 2,
        className: 'hulkandthor',
        state: 'unselected',
        value: '0 * 100 + 2'
      }

    };

    this.DataBlocks = {

      twentytwoavengers: {
        result: 22,
        className: 'twentytwoavengers'
      },

      eigthavengers: {
        result: 8,
        className: 'eigthavengers'
      },

      'hulkandthor': {
        result: 2,
        className: 'hulkandthor'
      }

    };

  }

  return Fase;

})();
