import React, { useEffect, useState } from "react";
import api from "../utility/Axios";

export const useAuthentication = (url) => {
  const token = localStorage.getItem("token");
  const [response, setResponse] = useState([]);
  //
  useEffect(() => {
    const response = api
      .get(url, {
        headers: {
          Authorization: `Bearer: ${token}`,
        },
      })
      .then((res) => {
        setResponse(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [url]);

  return response;
};
