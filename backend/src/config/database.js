require('dotenv/config');

module.exports = {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    define: {
        timestampes: true, // Define duas colunas created_at e edited_at
        underscored: true, // Não define o padrão camel case e sim com underline
        underscoredAll: true
    }
};
