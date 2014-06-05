# [angular](https://angularjs.org)-[plupload](http://www.plupload.com/)

## Installation

1. `bower install --save L42y/angular-plupload`
2. including script file provided by `plupload` component into your application
3. including `angular-plupload.js` script file provided by this component into your application
4. add `l42y.plupload` as a module dependency to your application

## Usage

```js
angular.module('App', [
    'l42y.plupload'
]).controller('UploadCtrl', function (
) {
    this.options = {
        'url': 'https://up.qbox.me:443',
        'flash_swf_url': '/bower_components/plupload/js/Moxie.swf',
        init: {
            FileAdded: function () {
            },
            Error: function () {
            }
        }
    }
})
```


```html
<div plupload plupload-options="upload.options" plupload-drop-element ng-controller="UploadCtrl as upload">
    <button plupload-browse-button>Upload</button>
</div>
```

## License

[WTFPL](http://wtfpl.org)
