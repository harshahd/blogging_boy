import comments from "../comments.json";

export default (req,resp) => {
resp.status(200).json(comments);


};