const getData = async (nombre)=>{
    const key = '30285645-15ef99a73781bfe8606a97aa9';

    const url = `https://pixabay.com/api/?key=${key}&q=${nombre}&per_page=20`;
    const res = await fetch(url)
    const total = await res.json()
    return total
};

export default getData