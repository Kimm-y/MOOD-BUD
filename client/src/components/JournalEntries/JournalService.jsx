import axios from 'axios';

const API_URL = 'http://localhost:8000/api/';

export const createJournalEntry = async (entry) => {
    try {
        console.log('Submitting journal entry:', entry);
        const response = await axios.POST(`${API_URL}journal-entries/`, { entry });
        console.log('API response:', response.data);
        return response.data;
    } catch (error) {
        console.error('Failed to create journal entry:', error);
        throw error;
    }
};

