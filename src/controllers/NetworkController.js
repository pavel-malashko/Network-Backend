import NetworkSettings from '../models/NetworkModel';
import "@babel/polyfill";


class NetworkSettingsController {


    async index(req, res) {        
  
        try {

            let networkSettings = await NetworkSettings.find();
            res.json(networkSettings);

        }

        catch (error) {
            res.send(error);
        }
           
    }


    async update(req, res) {       

        let data = req.body,
            settings =  new NetworkSettings( {                        
                enthIP: data.enthIP, 
                enthMask: data.enthMask, 
                enthGateWay: data.enthGateWay, 
                enthPrefDNS: data.enthPrefDNS,
                enthAltDNS: data.enthAltDNS, 
                wirelNetName: data.wirelNetName, 
                wirelSecKey: data.wirelSecKey, 
                wirelIP: data.wirelIP, 
                wirelMask: data.wirelMask,
                wirelGateWay: data.wirelGateWay,
                wirelPrefDNS: data.wirelPrefDNS,
                wirelAltDNS: data.wirelAltDNS             
            });
       
            try {

                let err = settings.validateSync();

                if (err) {
                  res.send(err.message);
                }

                else {
                    
                    await NetworkSettings.updateOne({}, settings, {upsert: true}, function(err, doc) {
                        if (err) {
                            res.send(err);
                        }
                        res.json(doc);
                    })

                }

            }

            catch (error) {
                res.send(error);
            }   

    }
    
   
}

export default NetworkSettingsController;