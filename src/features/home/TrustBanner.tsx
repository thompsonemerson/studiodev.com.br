import { HOME_STATS } from "@/content/home";

export function TrustBanner() {
  return (
    <section className="bg-blue-600 text-white py-12 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:divide-x divide-blue-500">
          {HOME_STATS.map((stat) => (
            <div key={stat.label} className="text-center px-4">
              <div className="text-3xl md:text-4xl font-extrabold mb-1">{stat.value}</div>
              <div className="text-sm font-semibold text-blue-200 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
