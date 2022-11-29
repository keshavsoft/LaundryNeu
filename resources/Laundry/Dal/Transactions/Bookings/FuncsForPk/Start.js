import { StartFunc as PullFuncsStartFunc } from "../PullFuncs/Original.js";

let StartFunc = async () => {
    let LocalReturnObject = { KTF: false, KResult: "" };

    try {
        let LocalJsonFileName = "Bookings.json";

        // let LocalCustomersData = await Neutralino.filesystem.readFile(`./KData/JSON/2017/Data/Transactions/${LocalJsonFileName}`);
        // console.log("LocalCustomersData : ", LocalCustomersData);
        // let LocalCustomersDataAsJson = JSON.parse(LocalCustomersData);

        let LocalCustomersDataAsJson = await PullFuncsStartFunc();
        let LocalKeys = Object.keys(LocalCustomersDataAsJson);
        let LocalLastKey = LocalKeys[LocalKeys.length - 1];

        LocalReturnObject.KTF = true;
        LocalReturnObject.LastPk = parseInt(LocalLastKey);
    } catch (error) {
        console.log("error InsertFunc : ", error);
    };

    return await LocalReturnObject;
};

export { StartFunc };