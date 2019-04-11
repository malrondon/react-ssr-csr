import rp from 'request-promise';
import { GOOGLEAPIS_GEOLOCATE } from '../../shared/config';

const geolocation = (req, res) => {
  const options = {
    method: 'POST',
    uri: `https://www.googleapis.com/geolocation/v1/geolocate?key=${GOOGLEAPIS_GEOLOCATE}`,
    body: {},
    json: true,
  };

  return rp(options)
    .then(function(body) {
      return res.status(200).json(body.location);
    })
    .catch(function(err) {
      console.log(err);
    });
};

export default geolocation;
