export const logout = (req, res) => {
  // Clear the session cookie
  req.session = null; // Deletes the cookie

  // Optionally, clear other cookies (e.g., 'connect.sid')
  res.clearCookie("connect.sid", { path: "/" });

  // Redirect to the homepage or any other desired page
  res.redirect("/");
};
