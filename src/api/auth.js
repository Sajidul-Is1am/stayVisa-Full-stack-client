import axiosSecure from "."
// create User
export const saveUser = async user => {
    const currentUser = {
        email: user?.email,
        role: 'guest',
        status: 'Varified',
    }
    const {
        data
    } = await axiosSecure.put(`/users/${user?.email}`, currentUser)
    return data
}

// get Token from server
export const getToken = async email => {
    const { data } = await axiosSecure.post('/jwt', email)
    console.log('token recive form ', data);
    return data
}


// clear token form browser
export const clearToken = async () => {
    const { data } = await axiosSecure.get('/logout')
    console.log(data,"clear Cookie");
    return data
}