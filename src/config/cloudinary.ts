import cloudinary from "cloudinary";
import config from "./index";

const { cloud_name, api_key, api_secret } = config.cloudinary;

const connectCloudinary = () => {
  cloudinary.v2.config({
    cloud_name,
    api_key,
    api_secret
  })
}

export default connectCloudinary;