module.exports = function(RED) {
    function KostalCanIUseNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            let available = 0;
            let result = {
                devicename: config.devicename,
                runable: false
            }
            if(!isNaN(msg.payload)){
                // payload is already a number
                available = msg.payload;
            } else {
                // payload seems to be kostal json ppayload
                if (msg.payload.INVERTER_NAME) {
                    available = msg.payload.AC_P_TOTAL - msg.payload.HOME_CONSUMPTION_PV - msg.payload.HOME_CONSUMPTION_BATTERY;
                }
            }

            if (available >= config.devicepower) {
                this.status({fill:"green",shape:"dot",text:"run now with green energy!"});
                result.runable = true;
            } else {
                this.status({fill:"red",shape:"dot",text:"not enough green energy :("});
            }
            node.send({ payload: result });
        });
    }
    RED.nodes.registerType("kostal-can-i-use",KostalCanIUseNode);
}