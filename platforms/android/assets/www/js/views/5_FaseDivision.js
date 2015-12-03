var MathBlocks = MathBlocks || {};
MathBlocks.Views = MathBlocks.Views || {};

MathBlocks.Views.FaseDivision = (function() {

  function Fase() {

    MathBlocks.Views.FaseOne.apply (this, arguments);

    this.chalenger_description = '(5) Eita! Agora é a hora de saber se você sabe as 4 operações \n' +
      'Temos soma, subtração, multiplicação e divisão.';

    this.nextFase = MathBlocks.Views.FaseFinal;

    this.DataMath = {

      sixhorse: {
        result: 6,
        className: 'sixhorse',
        state: 'unselected',
        value: '9 - 3'
      },

      oneball: {
        result: 1,
        className: 'oneball',
        state: 'unselected',
        value: '10 - 5 - 4  '
      },

      'twobear': {
        result: 2,
        className: 'twobear',
        state: 'unselected',
        value: '5 + 8 - 11'
      }

    };

    this.DataBlocks = {

      'twobear': {
        result: 2,
        className: 'twobear',
        state: 'unselected'
      },

      oneball: {
        result: 1,
        className: 'oneball',
        state: 'unselected'
      },

      sixhorse: {
        result: 6,
        className: 'sixhorse',
        state: 'unselected'
      }

    };

  }

  return Fase;

})();
