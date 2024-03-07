const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

//"mongodb://127.0.0.1:27017/biblioteca"
mongoose.connect(process.env.MONGO_DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

const usuarioSchema = new mongoose.Schema({
    nombre: String,
    email: String
}, { collection: 'usuarios' });

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;