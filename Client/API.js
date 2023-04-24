const serverURL = "http://192.168.0.211:3001";

//MATCHES
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

const deleteMatchfromDB = async (payload) => {
  try {
    await fetch(serverURL + "/match", {
      method: "DELETE",
    });
    return true;
  } catch (e) {
    console.error("Error occurred during network request:", error);
  }
};

//USERS
const findUser = async (details) => {
  try {
    //console.log("details are", details);
    const response = await fetch(serverURL + `/user/${details}`);
    const data = await response.json();
    //console.log(data);
    return data;
  } catch (error) {
    console.error("Error occurred during network request:", error);
  }
};

const postUser = async (payload) => {
  try {
    const response = await fetch(serverURL + "/user", {
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

//POSTCODE TO LONG AND LAT
const getLongLat = async (postcode) => {
  function PCF(str) {
    return str.replace(" ", "%20");
  }
  const help = PCF(postcode);

  try {
    const options = {
      method: "GET",
      headers: {
        "content-type": "application/octet-stream",
        "X-RapidAPI-Key": "8b2ed7a2a8mshf94a6c1acda4261p1bd64fjsn996641906e7a",
        "X-RapidAPI-Host": "locations-and-postcodes-uk.p.rapidapi.com",
      },
    };

    return fetch(
      `https://locations-and-postcodes-uk.p.rapidapi.com/getLocationForPostcode?postcode=${help}`,
      options
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log("this is from the API", response);
        return response;
      });
  } catch (e) {
    console.error("Error occurred on the Back End");
  }
};

module.exports = {
  getAll,
  postMatch,
  deleteMatchfromDB,
  getLongLat,
  postUser,
  findUser,
};
