
export const trending = (req, res) => res.render("home", {pageTitle:"Home"});

export const search = (req, res) => res.send("Search");

export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
export const deleteVideo = (req, res) => {
    console.log(req.params);
    res.send("Delete Video");
};
export const upload = (req, res) => res.send("Upload");

