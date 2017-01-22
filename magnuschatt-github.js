if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'magnuschatt-github'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'magnuschatt-github'.");
}
this['magnuschatt-github'] = function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    main_kand9s$: function (args) {
      var message = 'Hello JavaScript!';
      Kotlin.println(message);
    }
  });
  Kotlin.defineModule('magnuschatt-github', _);
  _.main_kand9s$([]);
  return _;
}(kotlin);
