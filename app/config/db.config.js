module.exports = {
    HOST: "ep-odd-shape-aferz6ha-pooler.c-2.us-west-2.aws.neon.tech",
    USER: "neondb_owner",
    PASSWORD: "npg_wCc2PfyF3Zxr",
    DB: "neondb",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    }
}