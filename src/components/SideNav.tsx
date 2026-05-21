export default function SideNav() {
  return (
    <aside className="h-screen w-64 fixed left-0 top-0 bg-surface dark:bg-tertiary-container border-r border-outline-variant flex flex-col p-md z-50">
      <div className="mb-lg">
        <h1 className="font-headline-sm text-headline-sm font-bold text-primary">One Front Door</h1>
        <p className="font-label-md text-label-md text-secondary opacity-70">Official SPF e-Services</p>
      </div>
      <button className="mb-lg w-full bg-primary-container text-white py-sm px-md rounded-lg font-label-lg flex items-center justify-center gap-xs hover:opacity-90 transition-all shadow-sm">
        <span className="material-symbols-outlined text-[20px]">add</span>
        Start New Application
      </button>
      <nav className="flex-grow space-y-xs">
        <a href="#" className="flex items-center gap-sm p-sm bg-secondary-container text-on-secondary-container font-bold rounded-lg transition-all">
          <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
          <span className="font-body-md text-body-md">Dashboard</span>
        </a>
        <a href="#" className="flex items-center gap-sm p-sm text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all">
          <span className="material-symbols-outlined" data-icon="description">description</span>
          <span className="font-body-md text-body-md">Apply</span>
        </a>
        <a href="#" className="flex items-center gap-sm p-sm text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all">
          <span className="material-symbols-outlined" data-icon="report_problem">report_problem</span>
          <span className="font-body-md text-body-md">Report</span>
        </a>
        <a href="#" className="flex items-center gap-sm p-sm text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all">
          <span className="material-symbols-outlined" data-icon="upload_file">upload_file</span>
          <span className="font-body-md text-body-md">Submit</span>
        </a>
        <a href="#" className="flex items-center gap-sm p-sm text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all">
          <span className="material-symbols-outlined" data-icon="fact_check">fact_check</span>
          <span className="font-body-md text-body-md">Check Status</span>
        </a>
      </nav>
      <div className="mt-auto border-t border-outline-variant pt-md space-y-xs">
        <a href="#" className="flex items-center gap-sm p-sm text-on-surface-variant hover:bg-surface-container transition-all">
          <span className="material-symbols-outlined" data-icon="help">help</span>
          <span className="font-body-md text-body-md">Help Center</span>
        </a>
        <a href="#" className="flex items-center gap-sm p-sm text-on-surface-variant hover:bg-surface-container transition-all">
          <span className="material-symbols-outlined" data-icon="settings">settings</span>
          <span className="font-body-md text-body-md">Settings</span>
        </a>
      </div>
    </aside>
  );
}
