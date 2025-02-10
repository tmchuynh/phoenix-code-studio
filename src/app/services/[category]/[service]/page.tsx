import { ServiceInfo, ServiceItem } from "@/lib/interfaces";
import { useEffect, useState } from "react";

type ServicePageProps = {
  params: { category: string; service: string };
};

export default async function ServicePage({ params }: ServicePageProps) {
  const { category, service } = params;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [serviceData, setServiceData] = useState<ServiceInfo | null>(null);

  useEffect(() => {
    if (!category || !service) return;

    async function fetchServices() {
      try {
        const response = await fetch(`/api/services/${category}/${service}`);
        if (!response.ok) {
          throw new Error("Services post not found");
        }
        const data = (await response.json()) as ServiceInfo;
        setServiceData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setLoading(false);
      }
    }

    fetchServices();
  }, [category, service]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-600">Error: {error}</div>;
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        {serviceData?.title ?? service.replace(/-/g, " ")}
      </h1>
      <p className="mb-4">{serviceData?.description}</p>

      {/* Render other fields as needed */}
      <div className="mt-4">
        <p>
          <strong>Category:</strong> {serviceData?.category}
        </p>
        <p>
          <strong>Service:</strong> {serviceData?.service}
        </p>
      </div>
    </main>
  );
}
