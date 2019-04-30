import mongoose, { Schema } from 'mongoose';


const NetworkSchema = new Schema(
    
    {
        _id: { type: Number, match: /^\d+/ },
        enthIP: {type: String},
        enthMask: {type: String, required: true},
        enthGateWay: {type: String},  
        enthPrefDNS: {type: String, required: true},  
        enthAltDNS: {type: String}, 
        wirelNetName: {type: Array, required: true}, 
        wirelSecKey: {type: String, required: true}, 
        wirelIP: {type: String, required: true},
        wirelMask: {type: String, required: true},
        wirelGateWay: {type: String},  
        wirelPrefDNS: {type: String, required: true},  
        wirelAltDNS: {type: String},                
    },

);



const NetworkSettings =  mongoose.model('NetworkSettings', NetworkSchema);

export default NetworkSettings;