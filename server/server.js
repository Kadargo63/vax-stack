require("./app/routes/authRoutes")(app);
require("./app/routes/appointmentRoutes")(app);
require("./app/routes/userRoutes")(app);

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to application." });
});

app.use("/uploads", express.static("uploads"));

// for sync or migrate db
// { force:true } for alter table
// db.sequelize.sync();

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}. `);
});