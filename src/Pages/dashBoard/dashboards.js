import axios from 'axios';
const base= 'http://localhost:7000';


export const getBookFunction = async (genre) => {
   try{
        const response = await axios.get(`${base}/books/${genre}`)
        return response.data.data.results;
       } catch (error) {
        console.log(error);
       }
}

export const saveBook = async (item,id) => {
  try {
      const title = item.book.title ;
      const image = item.book.formats['image/jpeg']; 
      const author = item.book.authors[0].name;
      const category = 'Comedy'
      const response = await axios.post(`${base}/save-book`, {
        title,
        image,
        author,
        category,
        user:id
      });
      return response;
  } catch (error) {
      console.error('Error:', error);
  }
};

export const getSavedBook = async (id) => {
  try {
      const response = await axios.get(`${base}/saved-books/${id}`)
      return response.data.savedBook;
  } catch (error) {
      console.error('Error:', error);
  }
}

export const updateBookCategory = async (id, text) => {
   try {
       const change = await axios.patch(`${base}/update-bookCategory`,{
             id:id,
             newCategory:text
       })
       return change.message
   } catch (error) {
      console.log(error)
   }
}


export const getText = async (book) => {
    try {
        const response = await axios.post(`${base}/get-text`,{
          url:book
        });
        if (response.status !== 200) {
            throw new Error('Failed to fetch text content');
        }

        return response.data; // Assuming the response data directly contains the text content
    } catch (error) {
        console.error('Error fetching text:', error);
        return null; // Handle error gracefully or return appropriate response
    }
};


export const getChapter = (text) => {
  // Split the text into chapters based on the occurrence of the word "chapter"
  const chapters = text.split(/chapter/i);

  // Filter out any empty strings
  const filteredChapters = chapters.filter(chapter => chapter.trim() !== '');

  // Initialize array to hold chapter details
  const chapterDetails = [];

  // Iterate through filteredChapters and extract chapter number and first 50 letters
  filteredChapters.forEach((chapter, index) => {
    // Extract chapter number
    const chapterNumber = index + 1;

    // Extract first 50 letters
    const first50Letters = chapter.substring(0, 50);

    // Push the details as an object into the chapterDetails array
    chapterDetails.push({
      chapterNumber: chapterNumber,
      first50Letters: first50Letters
    });
  });

  return chapterDetails;
};


export const customStyles = {
    content: {
      top: '80%',
      left: '80%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '35%',
      height: '40%',
      backgroundColor: '#192E31',
      border:'none'
    },
    overlay: {
      backgroundColor: 'transparent', // Make the overlay transparent
    },
  };

  export const customStylesForBookModal = {
    content: {
      top: '90%',
      left: '45%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '658px',
      height: '966px',
      backgroundColor: '#192E31',
      border:'none'
    },
    overlay: {
      backgroundColor: 'black', // Make the overlay transparent
    },
  };