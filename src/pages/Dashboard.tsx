import Header from "../components/Header";
import SideNav from "../components/SideNav";
import Footer from "../components/Footer";

export default function Dashboard() {
  return (
    <div className="bg-background">
      <SideNav />
      <main className="ml-64 min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow p-gutter max-w-container-max mx-auto w-full">
          <section className="mb-lg">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-xs">Good Morning, John</h2>
            <p className="font-body-lg text-body-lg text-secondary">Here is an overview of your active interactions with SPF.</p>
          </section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md mb-lg">
            <div className="bg-surface-white border border-outline-variant rounded-xl p-md shadow-sm hover:shadow-md transition-all group">
              <div className="flex justify-between items-start mb-md">
                <div className="p-sm bg-primary-container rounded-lg text-white">
                  <span className="material-symbols-outlined" data-icon="pending_actions">pending_actions</span>
                </div>
                <span className="text-display-lg font-display-lg text-primary leading-none">2</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">Active Items</h3>
              <p className="font-body-sm text-body-sm text-secondary">Ongoing reports currently under investigation or review.</p>
              <a className="mt-md inline-flex items-center gap-xs text-primary font-label-lg group-hover:underline" href="#">
                View details <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
            <div className="bg-surface-white border-2 border-status-error/20 rounded-xl p-md shadow-sm hover:shadow-md transition-all group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-status-error"></div>
              <div className="flex justify-between items-start mb-md">
                <div className="p-sm bg-error-container rounded-lg text-status-error">
                  <span className="material-symbols-outlined" data-icon="priority_high">priority_high</span>
                </div>
                <span className="text-display-lg font-display-lg text-status-error leading-none">1</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">Action Required</h3>
              <p className="font-body-sm text-body-sm text-secondary">A pending payment or document submission requires your attention.</p>
              <a className="mt-md inline-flex items-center gap-xs text-status-error font-label-lg group-hover:underline font-bold" href="#">
                Resolve now <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
            <div className="bg-surface-white border border-outline-variant rounded-xl p-md shadow-sm hover:shadow-md transition-all group">
              <div className="flex justify-between items-start mb-md">
                <div className="p-sm bg-secondary-container rounded-lg text-on-secondary-container">
                  <span className="material-symbols-outlined" data-icon="history">history</span>
                </div>
                <span className="text-display-lg font-display-lg text-secondary leading-none">0</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">Recent Updates</h3>
              <p className="font-body-sm text-body-sm text-secondary">No new updates since your last visit 2 hours ago.</p>
              <a className="mt-md inline-flex items-center gap-xs text-primary font-label-lg group-hover:underline" href="#">
                View history <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </a>
            </div>
          </div>
          <section className="mb-xl">
            <div className="flex items-center justify-between mb-md">
              <h3 className="font-headline-md text-headline-md text-primary">Quick Actions</h3>
              <button className="text-primary font-label-lg flex items-center gap-xs hover:opacity-70">
                All Services <span className="material-symbols-outlined">apps</span>
              </button>
            </div>
            <div className="bento-grid">
              <div className="col-span-12 md:col-span-8 bg-primary-container rounded-xl p-lg text-white flex flex-col justify-between min-h-[320px] relative overflow-hidden group cursor-pointer shadow-lg hover:scale-[1.01] transition-transform">
                <div className="relative z-10">
                  <span className="bg-white/10 text-white border border-white/20 px-sm py-xs rounded-full font-label-md text-label-md inline-block mb-md uppercase tracking-wider">Most Used</span>
                  <h4 className="font-display-lg text-display-lg mb-sm">Report a Crime</h4>
                  <p className="font-body-lg text-body-lg opacity-80 max-w-md">Lodge a non-emergency police report for theft, vandalism, or lost property. Our automated system ensures rapid processing.</p>
                </div>
                <div className="relative z-10 flex gap-md mt-lg">
                  <button className="bg-white text-primary-container px-md py-sm rounded-lg font-bold flex items-center gap-xs hover:bg-surface-variant transition-colors">
                    Start Report <span className="material-symbols-outlined">launch</span>
                  </button>
                  <button className="bg-white/10 border border-white/20 text-white px-md py-sm rounded-lg font-bold hover:bg-white/20 transition-colors">
                    How it works
                  </button>
                </div>
                <div className="absolute right-[-40px] bottom-[-40px] opacity-10 group-hover:scale-110 transition-transform duration-700">
                  <span className="material-symbols-outlined text-[320px]" data-icon="shield">shield</span>
                </div>
              </div>
              <div className="col-span-12 md:col-span-4 grid grid-rows-2 gap-md">
                <div className="bg-surface-white border border-outline-variant rounded-xl p-md flex flex-col justify-center items-center text-center hover:bg-surface-container transition-all cursor-pointer group shadow-sm">
                  <div className="h-16 w-16 bg-secondary-container rounded-full flex items-center justify-center mb-md text-on-secondary-container group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[32px]" data-icon="verified_user">verified_user</span>
                  </div>
                  <h5 className="font-headline-sm text-headline-sm text-primary">Apply for Permit</h5>
                  <p className="font-label-md text-label-md text-secondary">Public assembly, liquor licenses & more.</p>
                </div>
                <div className="bg-surface-white border border-outline-variant rounded-xl p-md flex flex-col justify-center items-center text-center hover:bg-surface-container transition-all cursor-pointer group shadow-sm">
                  <div className="h-16 w-16 bg-surface-container-high rounded-full flex items-center justify-center mb-md text-primary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[32px]" data-icon="payments">payments</span>
                  </div>
                  <h5 className="font-headline-sm text-headline-sm text-primary">Traffic Fines</h5>
                  <p className="font-label-md text-label-md text-secondary">Check and pay your outstanding notices.</p>
                </div>
              </div>
              <div className="col-span-12 grid grid-cols-2 md:grid-cols-4 gap-md">
                <div className="bg-white p-md rounded-xl border border-outline-variant flex items-center gap-md hover:border-primary transition-all cursor-pointer shadow-sm">
                  <div className="p-sm bg-surface-container-low rounded-lg text-primary">
                    <span className="material-symbols-outlined" data-icon="description">description</span>
                  </div>
                  <div>
                    <h6 className="font-label-lg text-label-lg text-primary">Lost Property</h6>
                    <p className="text-[10px] text-secondary">Recover items</p>
                  </div>
                </div>
                <div className="bg-white p-md rounded-xl border border-outline-variant flex items-center gap-md hover:border-primary transition-all cursor-pointer shadow-sm">
                  <div className="p-sm bg-surface-container-low rounded-lg text-primary">
                    <span className="material-symbols-outlined" data-icon="security">security</span>
                  </div>
                  <div>
                    <h6 className="font-label-lg text-label-lg text-primary">ScamShield</h6>
                    <p className="text-[10px] text-secondary">Report scams</p>
                  </div>
                </div>
                <div className="bg-white p-md rounded-xl border border-outline-variant flex items-center gap-md hover:border-primary transition-all cursor-pointer shadow-sm">
                  <div className="p-sm bg-surface-container-low rounded-lg text-primary">
                    <span className="material-symbols-outlined" data-icon="map">map</span>
                  </div>
                  <div>
                    <h6 className="font-label-lg text-label-lg text-primary">Police Centers</h6>
                    <p className="text-[10px] text-secondary">Find nearest NPC</p>
                  </div>
                </div>
                <div className="bg-white p-md rounded-xl border border-outline-variant flex items-center gap-md hover:border-primary transition-all cursor-pointer shadow-sm">
                  <div className="p-sm bg-surface-container-low rounded-lg text-primary">
                    <span className="material-symbols-outlined" data-icon="emergency_share">emergency_share</span>
                  </div>
                  <div>
                    <h6 className="font-label-lg text-label-lg text-primary">Appeal Feedback</h6>
                    <p className="text-[10px] text-secondary">Submit reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-surface-container rounded-2xl overflow-hidden mb-xl flex flex-col md:flex-row shadow-sm">
            <div className="p-lg md:w-1/2 flex flex-col justify-center">
              <h3 className="font-headline-lg text-headline-lg text-primary mb-md">Stay Vigilant: Latest Security Advisories</h3>
              <p className="font-body-md text-body-md text-secondary mb-lg">The Singapore Police Force is alerting the public to new phishing variants targeting e-commerce sellers. Ensure you only communicate via official platform channels.</p>
              <div className="flex gap-md">
                <button className="bg-primary text-white px-md py-sm rounded-lg font-label-lg hover:bg-opacity-90 transition-all">Read More</button>
                <button className="text-primary font-label-lg border-b border-primary">View All Advisories</button>
              </div>
            </div>
            <div className="md:w-1/2 h-64 md:h-auto bg-cover bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAJtOxS7p8zIDVlkniS1xXdiHSNDCWuoWX31K2I20B2nq30tEAX6MyZ68E77ZR7hqYMe5qPnODwRnUnKqlghwML-Ki6bDK0h-oa-mPSLJ8gVUBledCWk1FhG2mBovpR1zQtF4EnUjhw7DjPGdogh1H8Q-5x5ZiK3caIMmvSJYaMwoVI3KtR1pV2hy9XLm_ueTAYGDh9SNXgkhIDUpxQNIHAzncc4TrxBEXthnBc2Y_211Fp4jaDGzFpy-bsrzZLve2YBxDyWxoJ3cOd')"}}></div>
          </section>
        </div>
        <Footer />
      </main>
    </div>
  );
}
