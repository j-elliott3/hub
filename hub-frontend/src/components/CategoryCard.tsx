import type { Category } from "../types/category.js";
import { Link } from "react-router-dom";

// Props: a single Category object to display as a tile.
interface CategoryCardProps {
  category: Category;
};

export function CategoryCard({ category }: CategoryCardProps) {
    // We'll link the whole card to /categories/{id}, the category page route.
    const { id, name, description } = category;

    return (
        <Link
            to={`/categories/${id}`}
            style={{
                // Move to CSS later
                display: "block",
                padding: "1rem",
                margin: "0.5rem 0",
                borderRadius: "1px solid #ccc",
                textDecoration: "none",
                color: "inherit",
                backgroundColor: "#111",
            }}
        >
            <h2 style={{ margin: "0 0 0.5rem", fontSize: "1.25rem" }}>{name}</h2>
            <p style={{ margin: 0, color: "#ccc" }}>{description}</p>
        </Link>
    );
}