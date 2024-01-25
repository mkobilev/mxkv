var app = angular.module('ufoctf2017', ['firebase', 'pascalprecht.translate']);


app.config(function($translateProvider) {
    $translateProvider.translations('en', {
        HEADLINE: 'Hello World!',
        TITLE: 'Hello',
        FOO: 'This is a paragraph.',
        BUTTON_LANG_EN: 'english',
        BUTTON_LANG_RU: 'russian'
    })
        .translations('ru', {
            HEADLINE: 'Привет, Мир!',
            TITLE: 'Привет',
            FOO: 'Это параграф',
            BUTTON_LANG_EN: 'английский',
            BUTTON_LANG_RU: 'русский'
        });

    $translateProvider.preferredLanguage('ru');

});

app.controller('Ctrl', function ($scope, $translate) {
    $scope.changeLanguage = function (key) {
        $translate.use(key);
    };
});


