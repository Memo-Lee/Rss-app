import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const rssSchema = new Schema({
    versionID: {
        type: String,
    },
    pubDate:{
        type: String,
    },
    variantID:{
        type: String,
        unique:true
    },
}); 

const Apkrss = mongoose.model("apkrss",rssSchema);

export default Apkrss;
