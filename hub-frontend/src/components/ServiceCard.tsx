import type { Service } from "../types/service";
import { Link } from "react-router-dom";

interface ServiceCardProps {
    service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
    const { id, name, description, status } = service;

    const statusColor =
        status === "online" ? "#4ade80" : status === "planned" ? "#facc15" : "#f87171";

    return (
        <Link
            to={`/services/${id}`}
            style={{
                display: "block",
                padding: "1rem",
                margin: "0.5rem 0",
                borderRadius: "0.5rem",
                border: "1px solid #333",
                textDecoration: "none",
                color: "inherit",
                backgroundColor: "#111",
            }}
        >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2 style={{ margin: 0, fontSize: "1.1rem" }}>{name}</h2>
                <span
                    style={{
                        padding: "0.1rem 0.5rem",
                        borderRadius: "999px",
                        fontSize: "0.8rem",
                        backgroundColor: statusColor,
                        color: "#000",
                        alignSelf: "center",
                    }}
                >
                    {status.toUpperCase()}
                </span>
            </div>
            <p style={{ margin: "0.5rem 0 0", color: "#ccc" }}>{description}</p>
        </Link>
    );
}