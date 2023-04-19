const serverURL = "http://192.168.0.228:3001";

const getAll = async () => {
  const response = await fetch(serverURL + "/matches");
  const data = await response.json();
  return data;
};

const postMatch = async (payload) => {
  const response = await fetch(serverURL + "/match", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "content-type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

module.exports = { getAll, postMatch };
