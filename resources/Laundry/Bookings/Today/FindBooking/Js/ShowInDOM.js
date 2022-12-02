import { FindBookingHtmlFunc } from "./HtmlFuns/FromTemplate.js";
import { ReturnBookingPKFromURLSearchParams } from "./urlSearchParams.js";
import { ToDOMBodyAsParts } from "./FindBooking.js";

let StartFunc = async ({ inData }) => {
    console.log("inData", inData);
    let jVarLocalFromHbs = await FindBookingHtmlFunc();

    let jVarLocalKCont1 = document.getElementById("KCont1");
    jVarLocalKCont1.innerHTML = jVarLocalFromHbs;

    LocalFuncCustomerDetails({
        inOrderNo: inData.OrderNo,
        inCustomerName: inData.CustomerName,
        inMobile: inData.Mobile,
        inGarmentsTotalPcs: inData.GarmentsTotalPcs,
        inWeight: inData.Weight,
        inAmount: inData.Amount,
    });

    LocalShowGarments({ inGarmentDetails: inData.GarmentDetails });
    LocalGarments1({ inGarmentDetails: inData.GarmentDetails });
    LocalGarments2({ inGarmentDetails: inData.GarmentDetails });


};

let LocalShowGarments = ({ inGarmentDetails }) => {

    // let jVarLocalGarments1 = document.getElementById("Garments1");

    // let jVarLocalGarments2 = document.getElementById("Garments2");
    // let jVarLocalGarments3 = document.getElementById("Garments3");
    // let jVarLocalGarments4 = document.getElementById("Garments4");
    // let jVarLocalGarments5 = document.getElementById("Garments5");
    // let jVarLocalGarments6 = document.getElementById("Garments6");
    // let jVarLocalGarments7 = document.getElementById("Garments7");
    // let jVarLocalGarments8 = document.getElementById("Garments8");
    // let jVarLocalGarments9 = document.getElementById("Garments9");
    // let jVarLocalGarments10 = document.getElementById("Garments10");

    // jVarLocalGarments1.value = inGarmentDetails["1"].Name;
    // jVarLocalGarments2.value = inGarmentDetails["2"].Name;
    // jVarLocalGarments3.value = inGarmentDetails["3"].Name;
    // jVarLocalGarments4.value = inGarmentDetails["4"].Name;
    // jVarLocalGarments5.value = inGarmentDetails["5"].Name;
    // jVarLocalGarments6.value = inGarmentDetails["6"].Name;
    // jVarLocalGarments7.value = inGarmentDetails["7"].Name;
    // jVarLocalGarments8.value = inGarmentDetails["8"].Name;
    // jVarLocalGarments9.value = inGarmentDetails["9"].Name;
    // jVarLocalGarments10.value = inGarmentDetails["10"].Name;



    // let jVarLocalPcs1 = document.getElementById("Pcs1");
    // let jVarLocalPcs2 = document.getElementById("Pcs2");
    // let jVarLocalPcs3 = document.getElementById("Pcs3");
    // let jVarLocalPcs4 = document.getElementById("Pcs4");
    // let jVarLocalPcs5 = document.getElementById("Pcs5");
    // let jVarLocalPcs6 = document.getElementById("Pcs6");
    // let jVarLocalPcs7 = document.getElementById("Pcs7");
    // let jVarLocalPcs8 = document.getElementById("Pcs8");
    // let jVarLocalPcs9 = document.getElementById("Pcs9");
    // let jVarLocalPcs10 = document.getElementById("Pcs10");




    // jVarLocalPcs1.value = inGarmentDetails["1"].Pcs;
    // jVarLocalPcs2.value = inGarmentDetails["2"].Pcs;
    // jVarLocalPcs3.value = inGarmentDetails["3"].Pcs;
    // jVarLocalPcs4.value = inGarmentDetails["4"].Pcs;
    // jVarLocalPcs5.value = inGarmentDetails["5"].Pcs;
    // jVarLocalPcs6.value = inGarmentDetails["6"].Pcs;
    // jVarLocalPcs7.value = inGarmentDetails["7"].Pcs;
    // jVarLocalPcs8.value = inGarmentDetails["8"].Pcs;
    // jVarLocalPcs9.value = inGarmentDetails["9"].Pcs;
    // jVarLocalPcs10.value = inGarmentDetails["10"].Pcs;

    //jVarLocalGarments1.focus();
};

let LocalGarments1 = ({GarmentDetails}) => {
    if ("1" in GarmentDetails) {
        let jVarLocalGarments1 = document.getElementById("Garments1");
        let jVarLocalPcs1 = document.getElementById("Pcs1");

        jVarLocalGarments1.value = inGarmentDetails["1"].Name;
        jVarLocalPcs1.value = inGarmentDetails["1"].Pcs;
    }
};
let LocalGarments2 = ({GarmentDetails}) => {
    if ("2" in GarmentDetails ) {
        let jVarLocalGarments2 = document.getElementById("Garments2");
        let jVarLocalPcs2 = document.getElementById("Pcs2");

        jVarLocalGarments2.value = inGarmentDetails["2"].Name;
        jVarLocalPcs2.value = inGarmentDetails["2"].Pcs;
    }
};

let LocalFuncCustomerDetails = ({ inOrderNo, inCustomerName, inMobile, inGarmentsTotalPcs, inWeight, inAmount }) => {
    let jVarLocalOrderNo = document.getElementById("OrderNo");
    jVarLocalOrderNo.value = inOrderNo;

    let jVarLocalCustomerName = document.getElementById("CustomerName");
    if (jVarLocalOrderNo !== null) jVarLocalCustomerName.value = inCustomerName;

    let jVarLocalMobile = document.getElementById("Mobile");
    jVarLocalMobile.value = inMobile;

    let jVarLocalGarmentsTotalPcs = document.getElementById("GarmentsTotalPcs");
    jVarLocalGarmentsTotalPcs.value = inGarmentsTotalPcs;

    let jVarLocalWeight = document.getElementById("Weight");
    jVarLocalWeight.value = inWeight;

    let jVarLocalAmount = document.getElementById("Amount");
    jVarLocalAmount.value = inAmount;

};

let FromUrlParams = async () => {
    let LocalFromReturnBookingPKFromURLSearchParams = await ReturnBookingPKFromURLSearchParams();
    console.log("LocalFromReturnBookingPKFromURLSearchParams : ", LocalFromReturnBookingPKFromURLSearchParams);

    await ToDOMBodyAsParts({ inBookingPK: LocalFromReturnBookingPKFromURLSearchParams.BookingPK });
};

export { StartFunc, FromUrlParams };