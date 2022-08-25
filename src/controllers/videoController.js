export const trending = (req,res) => {
    const videos = [
        {
            title: "First Video",
            rating: 5,
            comments: 2,
            createdAt: "2 minutes ago",
            views: 60,
            id: 1,
        },
        {
            title: "Second Video",
            rating: 5,
            comments: 2,
            createdAt: "2 minutes ago",
            views: 60,
            id: 1,
        },
        {
            title: "Third Video",
            rating: 5,
            comments: 2,
            createdAt: "2 minutes ago",
            views: 60,
            id: 1,
        }
    ];
    return res.render("home", {pageTitle: "Home", videos});
}
export const watch = (req,res) => res.render("watch");
export const edit = (req,res) => res.render("edit");
export const search = (req,res) => res.send(`search video`);
export const upload =(req,res)=> res.send(`upload video`);
export const deleteVideo =(req,res)=> res.send(`delete video`);