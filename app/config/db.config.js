module.exports = {
    HOST: "ep-late-frog-afou7z2u-pooler.c-2.us-west-2.aws.neon.tech",
    USER: "neondb_owner",
    PASSWORD: "npg_qmo5KcV7vRMQ",
    DB: "neondb",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    }
}