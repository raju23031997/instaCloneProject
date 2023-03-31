const express = require("express")
const mongoose = require("mongoose")
// const { isDate } = require("util/types")

// Creare Schema of the PT
const instaSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    PostImage: {
        type:String,
        required:true
    },
    // PostImage:{
    //     data:Buffer,
    //     contentType:String
    // },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
})

const instaCollection = mongoose.model("instaCollection", instaSchema)

module.exports = instaCollection