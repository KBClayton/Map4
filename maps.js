
$(document).ready(function() {
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      
    async function wait() {
        await sleep(1000);
    }
      
    wait().then(function(){

                var location_001={lat: 32.520387, lng: -97.624925}

                var point_001 = new google.maps.Marker({
                    position: location_001,
                    title: "Discharge Location"
                });
                point_001.setMap(map); 
                    
                var location_002={lat: 32.501725, lng: -97.626662}

                var point_002 = new google.maps.Marker({
                    position: location_002,
                    title: "15 acre lake on Fall Creek tributary"
                });
                point_002.setMap(map); 
                    
    })
});