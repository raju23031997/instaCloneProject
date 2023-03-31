// const {GridFSBucket, MongoClient} = require("mongodb");
// const {GridFsStorage} = require("multer-gridfs-storage");
const express = require("express")
const multer = require("multer")
const router = express.Router()
const { GridFsStorage } = require("multer-gridfs-storage");

const instaCollection = require('../instaSchema/instaSchemaModule')

// const Storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, './uploads/')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.originalname)
//     }
// })

// const upload = multer({
//     storage: Storage
// })

// Creating uploads folder if not already present
// In "uploads" folder we will temporarily upload
// image before uploading to cloudinary
// if (!fs.existsSync("./uploads")) {
//     //     fs.mkdirSync("./uploads");
//     // }

    // // Multer setup
    // const storage = multer.diskStorage({
    //     destination: function (req, file, cb) {
    //         cb(null, "./uploads");
    //     },
    //     filename: function (req, file, cb) {
    //         cb(null, file.originalname);
    //     },
    // });

    // const upload = multer({ storage: storage });

    // // Cloudinary configuration
    // cloudinary.config({
    //     cloud_name: "dau2qcx4h",
    //     api_key: "689672716646259",
    //     api_secret: "Iw5z0lMrIAc_tOdYIYwNSvanb_U",
    // });

    router.post("/addPostInInsta", async (req, res) => {
        try {
            const { name, location, description, PostImage } = req.body // getting data  from  req.body
            // const getUserDataForAPI = new instaCollection({
            //     name: req.body.name,
            //     location: req.body.location,
            //     description: req.body.description,
            //     PostImage: {
            //         data: fs.readFileSync('./uploads/' + req.file.filename),
            //         contentType:"image/png"
            //     }
            // })
            const getUserDataForAPI = new instaCollection({ name, location, description, PostImage })
            const addDatatoDB = await getUserDataForAPI.save() // save the data in our DB 
            res.send(addDatatoDB)
            console.log(addDatatoDB)
            // getUserDataForAPI.save()
            // .then((res)=>{
            //     console.log("Image is Saved");
            // }).catch((err)=>{
            //     console.log(err);
            // })
            // res.send("Image is save successfully")
        } catch (error) {
            res.send(error)
        }
    })

    router.get("/PostView", async (req, res) => {
        const getAllUserData = await instaCollection.find()
        res.send(getAllUserData)
    })

    module.exports = router