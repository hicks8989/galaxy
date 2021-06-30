// ==============================================
// Backend API:
// ==============================================

// Dependencies:
import axios from 'axios';

// Export Axios Base Instance:
export default axios.create({
    baseURL: "http://localhost:3001"
});