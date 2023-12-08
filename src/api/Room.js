import axiosSecure from "."


// get all rooms data
export const getAllRooms = async () => {
    const {
        data
    } = await axiosSecure('/rooms');
    return data
}
// get single rooms data
export const getSingleRoom = async (id) => {
    const {
        data
    } = await axiosSecure(`/room/${id}`);
    return data
}