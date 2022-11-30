let AddlistenersFunc = () => {
    let jVarLocalGoButtonid = document.getElementById("GoButtonid");
    let jVarLocalScanId = document.getElementById("ScanId");

    jVarLocalGoButtonid.addEventListener('click', () => {
        let jVarInsideScanValue = jVarLocalScanId.value;

        var hasTest = jVarInsideScanValue.includes("/");
        console.log("hasTest : ", hasTest);
        if (hasTest) {
            document.location = `../../../Completed/Scan/Scan.html?QrCode=${jVarInsideScanValue}`;
        } else {
            let jVarLocalScanAsArray = jVarInsideScanValue.split(":");
            let jVarLocalMobile = jVarLocalScanAsArray[0];
            let jVarLocalName = jVarLocalScanAsArray[1];

            document.location = `../Insert/Insert.html?MobileNumber=${jVarLocalMobile}&CustomerName=${jVarLocalName}`;

            
        };
    });
};

export { AddlistenersFunc }
