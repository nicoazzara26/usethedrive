var GoogleTokenProvider = require("refresh-token").GoogleTokenProvider;

const CLIENT_ID = "970716627235-q0v09ijf5orac7u8ul03c0uariq45f23.apps.googleusercontent.com";
const CLIENT_SECRET = "UEbIYgDtmlbIEk1m9rqCtXvX";
const REFRESH_TOKEN = "1/T2M2Nm0FMQTZkskcvEDt2P48bdVnCbdRAQX5XQYekkw";

var tokenProvider = new GoogleTokenProvider({
  'refresh_token' : REFRESH_TOKEN,
  'client_id' : CLIENT_ID,
  'client_secret' : CLIENT_SECRET
});

tokenProvider.getToken(function(err, access_token){
  console.log("Access Token=", token);
});
