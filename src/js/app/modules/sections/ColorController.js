/* global angular */
angular.module('patternlib').controller('color', ($scope) => {

  $scope.colors = [
    {code: '#333333', name: 'Black regular', sass: 'black-regular'},
    {code: '#424242', name: 'Grey darker', sass: 'grey-darker'},
    {code: '#666666', name: 'Grey dark', sass: 'grey-dark'},
    {code: '#999999', name: 'Grey dark light', sass: 'grey-dark-light'},
    {code: '#eeeeee', name: 'Grey regular', sass: 'grey-regular'},
    {code: '#d3d3d3', name: 'Grey light', sass: 'grey-light'},
    {code: '#f2f2f2', name: 'White dark', sass: 'white-dark'},
    {code: '#ffffff', name: 'White regular', sass: 'white-regular'},
    
    
    
    {code: '#e74c3c', name: 'Red regular', sass: 'red-regular'},
    {code: '#3498db', name: 'Blue regular', sass: 'blue-regular'},
    {code: '#2ecc71', name: 'Green regular', sass: 'green-regular'},
    {code: '#1abc9c', name: 'Turquoise regular', sass: 'turquoise-regular'},
    {code: '#e67e22', name: 'Orange regular', sass: 'orange-regular'},
    {code: '#9b59b6', name: 'Purple regular', sass: 'purple-regular'},
    {code: '#E8C53A', name: 'Yellow regular', sass: 'yellow-regular'},
    {code: '#F7F1A0', name: 'Yellow extra regular', sass: 'yellow-extra-regular'}
  ];
});
