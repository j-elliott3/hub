type ColumnType = "category" | "service"

export function parseInputs(args: string[], columnType: ColumnType) {
    const parsedInputs: Record<string, string> = {};
    
    for (const arg of args) {
        const [key, value] = arg.split("=");
        if (!value) {
            errorBasedOnColumn(columnType);
        }
        if (key.startsWith("--")) {
            const cleanKey = key.slice(2) // row name
            parsedInputs[cleanKey] = value;
        }
    }
    valueCheck(parsedInputs, columnType);
    return parsedInputs;
}

function errorBasedOnColumn(columnType: ColumnType) {
    if (columnType === "category") {
        console.error("Usage: npm run add:category -- --id=<id> --name=<name> --description=<description>");
        process.exit(1);
    }
    if (columnType === "service") {
        console.error("Usage: npm run add:service -- --categoryId=<categoryId> --name=<name> --description=<description> --techStack=<techStack>");
        process.exit(1);
    }
}

function valueCheck(inputs: Record<string, string>, columnType: ColumnType) {
    if (columnType === "category") {
        if (!inputs.id || !inputs.name || !inputs.description) {
            errorBasedOnColumn(columnType);
        }
    }
    if (columnType === "service") {
        if (!inputs.categoryId || !inputs.name || !inputs.description || !inputs.techStack) {
            errorBasedOnColumn(columnType)
        }
    }
}