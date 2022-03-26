# Kostal Piko JSON Flow
## Simple flow to query Kostal Piko Inverter using DxS

## Supported Inverters

All Kostal Piko and Piko BA Inverters with UI Version >= 6.00 are supported. To doublecheck if your own inverter is supported do a HTTP-Request and check for a valid JSON Response:

http://{IP-Adress}}/api/dxs.json?dxsEntries=16777984

Response should provide Inverter Name and some additional stuff:

```
{
   "dxsEntries":[
      {
         "dxsId":16777984,
         "value":"YOUR INVERTER NAME"
      }
   ],
   "session":{
      "sessionId":0,
      "roleId":0
   },
   "status":{
      "code":0
   }
}
```

### Setup

- add node to flow
- set inverter ip
- use trigger node with any payload as input to trigger query to inverter (e.g. every 10 secs)
- use payload in your flows

### Sample Payload

```
{
   "INVERTER_NAME":"GladderION",
   "INVERTER_SERIALNUMBER":"90525OGT00xxx",
   "YIELD_TOTAL":32965.03125,
   "FEED_IN_STATUS":true,
   "STATUS":3,
   "HOME_CONSUMPTION_PV":434.571533,
   "HOME_CONSUMPTION_BATTERY":0,
   "HOME_CONSUMPTION_GRID":299.860962,
   "HOME_CONSUMPTION_TOTAL":43230.886719,
   "HOME_CONSUMPTION_DAY":3611.577393,
   "FEED_IN_TIME":33919,
   "AUTONOMY_DEGREE_DAY":8.606232,
   "OWN_CONSUMPTION_RATE_TOTAL":58.314556,
   "AUTONOMY_DEGREE_TOTAL":44.466846,
   "HOME_TOTAL_POWER":734.432495,
   "BATTERY_SOC":10,
   "BATTERY_ABSOLUTE_CURRENT":0,
   "BATTERY_CURRENTDIRECTION":0,
   "YIELD_DAY":222.071976,
   "AC_P_TOTAL":434.571533,
   "COSINUS_PHI": 1.01,
   "OWN_CONSUMPTION_TOTAL":19221.90972,
   "OWN_CONSUMPTION_DAY": 222.071976,
   "OWN_CONSUMPTION_RATE_DAY": 100.0,
   "INVERTER_OPERATING_STATUS": "Einspeisen (MPP)",
   "HOME_OWN_CONSUMPTION_TOTAL": 19221.90972,
   "GRID_FREQUENZY": 50.24,
   "DC_I": 1.54521,
   "DC_P": 607.154,
}
```

**Values**

- INVERTER_NAME: Name of inverter
- INVERTER_SERIALNUMBER: Serialnumber of inverter
- YIELD_TOTAL: Total yield in kWh
- FEED_IN_STATUS: Is inverter feeding into grid
- HOME_CONSUMPTION_PV: current consumption directly from pv in W
- HOME_CONSUMPTION_BATTERY: current consumption directly from battery in W
- HOME_CONSUMPTION_GRID: current consumption directly from grid in W
- HOME_CONSUMPTION_TOTAL: overall Home consumption in kWh
- HOME_CONSUMPTION_DAY: todays overall home consomption in Wh
- FEED_IN_TIME: overall feed-in time in minutes
- AUTONOMY_DEGREE_DAY: todays grade of autarky in percentage
- OWN_CONSUMPTION_RATE_TOTAL: total rate of own consumption in percentage
- AUTONOMY_DEGREE_TOTAL: total grade of autarky in percentage
- HOME_TOTAL_POWER: current overall consumption in W
- BATTERY_SOC: current state of charge of battery in percentage
- BATTERY_ABSOLUTE_CURRENT: current current (lol) of battery without direction (absolute value)
- BATTERY_CURRENTDIRECTION: if value > 0: battery is *discharging* // if value <= 0: battery is *charging*
- YIELD_DAY: daily yield in kWh
- AC_P_TOTAL: current total available power of ac-side (includes any possible consumption except for battery charging since this happens on dc-side). great value to find out how much power is available for devices like washing machine etc at home. calculate like that: *available power = AC_P_TOTAL - HOME_CONSUMPTION_PV - HOME_CONSUMPTION_BATTERY
- COSINUS_PHI: cos phi of grid
- OWN_CONSUMPTION_TOTAL: overall own consumption in kWh
- OWN_CONSUMPTION_DAY: own consumption of day in kWh
- OWN_CONSUMPTION_RATE_DAY: own consumption rate in percentage
- INVERTER_OPERATING_STATUS: current status of inverter as localized string
- HOME_OWN_CONSUMPTION_TOTAL: total home own consumption
- GRID_FREQUENZY: grid frequency in Hz
- DC_I: current overall current of dc strings 
- DC_P: current overall power of dc strings

## Contact

Feel free to contact me: Patrick Moldenhauer <pm@smd-kiel.de>. Note that this Node is in very alpha version and could be much better for sure. Anyway - this node should work quite stable and is very fast too since DxS Endpoint can be queried quite frequently without bothering inverters comm-board too much.

## License

MIT

**Free Software, Hell Yeah!**