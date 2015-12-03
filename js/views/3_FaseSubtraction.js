var MathBlocks = MathBlocks || {};
MathBlocks.Views = MathBlocks.Views || {};

MathBlocks.Views.FaseSubtraction = (function() {

  function Fase() {

    MathBlocks.Views.FaseOne.apply (this, arguments);

    this.chalenger_description = '(3) Opa! Agora temos subtração nas continhas também! \n' +
      'O resultado das somas vai dizer o elemento correto.';

    this.nextFase = MathBlocks.Views.FaseMultiplication;

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
