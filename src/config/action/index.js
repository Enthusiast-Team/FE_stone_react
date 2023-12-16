import { onValue, ref } from 'firebase/database';
import { database } from '../firebase';
// import { SET_ARTIKEL } from './actionTypes';

export const getDataAPI = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    const ArtikelRef = ref(database, "Artikel" );
    // Attach an event listener to listen for changes in the data
    onValue(ArtikelRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log('get data:', data)
        // Resolve the Promise with the retrieved Artikel
        const dataObject = [];
         Object.keys(snapshot.val()).map(key=>{
          dataObject.push({
          id : key,
          dataObject : snapshot.val()[key]
        })
     });
        dispatch({type: 'SET_ARTIKEL', value: dataObject})
        resolve("data:",data);

      } else {
        // Reject the Promise with an error message
        reject("No data found for the user");
      }
    });
  });
};

export const fetchArtikel = () => (dispatch) => {
  const artikelRef = ref(database, '/Artikel');

  onValue(artikelRef, (snapshot) => {
    const data = snapshot.val();
    const dataObject = Object.keys(data).map((key) => ({
      id: key,
      ...data[key],
    }));
    dispatch({ type: 'SET_ARTIKEL', value: dataObject });
  });
};








// // action.js
// import axios from 'axios';

// // Aksi untuk mengambil semua artikel
// export const fetchArtikel = () => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.get('http://localhost:5000/artikel');
//       dispatch({ type: 'SET_ARTIKEL', value: response.data });
//     } catch (error) {
//       console.error('Error fetching articles:', error);
//     }
//   };
// };

// // Aksi untuk mengambil artikel berdasarkan ID
// // actions.js
// export const fetchArtikelById = (id) => async (dispatch) => {
//   try {
//     const response = await fetch(`http://localhost:5000/artikel/${id}`);
//     const data = await response.json();

//     dispatch({
//       type: 'SET_SELECTED_ARTIKEL',
//       value: data,
//     });
//   } catch (error) {
//     console.error('Error fetching artikel by ID:', error);
//   }
// };


// export const uploadImage = (base64String) => async (dispatch) => {
//   try {
//     const response = await axios.post('http://localhost:5000/predict', {
//       message: base64String
//     }, {
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//     console.log(response)

//     dispatch({
//       type: 'UPLOAD_IMAGE_SUCCESS',
//       payload: response.data.data
//     });
//     console.log("berhasil terkirim")
//   } catch (error) {
//     dispatch({
//       type: 'UPLOAD_IMAGE_FAILURE',
//       payload: error.message
//     });
//     console.log(400)
//   }
// };

