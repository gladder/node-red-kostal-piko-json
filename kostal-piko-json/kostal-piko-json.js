var fetch = require('node-fetch')

const INVERTER_PARTNUMBER = { dxs: 16777472, label:"INVERTER_PARTNUMBER" };
const INVERTER_SERIALNUMBER = { dxs: 16777728, label:"INVERTER_SERIALNUMBER" };
const INVERTER_NAME = { dxs: 16777984, label:"INVERTER_NAME" };
const POWER_ID = { dxs: 16778240, label:"POWER_ID" };
const NUMBER_OF_STRINGS = { dxs: 16778496, label:"NUMBER_OF_STRINGS" };
const NUMBER_OF_PHASES = { dxs: 16778752, label:"NUMBER_OF_PHASES" };
const FW = { dxs: 16779265, label:"FW" };
const HW = { dxs: 16779266, label:"HW" };
const UI = { dxs: 16779267, label:"UI" };
const PAR = { dxs: 16779268, label:"PAR" };
const VERSION = { dxs: 16779521, label:"VERSION" };
const COUTRY_NAME = { dxs: 16779522, label:"COUTRY_NAME" };
const FEED_IN_STATUS = { dxs: 16779776, label:"FEED_IN_STATUS" };
const STATUS = { dxs: 16780032, label:"STATUS" };
const TYPE = { dxs: 16780544, label:"TYPE" };
const DC_I = { dxs: 33554688, label:"DC_I" };
const DC_P = { dxs: 33554944, label:"DC_P" };
const DC_I_STRING_1 = { dxs: 33555201, label:"DC_I_STRING_1" };
const DC_U_STRING_1 = { dxs: 33555202, label:"DC_U_STRING_1" };
const DC_P_STRING_1 = { dxs: 33555203, label:"DC_P_STRING_1" };
const DC_I_STRING_2 = { dxs: 33555457, label:"DC_I_STRING_2" };
const DC_U_STRING_2 = { dxs: 33555458, label:"DC_U_STRING_2" };
const DC_P_STRING_2 = { dxs: 33555459, label:"DC_P_STRING_2" };
const DC_I_STRING_3 = { dxs: 33555713, label:"DC_I_STRING_3" };
const DC_U_STRING_3 = { dxs: 33555714, label:"DC_U_STRING_3" };
const DC_P_STRING_3 = { dxs: 33555715, label:"DC_P_STRING_3" };
const BATTERY_I = { dxs: 33556225, label:"BATTERY_I" };
const BATTERY_U = { dxs: 33556226, label:"BATTERY_U" };
const BATTERY_T = { dxs: 33556227, label:"BATTERY_T" };
const BATTERY_CYCLES = { dxs: 33556228, label:"BATTERY_CYCLES" };
const BATTERY_SOC = { dxs: 33556229, label:"BATTERY_SOC" };
const BATTERY_CURRENTDIRECTION = { dxs: 33556230, label:"BATTERY_CURRENTDIRECTION" };
const BATTERY_ABSOLUTE_CURRENT = { dxs: 33556238, label:"BATTERY_ABSOLUTE_CURRENT" };
const AC_P_TOTAL = { dxs: 67109120, label:"AC_P_TOTAL" };
const AC_L1_I = { dxs: 67109377, label:"AC_L1_I" };
const AC_L1_U = { dxs: 67109378, label:"AC_L1_U" };
const AC_L1_P = { dxs: 67109379, label:"AC_L1_P" };
const AC_L2_I = { dxs: 67109633, label:"AC_L2_I" };
const AC_L2_U = { dxs: 67109634, label:"AC_L2_U" };
const AC_L2_P = { dxs: 67109635, label:"AC_L2_P" };
const AC_L3_I = { dxs: 67109889, label:"AC_L3_I" };
const AC_L3_U = { dxs: 67109890, label:"AC_L3_U" };
const AC_L3_P = { dxs: 67109891, label:"AC_L3_P" };
const POWER_LTD_EVU = { dxs: 67110144, label:"POWER_LTD_EVU" };
const GRID_FREQUENZY = { dxs: 67110400, label:"GRID_FREQUENZY" };
const COSINUS_PHI = { dxs: 67110656, label:"COSINUS_PHI" };
const HOME_CONSUMPTION_PV = { dxs: 83886336, label:"HOME_CONSUMPTION_PV" };
const HOME_CONSUMPTION_BATTERY = { dxs: 83886592, label:"HOME_CONSUMPTION_BATTERY" };
const HOME_CONSUMPTION_GRID = { dxs: 83886848, label:"HOME_CONSUMPTION_GRID" };
const HOME_L1_I = { dxs: 83887105, label:"HOME_L1_I" };
const HOME_L1_P = { dxs: 83887106, label:"HOME_L1_P" };
const HOME_OWN_CONSUMPTION_L1 = { dxs: 83887107, label:"HOME_OWN_CONSUMPTION_L1" };
const HOME_L2_I = { dxs: 83887361, label:"HOME_L2_I" };
const HOME_L2_P = { dxs: 83887362, label:"HOME_L2_P" };
const HOME_OWN_CONSUMPTION_L2 = { dxs: 83887363, label:"HOME_OWN_CONSUMPTION_L2" };
const HOME_L3_I = { dxs: 83887617, label:"HOME_L3_I" };
const HOME_L3_P = { dxs: 83887618, label:"HOME_L3_P" };
const HOME_OWN_CONSUMPTION_L3 = { dxs: 83887619, label:"HOME_OWN_CONSUMPTION_L3" };
const HOME_TOTAL_POWER = { dxs: 83887872, label:"HOME_TOTAL_POWER" };
const HOME_OWN_CONSUMPTION_TOTAL = { dxs: 83888128, label:"HOME_OWN_CONSUMPTION_TOTAL" };
const EMERGENCY_POWER_SUPPLY_SUPPORT = { dxs: 83888640, label:"EMERGENCY_POWER_SUPPLY_SUPPORT" };
const R_ISO = { dxs: 100663552, label:"R_ISO" };
const MAX_AC_HOLD = { dxs: 100664065, label:"MAX_AC_HOLD" };
const MAX_DC_HOLD = { dxs: 100664066, label:"MAX_DC_HOLD" };
const AUTO_IP = { dxs: 117440769, label:"AUTO_IP" };
const IP_1 = { dxs: 117440770, label:"IP_1" };
const IP_2 = { dxs: 117440771, label:"IP_2" };
const IP_3 = { dxs: 117440772, label:"IP_3" };
const IP_4 = { dxs: 117440773, label:"IP_4" };
const SUBNETMASK_1 = { dxs: 117440774, label:"SUBNETMASK_1" };
const SUBNETMASK_2 = { dxs: 117440775, label:"SUBNETMASK_2" };
const SUBNETMASK_3 = { dxs: 117440776, label:"SUBNETMASK_3" };
const SUBNETMASK_4 = { dxs: 117440777, label:"SUBNETMASK_4" };
const EXT_ROUTER = { dxs: 117440778, label:"EXT_ROUTER" };
const GATEWAY_1 = { dxs: 117440779, label:"GATEWAY_1" };
const GATEWAY_2 = { dxs: 117440780, label:"GATEWAY_2" };
const GATEWAY_3 = { dxs: 117440781, label:"GATEWAY_3" };
const GATEWAY_4 = { dxs: 117440782, label:"GATEWAY_4" };
const IP_DNS1_1 = { dxs: 117440783, label:"IP_DNS1_1" };
const IP_DNS1_2 = { dxs: 117440784, label:"IP_DNS1_2" };
const IP_DNS1_3 = { dxs: 117440785, label:"IP_DNS1_3" };
const IP_DNS1_4 = { dxs: 117440786, label:"IP_DNS1_4" };
const IP_DNS2_1 = { dxs: 117440787, label:"IP_DNS2_1" };
const IP_DNS2_2 = { dxs: 117440788, label:"IP_DNS2_2" };
const IP_DNS2_3 = { dxs: 117440789, label:"IP_DNS2_3" };
const IP_DNS2_4 = { dxs: 117440790, label:"IP_DNS2_4" };
const ADDRESS = { dxs: 117441025, label:"ADDRESS" };
const PRELOAD = { dxs: 117441026, label:"PRELOAD" };
const TERMINATION = { dxs: 117441027, label:"TERMINATION" };
const LANGUAGE_MENU = { dxs: 134217985, label:"LANGUAGE_MENU" };
const INVERTER_OPERATING_STATUS = { dxs: 134217989, label:"INVERTER_OPERATING_STATUS" };
const LANGUAGE_WEBINTERFACE = { dxs: 134218241, label:"LANGUAGE_WEBINTERFACE" };
const PRESENTERROR1 = { dxs: 134218496, label:"PRESENTERROR1" };
const PRESENTERROR2 = { dxs: 134218752, label:"PRESENTERROR2" };
const ANALOGINPUT_CH1 = { dxs: 167772417, label:"ANALOGINPUT_CH1" };
const ANALOGINPUT_CH2 = { dxs: 167772673, label:"ANALOGINPUT_CH2" };
const ANALOGINPUT_CH3 = { dxs: 167772929, label:"ANALOGINPUT_CH3" };
const ANALOGINPUT_CH4 = { dxs: 167773185, label:"ANALOGINPUT_CH4" };
const FEED_IN_TIME = { dxs: 251658496, label:"FEED_IN_TIME" };
const YIELD_TOTAL = { dxs: 251658753, label:"YIELD_TOTAL" };
const YIELD_DAY = { dxs: 251658754, label:"YIELD_DAY" };
const HOME_CONSUMPTION_TOTAL = { dxs: 251659009, label:"HOME_CONSUMPTION_TOTAL" };
const HOME_CONSUMPTION_DAY = { dxs: 251659010, label:"HOME_CONSUMPTION_DAY" };
const OWN_CONSUMPTION_TOTAL = { dxs: 251659265, label:"OWN_CONSUMPTION_TOTAL" };
const OWN_CONSUMPTION_DAY = { dxs: 251659266, label:"OWN_CONSUMPTION_DAY" };
const OWN_CONSUMPTION_RATE_DAY = { dxs: 251659278, label:"OWN_CONSUMPTION_RATE_DAY" };
const AUTONOMY_DEGREE_DAY = { dxs: 251659279, label:"AUTONOMY_DEGREE_DAY" };
const OWN_CONSUMPTION_RATE_TOTAL = { dxs: 251659280, label:"OWN_CONSUMPTION_RATE_TOTAL" };
const AUTONOMY_DEGREE_TOTAL = { dxs: 251659281, label:"AUTONOMY_DEGREE_TOTAL" };
const SYSTEM_PROPERTIES_BC = { dxs: 16780288, label:"SYSTEM_PROPERTIES_BC" };
const SYSTEM_BITMASK_BATTERY = { dxs: 8192, label:"SYSTEM_BITMASK_BATTERY" };
const SYSTEM_BITMASK_SENSOR = { dxs: 16384, label:"SYSTEM_BITMASK_SENSOR" };

module.exports = function(RED) {
    function KostalPikoJsonNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            
            const queryDxs = [
                INVERTER_NAME, 
                INVERTER_SERIALNUMBER,
                YIELD_TOTAL, 
                FEED_IN_STATUS, 
                HOME_CONSUMPTION_PV, 
                HOME_CONSUMPTION_BATTERY, 
                HOME_CONSUMPTION_GRID, 
                HOME_CONSUMPTION_TOTAL, 
                HOME_CONSUMPTION_DAY,
                FEED_IN_TIME,
                AUTONOMY_DEGREE_DAY,
                OWN_CONSUMPTION_RATE_TOTAL,
                AUTONOMY_DEGREE_TOTAL,
                HOME_TOTAL_POWER,
                BATTERY_SOC,
                BATTERY_ABSOLUTE_CURRENT,
                BATTERY_CURRENTDIRECTION,
                YIELD_DAY,
                YIELD_TOTAL,
                AC_P_TOTAL,
                COSINUS_PHI,
                OWN_CONSUMPTION_TOTAL,
                OWN_CONSUMPTION_DAY,
                OWN_CONSUMPTION_RATE_DAY,
                INVERTER_OPERATING_STATUS,
                HOME_OWN_CONSUMPTION_TOTAL,
                GRID_FREQUENZY,
                DC_I,
                DC_P
            ];


            const url = "http://{IP}/api/dxs.json?".replace("{IP}", config.deviceip) + (queryDxs.map(x => "dxsEntries="+x.dxs).join("&"));
                        
            let settings = { method: "Get", timeout: config.timeout };
            fetch(url, settings)
                .then((res) => {
                    if (!res.ok) {
                        node.error("Request to inverter " + config.deviceip + " failed!");
                        node.status({fill:"red",shape:"dot",text:"communication failed :("});
                    }
                    return res.json()
                })
                .then((json) => {
                    //node.error(json);
                    let result = {};
                    queryDxs.forEach((el) => {
                        let item = json.dxsEntries.find(item => {
                            return item.dxsId == el.dxs
                        });
                        if (item) {
                            result[el.label] = item.value;
                        } else {
                            result[el.label] = null;
                        }
                    });
                    node.send({ payload: result });
                    node.status({fill:"green",shape:"dot",text:result[INVERTER_OPERATING_STATUS.dxs]});
                }).catch(err => node.status({fill:"red",shape:"dot",text:"communication failed :("}));
        });
    }
    RED.nodes.registerType("kostal-piko-json",KostalPikoJsonNode);
}