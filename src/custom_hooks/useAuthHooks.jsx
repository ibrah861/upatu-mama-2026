import React, { useEffect, useState } from "react";
import api from "../utility/Axios";
import { Auth } from "../utility/AuthContext";
import { useContext } from "react";

export const useAuthentication = (url_endPoint) => {
  const token = localStorage.getItem("token");

  const { authResponse, setAuthResponse } = useContext(Auth);

  const user = async () => {
    try {
      const response = await api.get(url_endPoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setAuthResponse(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    user();
  }, []);
  return user;
};
