const express = require("express");
const mongoose = require("mongoose");
const qrcode = require("qrcode");
const bodyParser = require("body-parser");
const expressSession = require("express-session");
const passport = require("passport");
const localStrategy = require("passport-local");
const passportLocalMongoose = require("passport-local-mongoose");

mongoose.connect("mongodb://localhost/dhishna");

// const userRoutes = require("./routes/user.route");
const eventRoutes = require("./routes/event.route");
const wsRoutes = require("./routes/ws.route");
const exhibitionRoutes = require("./routes/exhibition.route");
const adminRoutes = require("./routes/admin.route");



// to work on registration
const Admin = require("./models/admin.model");
const User = require("./models/user.model");

const app = express();

app.use("/assets/css", express.static(__dirname + "/assets/css"));
app.use("/assets/js", express.static(__dirname + "/assets/js"));
app.use("/assets/img", express.static(__dirname + "/assets/img"));

app.set("view engine", "ejs");

// Config all requirements
app.use(expressSession({
    secret: "Enter a secret key here",
    resave: false,
    saveUninitialized: false
}));
app.use(bodyParser.urlencoded({extended : false}));
app.use(passport.initialize());
app.use(passport.session());

// config parent routes
// app.use("/", userRoutes); // not working //
app.use("/event", eventRoutes);
app.use("/workshop", wsRoutes);
app.use("/exhibition", exhibitionRoutes);
app.use("/SantyDance", adminRoutes);


// to work on registration

// for admin
passport.use(new localStrategy(Admin.authenticate()));

passport.serializeUser(Admin.serializeUser());
passport.deserializeUser(Admin.deserializeUser());

// for user
passport.use(new localStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// ===================================== static ======================================= //


// to load static pages

app.get("/", function(req, res) {
    console.log("home");
    res.render("home");
});

app.get("/about", function(req, res) {
    res.render("about");
});

app.get("/contact", function(req, res) {
    res.render("contact");
});

app.get("/outreach", function(req, res) {
    res.render("outreach");
});



// ===================================== auth ======================================== //



app.get("/profile", isLoggedIn, function(req, res) {
    qrcode.toDataURL(req.user.id, function(err, url) {
        let user = {user_ : req.user, qr : url};
        res.render("user/profile", {user : user});  
    });
});

// Register

app.get("/register", function(req, res) {
    res.render("user/register");
});

app.post("/register", function(req, res) {
    User.register(new User({
        // auth info
        username : req.body.username,

        // personal info
        name : req.body.name,
        phone : req.body.phone,
        inst : req.body.inst

    }), req.body.password, function(err, user) {
        if (err) {
            console.log(err);
            return res.render("user/register");
        }
        console.log("user created " + user.username);
        passport.authenticate("local")(req, res, function() {
            console.log("user authenticated");
            res.redirect("/profile");
        });
    });
});



// Login

app.get("/login", function(req, res) {
    var message = "LogIn Here!"
    if (req.user)
        message = "LogIn with another account?";
    res.render("user/login", {message : message});
});

app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}), function(req, res) {
    // final handler
});


// logout

app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
});


// middleware for cheking user auth
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}


// ============================================== payments ===================================== //


// pay button was clicked
app.get("/payment", function(req, res) {
    if (req.user)
        return res.redirect("/"); // instamojo
    res.redirect("/login"); // unauthorized user
});

// webhook
app.post("/payment", function(req, res) {
    console.log(req.body);
});

// redirect after success
app.get("/api", function(req, res) {
    console.log(req.query);
});



// ============================================================================================== //


app.listen(3000, function() {
    console.log("listening to port 3000");
});