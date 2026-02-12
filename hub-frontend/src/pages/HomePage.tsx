import { useEffect, useState } from "react";
import type { Category } from "../types/category.js";
import { fetchCategories } from "../api/categories.js";
import { CategoryCard } from "../components/CategoryCard";

export function HomePage() {
    // categories: the data we get back from /api/categories
    const [categories, setCategories] = useState<Category[]>([]);
    // loading: whether we are currently fetching data
    const [loading, setLoading] = useState(true);
    // error: store any error message if the fetch fails
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Define an async function inside useEffect (we can't make the effect itself async)
        async function loadCategories() {
            try {
                setLoading(true);
                setError(null);

                const data = await fetchCategories();
                setCategories(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : String(err));
            } finally {
                setLoading(false);
            }
        }

        // Call the async loader
        loadCategories();
    }, []); // Empty dependancy array so this runs only once on mount

    // Render branches based on loading / error / success
    if (loading) {
        return (
            <main style={{ padding: "2rem" }}>
                <h1>Home Lab Hub</h1>
                <p>Loading categories...</p>
            </main>
        );
    }

    if (error) {
        return (
            <main style={{ padding: "2rem" }}>
                <h1>Home Lab Hub</h1>
                <p style={{ color: "red" }}>Error: {error}</p>
            </main>
        );
    }

    return (
        <main style={{ padding: "2rem" }}>
            <h1 style={{ marginBottom: "0.5rem" }}>Home Lab Hub</h1>
            <p style={{ marginBottom: "1.5rem", color: "#ccc" }}>
                Select a category to explore your projects.
            </p>

            {/* All categories as a vertical list of cards for now */}
            <section>
                {categories.map((category) => (
                    <CategoryCard key={category.id} category={category} />
                ))}
            </section>
        </main>
    );
}