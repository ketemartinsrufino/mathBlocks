app.controller('MainController', function ($scope) {


  $scope.actualFase = new MathBlocks.Views.FaseZero();

  var state = {
    selected : 'selected',
    unselected : 'unselected'
  };

  //$scope.mathData = {
  //
  //  'triangle-up': {
  //    result: 3,
  //    className: 'triangle-up',
  //    state: 'unselected',
  //    value: '4 + 5 - 6'
  //  },
  //
  //  circle: {
  //    result: 0,
  //    className: 'circle',
  //    state: 'unselected',
  //    value: '0 - 9 -1'
  //  },
  //  square: {
  //    result: 4,
  //    className: 'square',
  //    state: 'unselected',
  //    value: '2 + 4/2'
  //  }
  //};
  //
  //$scope.blocksData = {
  //
  //  'triangle-up': {
  //    result: 3,
  //    className: 'triangle-up',
  //    state: 'unselected',
  //    value: ''
  //  },
  //
  //  circle: {
  //    result: 0,
  //    className: 'circle',
  //    state: 'unselected',
  //    value: ''
  //  },
  //  square: {
  //    result: 4,
  //    className: 'square',
  //    state: 'unselected',
  //    value: ''
  //  }
  //};

  var unselectAll = function(elements) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].removeAttribute('state');
    }
  };

  var clickMath = function(event, obj, allMath) {
    unselectAll(allMath);
    obj.setAttribute('state', state.selected);

  };

  var gotoNextFase = function() {
    $scope.actualFase.render();
    addListeners();
  };

  var clickBlock = function(event, obj, allBlocks) {

    unselectAll(allBlocks);

    var mathSelected = document.querySelector('.math_container [state="selected"]');
    if(mathSelected) {
      var mathResult = mathSelected.getParameter('result');
      var blockResult = obj.getParameter('result');
      if(mathResult === blockResult) {
        mathSelected.style.display = 'none';
        obj.style.display = 'none';

      } else {
        alert('Resposta errada. Tente novamente.');
      }

    } else {
      alert('Selecione uma equação');
    }

    obj.setAttribute('matched', true);
    var allBlocksViews = document.querySelectorAll('.blocks_container div:not([matched])');
    console.log(allBlocksViews);
    if(allBlocksViews && !allBlocksViews.length) {
      alert('Parabéns! Você passou para a próxima fase .');
      $scope.actualFase = $scope.actualFase.nextFase;
      gotoNextFase();
    }

  };

  var addListenersToElements = function(elements, callbackFunction) {
    for (var i = 0, length = elements.length; i < length; i++) {
      var obj = elements[i];
      obj.addEventListener('click', (function(obj) {
        return function(e) {
          callbackFunction(e, obj, elements);
        };
      }(obj)) );
    }
  };

  var addListeners = function() {
    var allMaths = document.querySelectorAll('.math_container div');
    var allBlocks = document.querySelectorAll('.blocks_container div');

    addListenersToElements(allMaths, clickMath);
    addListenersToElements(allBlocks, clickBlock);
  };

  $scope.actualFase.render();
  addListeners();


});
