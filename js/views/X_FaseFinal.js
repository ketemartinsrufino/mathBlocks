var MathBlocks = MathBlocks || {};
MathBlocks.Views = MathBlocks.Views || {};

MathBlocks.Views.FaseFinal = (function() {

  function Fase() {

    MathBlocks.Views.FaseOne.apply (this, arguments);

    this.chalenger_description = 'Parabéns!!! Você conseguiu vencer todos os desafios. \n' +
      'Já pode se considerar um gênio da matemática. ;-)';

    this.DataMath = {

    };

    this.DataBlocks = {

      'genius': {
        result: 2,
        className: 'genius',
        state: 'unselected'
      }
    };

  }

  return Fase;

})();
