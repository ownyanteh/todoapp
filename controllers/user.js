export const registerUser = (req, res, next) => {
    res.json('User Registered')
};

export const loginUser = (req, res, next) => {
    res.json("User logged in")
}; 

export const logoutUser = (req, res, next) => {
    res.json('User logged out')
};

export const updateProfile = (req, res, next) => {
    res.json ('profile updated successfully')
}
