// action.js
import axios from 'axios';

// Aksi untuk mengambil semua artikel
export const fetchArtikel = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:5000/artikel');
      dispatch({ type: 'SET_ARTIKEL', value: response.data });
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };
};

// Aksi untuk mengambil artikel berdasarkan ID
// actions.js
export const fetchArtikelById = (id) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:5000/artikel/${id}`);
    const data = await response.json();

    dispatch({
      type: 'SET_SELECTED_ARTIKEL',
      value: data,
    });
  } catch (error) {
    console.error('Error fetching artikel by ID:', error);
  }
};


export const uploadImage = (base64String) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/predict', {
      message: base64String
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(response)

    dispatch({
      type: 'UPLOAD_IMAGE_SUCCESS',
      payload: response.data.data
    });
    console.log("berhasil terkirim")
  } catch (error) {
    dispatch({
      type: 'UPLOAD_IMAGE_FAILURE',
      payload: error.message
    });
    console.log(400)
  }
};

