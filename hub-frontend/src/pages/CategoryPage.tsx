import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Category } from "../types/category";
import type { Service } from "../types/service";
import { fetchCategoryById } from "../api/categories";
import { fetchServicesByCategory } from "../api/services";
import { ServiceCard } from "../components/ServiceCard";

export function CategoryPage() {
    // get the :categoryId from the URL and assert type safety
    const params = useParams<{ categoryId: string }>();
    const categoryId = params.categoryId;
    if (!categoryId) {
        throw new Error("Category ID is required");
    }
    const categoryIDSafe: string = categoryId;

    //category and services state
    const [category, setCategory] = useState<Category | null>(null);
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Define an async function inside useEffect (we can't make the effect itself async)
        async function loadCategoriesAndServices() {
            try {
                setLoading(true);
                setError(null);

                const [categoryData, servicesData] = await Promise.all([
                    fetchCategoryById(categoryIDSafe),
                    fetchServicesByCategory(categoryIDSafe),
                ]);

                setCategory(categoryData);
                setServices(servicesData);
            } catch (err) {
                setError(err instanceof Error ? err.message : String(err));
                setCategory(null);
                setServices([]);
            } finally {
                setLoading(false);
            }
        }

        loadCategoriesAndServices();
    }, [categoryId]); // CategoryId here so this reloads when the id is changed

    // Render branch: loading
    if (loading) {
        return (
            <main style={{ padding: "2rem" }}>
                <p>Loading category...</p>
            </main>
        );
    }

    // Render branch: error
    if (error) {
        return (
            <main style={{ padding: "2rem" }}>
                <p style={{ color: "red" }}>Error: {error}</p>
                <p>
                    <Link to="/" style={{ color: "#4ade80" }}>
                        Back to home
                    </Link>
                </p>
            </main>
        );
    }
    // type narrowed to Category
    if (!category) {
        return (
            <main style={{ padding: "2rem" }}>
            <p>Category not found.</p>
            </main>
        );
    }

    // Normal render: show category header + list of services
    return (
        <main style={{ padding: "2rem" }}>
            <p style={{ marginBottom: "0.5rem" }}>
                <Link to="/" style={{ color: "#4ade80"}}>
                    ← Back to home
                </Link>
            </p>

            <h1 style={{ margin: 0 }}>{category.name}</h1>
            <p style={{ margin: "0.5rem 0 1.5rem", color: "#ccc" }}>
                {category.description}
            </p>

            {services.length === 0 ? (
                <p>No services in this category yet.</p>
            ) : (
                <section>
                    {services.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </section>
            )}
        </main>
    );
}