import { getCategories } from "../db/queries/categories";
import { createService } from "../db/queries/services";
import { parseInputs } from "./scriptHelpers";
const args = process.argv.slice(2);
const inputs = parseInputs(args, "service");
const data = {
    categoryId: inputs.categoryId,
    name: inputs.name,
    description: inputs.description,
    techStack: inputs.techStack,
};
const categories = await getCategories();
if (!categories.some((c) => c.id === data.categoryId)) {
    console.log("Invalid category ID");
    process.exit(1);
}
const service = await createService(data);
console.log(service);
process.exit(0);
