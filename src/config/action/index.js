import { onValue, ref } from 'firebase/database';
import { database } from '../firebase';

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


export const fetchArtikelById = (id) => async (dispatch) => {
  try {
    // Ganti 'artikel' dengan nama node atau path sesuai dengan struktur Firebase Realtime Database Anda
    const artikelRef = ref(database,`Artikel/${id}`);

    artikelRef.once('value', (snapshot) => {
      const data = snapshot.val();

      if (!data) {
        console.error('Artikel not found');
        return;
      }

      dispatch({
        type: 'SET_SELECTED_ARTIKEL',
        value: data,
      });
    });
  } catch (error) {
    console.error('Error fetching artikel by ID:', error);
  }
};
