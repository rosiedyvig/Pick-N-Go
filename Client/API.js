const serverURL = "http://192.168.0.211:3001";
//const socketURL = "http://192.168.0.211:3000";

//URL: 192.168.0.211:19008

const getAll = async () => {
  try {
    const response = await fetch(serverURL + "/matches");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error occurred during network request:", error);
  }
};

const postMatch = async (payload) => {
  try {
    const response = await fetch(serverURL + "/match", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.error("Error occurred on the Back End");
  }
};

const getLongLat = async (postcode) => {
  function PCF(str) {
    return str.replace(" ", "%20");
  }
  const help = PCF(postcode);

  try {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "8b2ed7a2a8mshf94a6c1acda4261p1bd64fjsn996641906e7a",
        "X-RapidAPI-Host": "locations-and-postcodes-uk.p.rapidapi.com",
      },
    };

    return (
      fetch(
        `https://locations-and-postcodes-uk.p.rapidapi.com/getLocationForPostcode?postcode=${help}`,
        options
      )
        // const result = options.json();
        // return result;
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          //console.log("this is from the API", response);
          return response;
        })
    );
  } catch (e) {
    console.error("Error occurred on the Back End");
  }
};

module.exports = { getAll, postMatch, getLongLat };
