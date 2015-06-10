(function(){
  'use strict';

  var stylesheets = {
    monokai: 'bower_components/github-gist/themes/monokai.css',
    github: ''
  };

  var githubGist = document.querySelector('github-gist'),
      paperInput = document.querySelector('paper-input'),
      btnWrapper = document.querySelector('.theme'),
      btns = btnWrapper.querySelectorAll('paper-button'),
      timeout;

  function eventHandler(e) {
    e.stopPropagation();
    e.preventDefault();
    var elem = e.target.parentNode;
    if(elem.classList.contains('active')){
      return;
    }
    var activeBtn = elem,
        activeBtnId = elem.id;

    githubGist.setAttribute('stylesheet', stylesheets[activeBtnId]);

    for(var i in btns){
      if(btns.hasOwnProperty(i) && typeof btns[i] === 'object'){
        btns[i].classList.remove('active');
      }
    }

    activeBtn.classList.add('active');
  }

  btnWrapper.addEventListener("click", eventHandler, false);
  paperInput.addEventListener("input", function(e){
    e.stopPropagation();
    e.preventDefault();
    if(this.value){
      if(typeof timeout !== 'undefined'){
        clearTimeout(timeout);
      }
      timeout = setTimeout(function(){
        githubGist.setAttribute('gistid', this.value);
      }.bind(this), 350);
    }
  });
})();
