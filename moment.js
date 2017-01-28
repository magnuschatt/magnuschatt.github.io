if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'moment'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'moment'.");
}
var moment = function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    kotlin: Kotlin.definePackage(null, /** @lends _.kotlin */ {
      Http: Kotlin.createObject(null, function Http() {
      }, /** @lends _.kotlin.Http.prototype */ {
        get_fa06q8$: function (url, action) {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.send();
          xhr.onreadystatechange = _.kotlin.Http.get_fa06q8$f(xhr, action);
        }
      }, /** @lends _.kotlin.Http */ {
        get_fa06q8$f: function (closure$xhr, closure$action) {
          return function (it) {
            if (closure$xhr.readyState === Kotlin.toShort(4) && closure$xhr.status === Kotlin.toShort(200)) {
              closure$action(closure$xhr);
            }
          };
        }
      }),
      main_kand9s$f: function () {
        this.innerHTML = 'WTf is this';
      },
      main_kand9s$f_0: function (xhr) {
        var tmp$0;
        var resp = xhr.responseText;
        (tmp$0 = document.getElementById('rofl')) != null ? (tmp$0.innerHTML = resp) : null;
      },
      main_kand9s$: function (args) {
        Kotlin.println('How are we doing!? :)');
        _.kotlin.html.element_s2ti8u$('bob', _.kotlin.main_kand9s$f);
        var url = 'https://script.google.com/macros/s/AKfycbwvIVDdBaaV5TkB9RTtYiXUlSkqKrnAW2FmnQ4d0S-UZM-Dfb5S/exec';
        _.kotlin.Http.get_fa06q8$(url, _.kotlin.main_kand9s$f_0);
      },
      html: Kotlin.definePackage(null, /** @lends _.kotlin.html */ {
        element_61zpoe$: function (elementId) {
          return document.getElementById(elementId);
        },
        element_s2ti8u$: function (elementId, modify) {
          var tmp$0;
          if ((tmp$0 = document.getElementById(elementId)) != null) {
            var $receiver = tmp$0;
            modify.call($receiver);
            return $receiver;
          }
           else
            return null;
        },
        div_iin4qp$: function ($receiver, init) {
          return Kotlin.kotlin.dom.build.createElement_hart3b$($receiver, 'DIV', document, init);
        }
      })
    })
  });
  Kotlin.defineModule('moment', _);
  _.kotlin.main_kand9s$([]);
  return _;
}(kotlin);
