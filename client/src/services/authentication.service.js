// ==============================================
// Authentication File:
// ==============================================

// Dependencies:
import api from "../api";

// Helpers:
import { handleResponse, authHeader } from "../helpers";

// Authentication Service:
class Authentication {
    constructor() {
  
        if (localStorage.getItem("currentUser")) {
            this.authenticated = true;
        } else {
            this.authenticated = false;
        }
    }
    
        async login(password) {
            try {
                const response = await api.post("/api/auth", {
                    password
                });
        
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("currentUser", JSON.stringify(response.data.data));
                this.authenticated = true;
        
                return true;
            } catch(e) {
                console.log(e);
                return false;
            }
    }
}

// Export Authentication:
export const authenticationService = new Authentication();