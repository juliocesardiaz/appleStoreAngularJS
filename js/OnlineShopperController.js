onlineShopper.controller('OnlineShopperCtrl', function OnlineShopperCtrl($scope) {
  $scope.products = [
    {name: "Granny Smith", price: 1.50, image: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Granny_smith_closeup.jpg"},
    {name: "Fuji", price: 1.20, image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Fuji_apple.jpg/1600px-Fuji_apple.jpg"},
    {name: "Gala", price: 1.75, image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg"},
    {name: "Golden Delicious", price: 1.00, image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Golden_delicious_apple.jpg"},
    {name: "Red Delicious", price: 1.50, image: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Red_Delicious.jpg"},
    {name: "McIntosh", price: 1.35, image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/McIntosh_with_sticker_by_Lars_Zapf_2006-03-30_cropped.jpg"},
    {name: "Lobo", price: 1.10, image: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Lobo_cultivar.jpg"}
  ]
  $scope.cart = [];
  $scope.addToCart = function(product) {
    $scope.cart.push(product);
  };
  $scope.deleteFromCart = function(product) {
    var index = $scope.cart.indexOf(product);
    $scope.cart.splice(index, 1);
  };
  $scope.calculateTotal = function(){
    var total = 0;
    $scope.cart.forEach(function(product) {
      total += product.price;
    }, this);
    
    if(total > 25) {
      total *= 0.9;
    }
    return total;
  }
  $scope.cost = 0;
  $scope.calculateShipping = function(zip, total) {
    var cost = 0;
    if (total > 50) {
      cost = 0;
    } else if((zip <= 99999) && (zip >= 80000)) {
      cost += 2;
    } else if ((zip < 80000) && (zip >= 60000)) {
      cost += 5;
    } else if ((zip < 60000) && (zip >= 40000)) {
      cost += 8;
    } else if ((zip < 40000) && (zip >= 20000)) {
      cost += 11;
    } else if ((zip < 20000) && (zip >= 0)) {
      cost += 14;
    }
    $scope.cost = cost;
  }
});
