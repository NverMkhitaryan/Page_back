const express = require("express");

const env = require("dotenv");
env.config();
const PORT = process.env.PORT;

const sequelize = require("./db");
const cors = require("cors");
const app = express();

const bookRouter = require("./routes/bookRouter");
const partnerRouter = require("./routes/partnerRouter");
const learningRouter = require("./routes/learningRouter");
const articleRouter = require("./routes/articleRouter");

app.use(cors());
app.use(express.json());
app.use("/api/book", bookRouter);
app.use("/api/partner", partnerRouter);
app.use("/api/learning", learningRouter);
app.use("/api/article", articleRouter);


const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();

        app.listen(PORT, ()=>{
            console.log("server started...")
        })
    } catch(err) {
        console.log(err);
    }
}
start();