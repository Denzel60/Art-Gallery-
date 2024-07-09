export const logout = (req, res) => {
  req.logOut((err) => {
    if (err) {
      console.error("Error logging out:", err);
      return res.status(500).send("Error logging out");
    }
    res.clearCookie("connect.sid", { path: "/" });
    req.session.destroy(function (err) {
      if (err) {
        console.error("Error destroying session:", err);
        return res.status(500).send("Error logging out");
      }
      res.redirect("/");
    });
  });
};
