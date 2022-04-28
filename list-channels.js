const isp = require("@istreamplanet/isp");
var axios = require("axios").default;

let client_id = "client_id";
let client_secret = "client_secret";
let organization = "organization";

var options = {
  url: "https://istreamplanet.auth0.com/oauth/token",
  method: "POST",
  headers: { "content-type": "application/json" },
  data: {
    client_id: client_id,
    client_secret: client_secret,
    audience: "https://platform.dtc.istreamplanet.net/" + organization,
    grant_type: "client_credentials",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data.access_token);
    const accessToken = response.data.access_token;

    let defaultClient = isp.ApiClient.instance;
    // Configure OAuth2 access token for authorization: authcode
    let m2m = defaultClient.authentications["m2m"];
    m2m.accessToken = accessToken;

    let apiInstance = new isp.ChannelsApi();
    let opts = {
      pageSize: 100, // Number | Number of items to return
      cursor: "", // String | Current page cursor
    };
    apiInstance.listChannels(opts, (error, data, response) => {
      if (error) {
        console.error(error);
      } else {
        console.log("API called successfully. Returned data: ");
        for (const [key, value] of Object.entries(data)) {
          console.log(key, value);
        }
      }
    });
  })
  .catch(function (error) {
    console.error(error);
  });
