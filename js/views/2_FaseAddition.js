var MathBlocks = MathBlocks || {};
MathBlocks.Views = MathBlocks.Views || {};

MathBlocks.Views.FaseAddition = (function() {

  function Fase() {

    MathBlocks.Views.FaseOne.apply (this, arguments);

    this.chalenger_description = '(2) O resultado das somas vai dizer o elemento correto.';

    this.nextFase = MathBlocks.Views.FaseSubtraction;

    this.DataMath = {

      fourairplane: {
        result: 4,
        className: 'fourairplane',
        state: 'unselected',
        value: '1 + 1 + 1 + 1'
      },

      sevendolls: {
        result: 7,
        className: 'sevendolls',
        state: 'unselected',
        value: '2 + 4 + 1'
      },

      'threebaloons': {
        result: 3,
        className: 'threebaloons',
        state: 'unselected',
        value: '0 + 1 + 2'
      }

    };

    this.DataBlocks = {

      sevendolls: {
        result: 7,
        className: 'sevendolls',
        state: 'unselected'
      },

      'threebaloons': {
        result: 3,
        className: 'threebaloons',
        state: 'unselected'
      },

      fourairplane: {
        result: 4,
        className: 'fourairplane',
        state: 'unselected'
      }

    };

  }

  return Fase;

})();
