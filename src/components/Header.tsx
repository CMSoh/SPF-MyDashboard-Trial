export default function Header() {
  return (
    <header className="w-full top-0 sticky z-40 bg-surface-white border-b border-outline-variant bg-opacity-95 backdrop-blur-md">
      <div className="flex justify-between items-center h-16 px-gutter max-w-container-max mx-auto">
        <div className="flex items-center gap-lg">
          <span className="font-headline-md text-headline-md font-bold text-primary">MyDashboard</span>
          <nav className="hidden md:flex gap-md">
            <a href="#" className="text-secondary hover:text-primary-fixed-dim transition-colors font-label-lg text-label-lg">Services</a>
            <a href="#" className="text-secondary hover:text-primary-fixed-dim transition-colors font-label-lg text-label-lg">Status</a>
            <a href="#" className="text-secondary hover:text-primary-fixed-dim transition-colors font-label-lg text-label-lg">Resources</a>
            <a href="#" className="text-secondary hover:text-primary-fixed-dim transition-colors font-label-lg text-label-lg">Support</a>
          </nav>
        </div>
        <div className="flex items-center gap-md">
          <div className="relative group">
            <input className="bg-surface-container-low border-none rounded-full px-md py-xs text-sm w-64 focus:ring-2 focus:ring-primary-container transition-all" placeholder="Search services..." type="text"/>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline" data-icon="search">search</span>
          </div>
          <div className="flex items-center gap-sm text-primary">
            <button className="p-xs hover:bg-surface-container rounded-full transition-all">
              <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
            </button>
            <div className="h-8 w-px bg-outline-variant"></div>
            <button className="flex items-center gap-xs p-xs hover:bg-surface-container rounded-lg transition-all">
              <img alt="User Profile Avatar" className="h-8 w-8 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAu2G9GKyaom3tU7-DDgpgh5VbXhDuopIl-0FEp4crYpR2YuknI2iJpWfwScTgvWIco95McCMH9FO1f9w92Xay4aHtZXQ4uxx2QLxOF-SVrMSpCIh3b_qzdqnqt1LY2rsHwjjPgcbaWphuDMcitUdoKxHHLNodAKE_DE-BJJ7eoUxKqKOTDRG_eh4y1P7_5PNLY7mh-dolGdSLpnuuw2Eg82ApEFbHyj_q-r4hKSFPCRyIZFxneKcgFo6dM5X9bq0H5wDX66N4ztArY"/>
              <span className="font-label-lg text-label-lg hidden lg:inline">John Doe</span>
            </button>
            <button className="text-secondary font-label-lg hover:text-error transition-colors">Logout</button>
          </div>
        </div>
      </div>
    </header>
  );
}
