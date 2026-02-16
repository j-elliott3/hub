import { config } from "../config.js";
import { createCategory } from "../db/queries/categories";
import { parseInputs } from "./scriptHelpers";

type NewCategory = {
    id: string;
    name: string;
    description: string;
};

const args = process.argv.slice(2);
const inputs = parseInputs(args, "category");

const data: NewCategory = {
    id: inputs.id,
    name: inputs.name,
    description: inputs.description,
}

const category = await createCategory(data)

if (category === undefined) {
    console.log("Category already exists");
    process.exit(0);
}

console.log(category);
process.exit(0);