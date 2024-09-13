import Data from "../modal/DataModal.js"; // Assuming this is the correct model import

export const Admission = async (req, res) => {
    try {
        console.log("Received request body:", req.body);
        const { coursename, studentname, fathername, cnic, dateofbirth, gender, phone, whatsapp, address, payment, tid } = req.body;

        // Validate that all fields are provided
        if (!coursename || !studentname || !fathername || !cnic || !dateofbirth || !gender || !phone || !whatsapp || !address || !payment || !tid) {
            console.log("Missing fields in request body");
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if the user already exists based on transaction ID (TID)
        const existingUser = await Data.findOne({ tid });
        if (existingUser) {
            console.log("User Transaction ID already exists:", tid);
            return res.status(400).json({ message: "User TID already exists" });
        }

        // Create a new entry for the admission form
        const createdData = new Data({
            coursename,
            studentname,
            fathername,
            cnic,
            dateofbirth,
            gender,
            phone,
            whatsapp,
            address,
            payment,
            tid
        });

        // Save the newly created data
        await createdData.save();
        console.log("Form submitted successfully:", createdData);

        // Return a response with the created data
        res.status(201).json({
            message: "Registered Successfully",
            Data: {
                _id: createdData._id,
                coursename: createdData.coursename,
                tid: createdData.tid
            }
        });
    } catch (error) {
        console.error("Error during form submission:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
