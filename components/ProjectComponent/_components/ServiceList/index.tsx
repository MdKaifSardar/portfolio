import type { ProjectService } from "@/data/projects/types";

const ServiceList = ({ services }: { services: ProjectService[] }) => {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {services.map((service) => (
        <div
          key={service.title}
          className="rounded-3xl border border-white/10 bg-black/30 p-6"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            Service
          </p>
          <h3 className="mt-3 text-xl font-semibold text-white">
            {service.title}
          </h3>
          <p className="mt-3 text-sm text-white/70">{service.description}</p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {service.deliverables.map((deliverable) => (
              <li key={deliverable} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-purple"></span>
                {deliverable}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
