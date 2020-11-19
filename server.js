import React, { Component } from "react";
const apiInsertPost = "http://localhost:2480/function/qoutes-db/addQoute";

async function insertNewPostToServer(params) {
  try {
    const fetch = window.fetch.bind(window);
    const username = "root";
    const password = "root";
    const token = Buffer.from(`${username}:${password}`, "utf8").toString(
      "base64"
    );
    const headers = {
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Basic ${token}`,
    };
    console.log(JSON.stringify(params));
    let response = await fetch(
      apiInsertPost,
      headers,

      {
        method: "POST",

        body: JSON.stringify(params),
      }
    );

    let responseJson = await response.json();
    return responseJson.result;
  } catch (e) {
    console.log(e);
  }
}
export { insertNewPostToServer };
