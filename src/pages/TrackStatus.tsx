import Header from "../components/Header";
import SideNav from "../components/SideNav";
import Footer from "../components/Footer";

export default function TrackStatus() {
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
                <li><span className="text-primary font-label-md text-label-md font-bold">Check Status</span></li>
              </ol>
            </nav>
            <h1 className="font-headline-lg text-headline-lg text-primary mb-xs">Check Status</h1>
            <p className="font-body-md text-body-md text-secondary">Track the real-time progress of your applications and incident reports.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-md mb-lg">
            <div className="bg-surface-white p-md border border-outline-variant rounded-xl shadow-sm">
              <p className="font-label-md text-label-md text-secondary uppercase tracking-wider mb-xs">Active Tasks</p>
              <div className="flex items-end justify-between">
                <span className="font-display-lg text-display-lg text-primary">03</span>
                <span className="material-symbols-outlined text-primary text-[32px]">pending_actions</span>
              </div>
            </div>
            <div className="bg-surface-white p-md border border-outline-variant rounded-xl shadow-sm">
              <p className="font-label-md text-label-md text-secondary uppercase tracking-wider mb-xs">Action Required</p>
              <div className="flex items-end justify-between">
                <span className="font-display-lg text-display-lg text-status-error">01</span>
                <span className="material-symbols-outlined text-status-error text-[32px]">priority_high</span>
              </div>
            </div>
            <div className="bg-surface-white p-md border border-outline-variant rounded-xl shadow-sm">
              <p className="font-label-md text-label-md text-secondary uppercase tracking-wider mb-xs">Completed</p>
              <div className="flex items-end justify-between">
                <span className="font-display-lg text-display-lg text-status-success">12</span>
                <span className="material-symbols-outlined text-status-success text-[32px]">task_alt</span>
              </div>
            </div>
            <div className="bg-primary-container p-md border border-primary-container rounded-xl shadow-sm relative overflow-hidden group">
              <div className="relative z-10">
                <p className="font-label-md text-label-md text-on-primary-container uppercase tracking-wider mb-xs">New Request</p>
                <p className="font-body-sm text-body-sm text-on-primary-container opacity-80 mb-md">Need to submit a new inquiry?</p>
                <button className="bg-surface-white text-primary px-sm py-xs rounded-lg font-label-md text-label-md font-bold group-hover:shadow-md transition-shadow">Create Now</button>
              </div>
              <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-[120px] text-white opacity-5 rotate-12">add_circle</span>
            </div>
          </div>
          <div className="bg-surface-white border border-outline-variant rounded-xl shadow-sm overflow-hidden">
            <div className="p-md border-b border-outline-variant flex flex-col md:flex-row md:items-center justify-between gap-md">
              <div className="relative max-w-md w-full">
                <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-outline">search</span>
                <input className="w-full pl-lg pr-md py-sm bg-surface rounded-lg border border-outline-variant focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent font-body-md text-body-md" placeholder="Search by Reference No. or Service Type..." type="text"/>
              </div>
              <div className="flex items-center gap-sm">
                <button className="flex items-center gap-xs px-md py-sm border border-outline-variant rounded-lg hover:bg-surface transition-colors font-label-lg text-label-lg">
                  <span className="material-symbols-outlined text-[20px]">filter_list</span>
                  Filter
                </button>
                <button className="flex items-center gap-xs px-md py-sm border border-outline-variant rounded-lg hover:bg-surface transition-colors font-label-lg text-label-lg">
                  <span className="material-symbols-outlined text-[20px]">download</span>
                  Export
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low border-b border-outline-variant">
                    <th className="px-md py-sm font-label-lg text-label-lg text-secondary">Reference No.</th>
                    <th className="px-md py-sm font-label-lg text-label-lg text-secondary">Service Type</th>
                    <th className="px-md py-sm font-label-lg text-label-lg text-secondary">Date Submitted</th>
                    <th className="px-md py-sm font-label-lg text-label-lg text-secondary">Current Status</th>
                    <th className="px-md py-sm font-label-lg text-label-lg text-secondary">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant">
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="px-md py-md font-body-md text-body-md font-bold text-primary">SPF-2024-8831</td>
                    <td className="px-md py-md font-body-md text-body-md">Police Heritage Centre Visit</td>
                    <td className="px-md py-md font-body-md text-body-md">14 Oct 2024</td>
                    <td className="px-md py-md">
                      <span className="status-pill bg-secondary-container text-on-secondary-container">
                        <span className="material-symbols-outlined text-[16px]">schedule</span>
                        Pending
                      </span>
                    </td>
                    <td className="px-md py-md">
                      <button className="text-primary hover:underline font-label-md text-label-md font-bold">View Details</button>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="px-md py-md font-body-md text-body-md font-bold text-primary">SPF-2024-7720</td>
                    <td className="px-md py-md font-body-md text-body-md">Application for Public Entertainment License</td>
                    <td className="px-md py-md font-body-md text-body-md">09 Oct 2024</td>
                    <td className="px-md py-md">
                      <span className="status-pill bg-error-container text-on-error-container">
                        <span className="material-symbols-outlined text-[16px]">warning</span>
                        Action Required
                      </span>
                    </td>
                    <td className="px-md py-md">
                      <button className="bg-primary text-white px-sm py-xs rounded font-label-md text-label-md font-bold hover:opacity-90">Review Now</button>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="px-md py-md font-body-md text-body-md font-bold text-primary">SPF-2024-5541</td>
                    <td className="px-md py-md font-body-md text-body-md">Certified True Copy of Police Report</td>
                    <td className="px-md py-md font-body-md text-body-md">01 Oct 2024</td>
                    <td className="px-md py-md">
                      <span className="status-pill bg-green-100 text-status-success">
                        <span className="material-symbols-outlined text-[16px]">check_circle</span>
                        Completed
                      </span>
                    </td>
                    <td className="px-md py-md">
                      <button className="text-secondary hover:text-primary font-label-md text-label-md font-bold flex items-center gap-xs">
                        <span className="material-symbols-outlined text-[18px]">download</span>
                        Download
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="px-md py-md font-body-md text-body-md font-bold text-primary">SPF-2024-4412</td>
                    <td className="px-md py-md font-body-md text-body-md">Secondhand Goods Dealer License</td>
                    <td className="px-md py-md font-body-md text-body-md">28 Sep 2024</td>
                    <td className="px-md py-md">
                      <span className="status-pill bg-green-100 text-status-success">
                        <span className="material-symbols-outlined text-[16px]">check_circle</span>
                        Completed
                      </span>
                    </td>
                    <td className="px-md py-md">
                      <button className="text-primary hover:underline font-label-md text-label-md font-bold">View Archive</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-md border-t border-outline-variant flex items-center justify-between">
              <p className="font-body-sm text-body-sm text-secondary">Showing 1 to 4 of 15 records</p>
              <div className="flex items-center gap-xs">
                <button className="w-8 h-8 flex items-center justify-center border border-outline-variant rounded hover:bg-surface disabled:opacity-50" disabled>
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center bg-primary text-white rounded font-label-md">1</button>
                <button className="w-8 h-8 flex items-center justify-center border border-outline-variant rounded hover:bg-surface font-label-md">2</button>
                <button className="w-8 h-8 flex items-center justify-center border border-outline-variant rounded hover:bg-surface font-label-md">3</button>
                <button className="w-8 h-8 flex items-center justify-center border border-outline-variant rounded hover:bg-surface">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-lg p-lg bg-surface-container-low rounded-xl border border-outline-variant flex flex-col md:flex-row gap-lg items-center">
            <div className="w-full md:w-1/3">
              <img alt="Customer Service Help" className="rounded-lg shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWsHSGZ2IhA0gr7uK304eDT1eopjcvGqOrRbDoxO7xvweXY-pjRpUlt95b_XZaIE4NxODJFvBCWBzussL6DXZqif7jJs3MMLUYRZiyA9r_OFzvopFnzifktvy8ymkV9ATxo8EBppuZwPvzqJTvrLq2I_7BUY-QEHSlltG9M5hxKkm0mIurNGK-qvD3LHkZ6my2odT96i--V_aulVsgSaEG2omgYwZq_vWJ8pEGIJG2oB8NwxQBoBi4ig5XkE05buQHPMyhaUH8x_fV"/>
            </div>
            <div className="flex-grow">
              <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">Need help tracking your application?</h3>
              <p className="font-body-md text-body-md text-secondary mb-md max-w-xl">
                If your reference number is not appearing, please wait up to 24 hours for system synchronization. For urgent inquiries, our virtual assistant is available 24/7.
              </p>
              <div className="flex flex-wrap gap-md">
                <button className="flex items-center gap-xs text-primary font-bold hover:underline">
                  <span className="material-symbols-outlined">chat</span>
                  Chat with SPF Bot
                </button>
                <button className="flex items-center gap-xs text-primary font-bold hover:underline">
                  <span className="material-symbols-outlined">description</span>
                  FAQ: Application Processes
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
