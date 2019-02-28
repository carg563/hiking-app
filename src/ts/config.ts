/* This app can be configured by changing the variables
in this file.

Webscene:
 - copy the webscene that I use: http://www.arcgis.com/home/item.html?id=d0580bb5df3840d384bda44b6ddeb54e
 - remove/add layers with additional data in the Layers group
 - remove/add basemap layers in the Basemap group

Data:
 - replace the trails service url
 - replace the attribute names to the ones in your service
 - remove attributes if they don't make sense for your data
 - Status has hard-coded values Open/Closed (whether the track is open or closed)
 - filterOptions are the attributes that will be used for filtering
    they can be removed in case they are not useful

Colors:
 - change the colors for visualizing the trails
 - for CSS colors check also the variables.scss file - selectedTrail is $orange

 Flickr API key:
 - your Flickr API key: https://www.flickr.com/services/api/
 - set it to an empty string if no Flickr images should be displayed
*/

export default {
  scene: {
      websceneItemId: "c4607630d50b416395dbde8fa0f8ec20"
  },
  data: {
      trailsServiceUrl: "https://services3.arcgis.com/imPqQAKxFWzdtlWr/arcgis/rest/services/RingOfFire/FeatureServer/0",
      trailAttributes: {
          id: "OBJECTID",
          name: "LegName",
          distance: "distance",
          gain: "elevationGain",
          loss: "elevationLoss",
          description: "description",
          summary: "summary",
          video: "video"
    },
    filterOptions: {
      singleChoice: [], // have string values
      range: [] // have numeric values
    }
  },
  colors: {
    defaultTrail: "#db5353",
      selectedTrail: "#B12216"
  },
    flickrApiKey: "28729577c128457844baf00993fdd94e"
};
