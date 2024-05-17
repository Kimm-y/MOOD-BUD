

const API_URL = 'http://localhost:8000/api/';

export const createMoodEntry = async (data) => {
    try {
        const response = await axios.post(`${API_URL}mood-entries/`, data);
        return response.data;
    } catch (error) {
        console.error('Failed to create mood entry:', error);
        throw error;
    }
};

//  similar functions for fetching, updating, and deleting mood entries to be added
