angular
    .module('regisafeApp')
    .controller('OrderCtrl', [
        '$scope',
        function ($scope) {
            $scope.akten = [{
                "id": 1,
                "name": "Ost-Alb Kreis",
                "nbr": "55-1",
                "description": "Lorem ipsum dolor sit amet dolor et amus del rei kennt"
            }, {
                "id": 2,
                "name": "LKA Karlsruhe",
                "nbr": "90-2",
                "description": "Lorem ipsum dolor sit amet dolor et amus del rei kennt"
            }, {
                "id": 3,
                "name": "Ludwigsburg",
                "nbr": "47-3",
                "description": "Lorem ipsum dolor sit amet dolor et amus del rei kennt"
            }, {
                "id": 4,
                "name": "Hintertupfingen",
                "nbr": "99-12",
                "description": "Lorem ipsum dolor sit amet dolor et amus del rei kennt"
            }];
        }
    ]);
