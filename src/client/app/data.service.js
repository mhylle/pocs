(function () {
  'use strict';

  angular
    .module('app')
    .factory('DataService', DataService);

  DataService.$inject = [];

  /* @ngInject */
  function DataService() {
    var service = {
      getData: getData
    };
    return service;

    ////////////////

    function getData() {
      var result = [
        {
          id: 1,
          name: 'Lorem',
          shortdesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          description: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mauris massa, fringilla in enim quis, cursus pulvinar enim. Fusce mollis, metus vitae sagittis consectetur, tortor ante convallis turpis, at elementum sapien mauris porta lacus. Morbi at elit orci. Quisque accumsan metus eu odio mollis sollicitudin. Nulla finibus et magna ac scelerisque. Nam pulvinar augue non libero dignissim, pellentesque eleifend purus condimentum. Mauris et porttitor leo, et placerat nulla. Curabitur egestas et sem non mattis. In id sem tempus, consectetur ipsum et, tempus tortor. Aenean euismod sit amet ipsum id ullamcorper. Proin vestibulum, felis sed ornare sodales, urna nunc mollis odio, in tempus odio dui sed turpis. Sed bibendum blandit blandit. Mauris massa tortor, porttitor efficitur orci sed, luctus consequat arcu.',
          image: 'http://lorempixel.com/200/200/sports/1/'
        },
        {
          id: 2,
          name: 'Ipsum',
          shortdesc: 'Suspendisse malesuada dolor vel sollicitudin ornare.',
          description: 'Donec ut efficitur erat. In blandit, dui ornare congue mattis, dolor lectus molestie eros, id vestibulum purus tellus quis sapien. Proin arcu arcu, elementum sit amet lorem ut, elementum viverra lacus. Nam vel laoreet felis. Nullam malesuada vel elit eu vehicula. Sed sit amet nulla velit. Cras ante leo, rutrum ac nunc id, tempor laoreet nisl. Pellentesque pharetra ut dolor eget molestie. Donec tempus ut dolor quis posuere. Integer sit amet dictum felis, non euismod leo. Donec auctor pharetra turpis, id facilisis arcu condimentum ut. Quisque sapien sem, tincidunt id tincidunt eget, vestibulum eu ex. Suspendisse in varius risus.',
          image: 'http://lorempixel.com/200/200/sports/2/'
        },
        {
          id: 3,
          name: 'Dolor',
          shortdesc: 'Fusce porta orci non vestibulum suscipit.',
          description: 'Sed fermentum, odio ut tincidunt posuere, nibh sapien tincidunt urna, eu pretium erat turpis id magna. Mauris in purus eu turpis laoreet aliquet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam varius odio quis lacus eleifend iaculis. Donec luctus nec urna vel pellentesque. Nulla facilisi. Integer pretium, leo sed feugiat dapibus, odio massa ornare orci, ullamcorper tristique est nisl sed felis. Pellentesque et odio rhoncus, dapibus nulla sed, efficitur neque. Pellentesque iaculis felis eu justo convallis, ac vehicula augue convallis. Duis malesuada ullamcorper risus sed viverra.',
          image: 'http://lorempixel.com/200/200/sports/3/'
        },
        {
          id: 4,
          name: 'Sit',
          shortdesc: 'Nulla fermentum odio quis ipsum aliquam, ut maximus elit facilisis.',
          description: 'Donec at ullamcorper dui, vel iaculis neque. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ornare libero sodales tellus vehicula, quis pellentesque enim porttitor. Sed mi odio, rhoncus ornare blandit nec, pulvinar quis nisl. Aliquam erat volutpat. Pellentesque auctor pharetra magna sit amet rutrum. Ut mollis est nulla, at condimentum nisl semper eget. Curabitur eu lobortis tortor. Sed non diam sagittis, hendrerit felis vitae, imperdiet odio. Mauris id accumsan nisl.',
          image: 'http://lorempixel.com/200/200/sports/6/'
        },
        {
          id: 5,
          name: 'Amet',
          shortdesc: 'Donec id leo eu nisi feugiat feugiat nec et libero.',
          description: 'Nulla interdum eros eget urna imperdiet sodales. Nullam at dolor purus. Nullam at ipsum at ipsum faucibus pulvinar. Nam erat magna, pulvinar eu varius iaculis, accumsan ac ipsum. Sed id volutpat dolor. Quisque suscipit lorem vitae tempor faucibus. Duis eu sem a lacus sollicitudin lacinia. Cras tempus vel nunc in viverra. Maecenas lobortis a mauris at commodo. Maecenas lobortis leo purus, sed malesuada arcu varius vitae. Donec eget placerat quam. Donec sed nunc nulla.',
          image: 'http://lorempixel.com/200/200/sports/5/'
        }
      ];
      return result;
    }
  }

})();


