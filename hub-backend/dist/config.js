process.loadEnvFile();
function envOrThrow(key) {
    const value = process.env[key];
    if (!value) {
        throw new Error(`Environment variable ${key} is not set`);
    }
    return value;
}
const migrationConfig = {
    migrationsFolder: "./src/db/migrations",
};
export let config = {
    api: {
        port: Number(envOrThrow("PORT")),
    },
    db: {
        url: envOrThrow("DATABASE_URL"),
        migrationConfig: migrationConfig,
    },
};
