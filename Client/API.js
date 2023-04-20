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

//const postSignUpAlert = async () => {}

module.exports = { getAll, postMatch };
