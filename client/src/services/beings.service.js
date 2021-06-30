// ==============================================
// Beings API call File:
// ==============================================

// Dependencies:
import api from "../api";

// Helpers:
import { getData, authHeader, handleResponse } from "../helpers";

// Conversation Service:
export const beingService = {
  getBeings,
  createBeing,
  deleteBeing
}

async function getBeings(query="") {
    return await getData(`/api/v1/beings?q=${query}`, {
        headers: authHeader
    });
}

async function createBeing(being) {
    try {
        const response = await api.post("/api/v1/beings", being, {
            headers: authHeader
        });

        const data = handleResponse(response);
        return data.data;
    } catch(e) {
        console.log(e);
    }
}

async function deleteBeing(_id) {
    try {
        const response = await api.delete("/api/v1/beings/" + _id, {
            headers: authHeader
        });
    } catch(e) {
        console.log(e);
    }
}