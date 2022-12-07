import { StartFunc } from "../../../../Dal/Transactions/Bookings/PullFuncs/WithQrCodes.js";

let ShowAllFunc = async () => {
    let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

    let LocalDataFromJson = await StartFunc();
    let LocalSNo = 1;

    Object.entries(LocalDataFromJson.JsonData).forEach(
        ([key, value]) => {
            LocalReturnObject.JsonData[key] = value;
            LocalReturnObject.JsonData[key].SNo = LocalSNo;
            LocalSNo += 1;
        }
    );

    LocalReturnObject.KTF = true;

    return await LocalReturnObject;
};

let ShowAllFuncSortDesc = async () => {
    let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

    let LocalDataFromJson = await StartFunc();
    let LocalSNo = 1;
    let LocalKeys = Object.keys(LocalDataFromJson.JsonData);
    let LocalKeysAsNumbers = toNumbers(LocalKeys);
    let dscN = LocalKeysAsNumbers.sort((f, s) => s - f);

    dscN.forEach(element => {
        LocalReturnObject.JsonData[element] = LocalDataFromJson.JsonData[element];
        LocalReturnObject.JsonData[element].SNo = LocalSNo;
        LocalSNo += 1;
    });

    // Object.entries(LocalDataFromJson.JsonData).forEach(
    //     ([key, value]) => {
    //         LocalReturnObject.JsonData[key] = value;
    //         LocalReturnObject.JsonData[key].SNo = LocalSNo;
    //         LocalSNo += 1;
    //     }
    // );

    LocalReturnObject.KTF = true;
    console.log('LocalReturnObject : ', LocalReturnObject);
    return await LocalReturnObject;
};


const toNumbers = arr => arr.map(Number);


export { ShowAllFunc, ShowAllFuncSortDesc }