function addtckt(pnr){
    var ticket = firebase.database().ref('passenger');
    ticket.on('value', function(snapshot) {
      alert(JSON.stringify(snapshot.val()));
    });
}

main.controller("BarScanController", function($scope, $cordovaBarcodeScanner) {
    $scope.scanBarcode = function() {
        $cordovaBarcodeScanner.scan().then(function(imageData) {
            //alert(imageData.text);
			addtckt(imageData.text);
            console.log("Barcode Format -> " + imageData.format);
            console.log("Cancelled -> " + imageData.cancelled);
        }, function(error) {
            console.log("An error happened -> " + error);
        });
    };

});

main.controller("ticket", function($scope){
    $scope.enterid = function(){
        //alert($scope.ticketid);
		addtckt($scope.ticketid);
    };
});
