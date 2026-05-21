import Header from "../components/Header";
import SideNav from "../components/SideNav";
import Footer from "../components/Footer";

export default function ApplyForServices() {
  return (
    <div className="bg-surface text-on-surface">
      <Header />
      <div className="flex max-w-container-max mx-auto min-h-screen">
        <SideNav />
        <main className="flex-grow p-gutter md:p-lg bg-surface">
          <div className="mb-lg">
            <nav aria-label="Breadcrumb" className="flex mb-base">
              <ol className="flex items-center space-x-2">
                <li><a className="text-secondary font-label-md text-label-md hover:text-primary" href="#">Dashboard</a></li>
                <li><span className="material-symbols-outlined text-outline text-[16px]">chevron_right</span></li>
                <li><span className="text-primary font-label-md text-label-md font-bold">Apply for Services</span></li>
              </ol>
            </nav>
            <h1 className="font-headline-lg text-headline-lg text-primary mb-xs">SPF e-Services</h1>
            <p className="font-body-md text-body-md text-secondary max-w-2xl">Access a wide range of Singapore Police Force services online. Find the service you need and start your application.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-lg mb-lg">
            <div className="flex-grow relative">
              <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline">search</span>
              <input className="w-full pl-lg pr-md py-sm bg-surface-white rounded-lg border border-outline-variant focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body-md text-body-md" placeholder="Search for a service e.g. 'Driving License'" type="text"/>
            </div>
            <div className="flex-shrink-0 flex gap-sm">
              <button className="w-full md:w-auto flex items-center justify-center gap-xs px-md py-sm border border-outline-variant rounded-lg hover:bg-surface-container transition-colors font-label-lg text-label-lg">
                <span className="material-symbols-outlined text-[20px]">sort</span>
                Sort by: Popularity
              </button>
              <button className="w-full md:w-auto flex items-center justify-center gap-xs px-md py-sm border border-outline-variant rounded-lg hover:bg-surface-container transition-colors font-label-lg text-label-lg">
                <span className="material-symbols-outlined text-[20px]">filter_list</span>
                Filter by Category
              </button>
            </div>
          </div>

          <div className="space-y-md">
            <div className="bg-surface-white border border-outline-variant rounded-xl shadow-sm p-md flex flex-col md:flex-row md:items-center justify-between gap-md hover:border-primary hover:shadow-lg transition-all">
              <div className="flex gap-md items-center">
                <div className="p-sm bg-secondary-container rounded-lg text-on-secondary-container">
                  <span className="material-symbols-outlined text-4xl">directions_car</span>
                </div>
                <div>
                  <h2 className="font-headline-sm text-headline-sm text-primary mb-xs">Provisional Driving License (PDL)</h2>
                  <p className="font-body-sm text-body-sm text-secondary max-w-lg">Apply for or renew your provisional driving license to start learning how to drive a motor vehicle.</p>
                </div>
              </div>
              <button className="w-full md:w-auto bg-primary text-white px-lg py-sm rounded-lg font-label-lg text-label-lg hover:bg-opacity-90 transition-opacity flex items-center justify-center gap-xs">
                Apply Now <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>

            <div className="bg-surface-white border border-outline-variant rounded-xl shadow-sm p-md flex flex-col md:flex-row md:items-center justify-between gap-md hover:border-primary hover:shadow-lg transition-all">
              <div className="flex gap-md items-center">
                <div className="p-sm bg-secondary-container rounded-lg text-on-secondary-container">
                  <span className="material-symbols-outlined text-4xl">description</span>
                </div>
                <div>
                  <h2 className="font-headline-sm text-headline-sm text-primary mb-xs">Certified True Copy of Police Report</h2>
                  <p className="font-body-sm text-body-sm text-secondary max-w-lg">Request an official, certified copy of a police report you have previously filed. Needed for insurance claims or legal purposes.</p>
                </div>
              </div>
              <button className="w-full md:w-auto bg-primary text-white px-lg py-sm rounded-lg font-label-lg text-label-lg hover:bg-opacity-90 transition-opacity flex items-center justify-center gap-xs">
                Apply Now <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>

            <div className="bg-surface-white border border-outline-variant rounded-xl shadow-sm p-md flex flex-col md:flex-row md:items-center justify-between gap-md hover:border-primary hover:shadow-lg transition-all">
              <div className="flex gap-md items-center">
                <div className="p-sm bg-secondary-container rounded-lg text-on-secondary-container">
                  <span className="material-symbols-outlined text-4xl">storefront</span>
                </div>
                <div>
                  <h2 className="font-headline-sm text-headline-sm text-primary mb-xs">Secondhand Goods Dealer's License</h2>
                  <p className="font-body-sm text-body-sm text-secondary max-w-lg">Register your business for a license to trade in secondhand articles as stipulated by the law.</p>
                </div>
              </div>
              <button className="w-full md:w-auto bg-primary text-white px-lg py-sm rounded-lg font-label-lg text-label-lg hover:bg-opacity-90 transition-opacity flex items-center justify-center gap-xs">
                Apply Now <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>

            <div className="bg-surface-white border border-outline-variant rounded-xl shadow-sm p-md flex flex-col md:flex-row md:items-center justify-between gap-md hover:border-primary hover:shadow-lg transition-all">
              <div className="flex gap-md items-center">
                <div className="p-sm bg-secondary-container rounded-lg text-on-secondary-container">
                  <span className="material-symbols-outlined text-4xl">celebration</span>
                </div>
                <div>
                  <h2 className="font-headline-sm text-headline-sm text-primary mb-xs">Public Entertainment License</h2>
                  <p className="font-body-sm text-body-sm text-secondary max-w-lg">Apply for a license to provide any public entertainment, such as a concert, festival, or sporting event.</p>
                </div>
              </div>
              <button className="w-full md:w-auto bg-primary text-white px-lg py-sm rounded-lg font-label-lg text-label-lg hover:bg-opacity-90 transition-opacity flex items-center justify-center gap-xs">
                Apply Now <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>

          <div className="mt-lg p-lg bg-surface-container-low rounded-xl border border-outline-variant flex flex-col items-center text-center">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">Can't find the service you're looking for?</h3>
              <p className="font-body-md text-body-md text-secondary mb-md max-w-xl">
                Our comprehensive service directory can help. Alternatively, contact our support team for assistance.
              </p>
              <div className="flex flex-wrap gap-md justify-center">
                <button className="flex items-center gap-xs text-primary font-bold hover:underline">
                  <span className="material-symbols-outlined">menu_book</span>
                  Full Service Directory
                </button>
                <button className="flex items-center gap-xs text-primary font-bold hover:underline">
                  <span className-="material-symbols-outlined">support_agent</span>
                  Contact Support
                </button>
              </div>
            </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
