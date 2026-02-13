import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Service } from "../types/service";
import { fetchServiceById } from "../api/services";

export function ServicePage() {
    const params = useParams<{ serviceId: string }>();
    const serviceId = params.serviceId;
    if (!serviceId) {
        throw new Error("Service ID is required");
    }

    const serviceIdSafe: string = serviceId;

    const [service, setService] = useState<Service | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadService() {
            try {
                setLoading(true);
                setError(null);

                const serviceData = await fetchServiceById(serviceIdSafe);

                setService(serviceData);
            } catch (err) {
                setError(err instanceof Error ? err.message : String(err));
                setService(null);
            } finally {
                setLoading(false);
            }
        }

        loadService();
    }, [serviceIdSafe]);

    if (loading) {
        return (
            <main style={{ padding: "2rem" }}>
                <p>Loading service...</p>
            </main>
        );
    }

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

    if (!service) {
        return (
            <main style={{ padding: "2rem" }}>
                <p>Service not found.</p>
            </main>
        );
    }

    return (
        <main style={{ padding: "2rem" }}>
            <p style={{ marginBottom: "0.5rem" }}>
                <Link to="/" style={{ color: "#4ade80" }}>
                    ← Back to home
                </Link>
            </p>

            <h1 style={{ margin: 0 }}>{service.name}</h1>

            <p style={{ marginBottom: "0.5rem" }}>
                Status: {service.status}
            </p>
            <p style={{ marginBottom: "0.5rem" }}>
                Tech stack: {service.techStack}
            </p>
            <p style={{ marginBottom: "0.5rem" }}>
                {service.description}
            </p>

            <section>
                <h2>Details</h2>
                <p>{service.details}</p>
            </section>

            <a href={service.projectUrl} target="_blank" rel="noreferrer">
                Open project
            </a>
        </main>
    );
}