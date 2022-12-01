import { FindBookingHtmlFunc } from "./HtmlFuns/FromTemplate.js";
import { ReturnBookingPKFromURLSearchParams } from "./urlSearchParams.js";
import { ToDOMBodyAsParts } from "./FindBooking.js";

let StartFunc = async ({ inData }) => {
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
};

let LocalShowGarments = ({ inGarmentDetails }) => {
    let jVarLocalGarments1 = document.getElementById("Garments1");
    
    jVarLocalGarments1.value = inGarmentDetails["1"].Name;
    //jVarLocalGarments1.focus();
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