import User from "../modal/UserModal.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
    try {
        console.log("Received request body:", req.body);
        const { fullname, email, password, repassword } = req.body;

        if (!fullname || !email || !password || !repassword) {
            console.log("Missing fields in request body");
            return res.status(400).json({ message: "All fields are required" });
        }

        // Validate that passwords match
        if (password !== repassword) {
            console.log("Passwords do not match");
            return res.status(400).json({ message: "Passwords do not match" });
        }

        // Check if the user already exists
        const user = await User.findOne({ email });
        if (user) {
            console.log("User already exists with email:", email);
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password
        const hashpassword = await bcryptjs.hash(password, 10);

        // Create a new user
        const createdUser = new User({
            fullname,
            email,
            password: hashpassword,
            repassword: hashpassword,
            // No need to save repassword; it's used only for validation
        });

        // Save the new user
        await createdUser.save();
        console.log("User created successfully:", createdUser);
        res.status(201).json({ message: "User Signup Successfully", User:{
            _id: createdUser._id,
            fullname: createdUser.fullname,
            email: createdUser.email
        } });
    } catch (error) {
        console.error("Error during signup:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Check if the password matches
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // If login is successful
        res.status(200).json({
            message: "Login Successful",
            user: {
                _id: user._id,
                fullname: user.fullname,
                email: user.email
            }
        });
    } catch (error) {
        console.log("error: " + error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

