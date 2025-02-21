
// get local storage ===>
    
const getLS = () => {

    const LS = localStorage.getItem('blog');
    return LS ? JSON.parse(LS) : [];
}

// save data to LS ====>>

const saveLS = (blog) =>{
    const saveItem = JSON.stringify(blog);
    localStorage.setItem('blog', saveItem);
}

// addToLS function to pick data IDs ===>

const addToLS = id=>{
    const addID =  getLS();
     // Prevent adding duplicate IDs
    
        addID.push(id);
        saveLS(addID); 
}

export { getLS, addToLS};

