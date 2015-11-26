app.controller('MainController', function ($scope) {


  $scope.actualFase = new MathBlocks.Views.FaseOne();
  $scope.message = '';

  var state = {
    selected : 'selected',
    unselected : 'unselected'
  };

  var unselectAll = function(elements) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].removeAttribute('state');
    }
  };

  var clickMath = function(event, obj, allMath) {
    var actualState = obj.getAttribute('state');
    unselectAll(allMath);
    obj.setAttribute('state', (actualState === state.selected? state.unselected: state.selected));

  };

  var gotoNextFase = function() {
    $scope.actualFase.render();
    addListeners();
  };

  var checkFinish = function() {
    var allBlocksViews = document.querySelectorAll('.blocks_container div:not([matched])');

    if(allBlocksViews && !allBlocksViews.length) {
      $scope.message = 'Parabéns! Você passou para a próxima fase .';
      $scope.actualFase = new $scope.actualFase.nextFase();
      gotoNextFase();
    }
  };

  var clickBlock = function(event, obj, allBlocks) {

    unselectAll(allBlocks);

    var mathSelected = document.querySelector('.maths_container [state="selected"]');
    if(mathSelected) {
      var mathResult = mathSelected.getAttribute('result');
      var blockResult = obj.getAttribute('result');
      if(mathResult === blockResult) {
        mathSelected.style.display = 'none';
        obj.style.display = 'none';

        obj.setAttribute('matched', true);

      } else {
        $scope.message = 'Resposta errada. Tente novamente.';
        console.log($scope.message);
      }

    } else {
      $scope.message = 'Por favor, selecione primeiro uma equação.';
      console.log($scope.message);
    }

    checkFinish();

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
    var allMaths = document.querySelectorAll('.maths_container div');
    var allBlocks = document.querySelectorAll('.blocks_container div');

    addListenersToElements(allMaths, clickMath);
    addListenersToElements(allBlocks, clickBlock);
  };

  $scope.actualFase.render();
  addListeners();


});
