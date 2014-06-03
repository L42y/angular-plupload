angular.module('l42y.plupload', []).directive('plupload', function (
) {
  return {
    scope: true,
    controller: function ($scope, $element, $attrs) {
      this.options = angular.extend({
        container: $element[0]
      }, $scope.$eval($attrs.pluploadOptions));
    },
    controllerAs: 'plupload'
  };
}).directive('pluploadBrowseButton', function (
  $window
) {
  return {
    require: '^plupload',
    link: function ($scope, $element, $attrs, $plupload) {
      var options = angular.extend({
        'browse_button': $element[0]
      }, $plupload.options);
      $plupload.uploader = new $window.plupload.Uploader(options);
      $plupload.uploader.init();
    }
  };
}).directive('pluploadDropElement', function () {
  return {
    require: '^plupload',
    link: function ($scope, $element, $attrs, $plupload) {
      $plupload.uploader.settings.drop_element = $element[0];
    }
  };
});
