function addtckt(pnr){
    var db = firebase.database().ref("passenger").orderByChild("pnr").equalTo(pnr);
    db.on('value', function(snapshot) {
        let ticket = JSON.stringify(snapshot.val()[pnr]);
        //alert(ticket);
        //localStorage.setItem("temptickets",ticket);
        alert(localStorage.getItem(temptickets));

    db.off();
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


main.controller("locatbags",function($scope){
    $scope.checkpt = function(){
        firebase.database().ref("checkpoint").orderByChild("rfid").equalTo($scope.rfid);
    };
});
