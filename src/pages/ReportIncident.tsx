import Header from "../components/Header";
import SideNav from "../components/SideNav";
import Footer from "../components/Footer";

export default function ReportIncident() {
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
                <li><span className="text-primary font-label-md text-label-md font-bold">Report Incident</span></li>
              </ol>
            </nav>
            <h1 className="font-headline-lg text-headline-lg text-primary mb-xs">Report a Non-Emergency Incident</h1>
            <p className="font-body-md text-body-md text-secondary max-w-2xl">Submit a report for non-urgent incidents such as lost property, non-injury traffic accidents, or minor theft. For emergencies, please dial 999 immediately.</p>
          </div>

          <div className="grid grid-cols-12 gap-lg">
            <div className="col-span-12 md:col-span-8">
              <div className="bg-surface-white border border-outline-variant rounded-xl shadow-sm">
                <div className="p-md border-b border-outline-variant">
                  <h2 className="font-headline-md text-headline-md text-primary">Incident Details</h2>
                  <p className="font-body-sm text-body-sm text-secondary">Please provide as much information as possible.</p>
                </div>
                <form className="p-md space-y-md">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                    <div>
                      <label className="font-label-lg text-label-lg text-primary mb-xs inline-block" htmlFor="incident-type">Type of Incident</label>
                      <select className="w-full p-sm border border-outline-variant rounded-lg bg-surface focus:outline-none focus:ring-2 focus:ring-primary" id="incident-type">
                        <option>Select an incident type</option>
                        <option>Lost & Found Item</option>
                        <option>Minor Traffic Accident (Non-Injury)</option>
                        <option>Theft / Shoplifting (Under $1000)</option>
                        <option>Noise Complaint</option>
                        <option>Vandalism</option>
                      </select>
                    </div>
                    <div>
                      <label className="font-label-lg text-label-lg text-primary mb-xs inline-block" htmlFor="location">Location of Incident</label>
                      <input className="w-full p-sm border border-outline-variant rounded-lg bg-surface focus:outline-none focus:ring-2 focus:ring-primary" id="location" placeholder="e.g. Block 123, Orchard Road" type="text"/>
                    </div>
                  </div>
                  <div>
                    <label className="font-label-lg text-label-lg text-primary mb-xs inline-block" htmlFor="description">Detailed Description</label>
                    <textarea className="w-full p-sm border border-outline-variant rounded-lg bg-surface focus:outline-none focus:ring-2 focus:ring-primary" id="description" placeholder="Describe what happened, including dates, times, and involved parties." rows={5}></textarea>
                  </div>
                  <div>
                    <label className="font-label-lg text-label-lg text-primary mb-xs inline-block">Upload Evidence (Optional)</label>
                    <div className="border-2 border-dashed border-outline-variant rounded-lg p-lg text-center bg-surface-container-low hover:border-primary transition-colors cursor-pointer">
                      <span className="material-symbols-outlined text-[48px] text-outline">upload_file</span>
                      <p className="font-body-md text-body-md text-secondary mt-sm">Drag & drop files or <span className="text-primary font-bold">browse</span></p>
                      <p className="font-label-md text-label-md text-secondary mt-xs">Supports: JPG, PNG, PDF, MP4 (Max 50MB)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-sm bg-secondary-container p-md rounded-lg">
                    <span className="material-symbols-outlined text-on-secondary-container">privacy_tip</span>
                    <p className="font-body-sm text-body-sm text-on-secondary-container">The information you provide is protected under the Official Secrets Act. Submitting a false report is a serious offence.</p>
                  </div>
                  <div className="pt-md border-t border-outline-variant flex items-center justify-end gap-md">
                    <button className="font-label-lg text-label-lg text-primary hover:bg-surface px-md py-sm rounded-lg transition-colors" type="button">Cancel</button>
                    <button className="font-label-lg text-label-lg bg-primary text-white px-md py-sm rounded-lg hover:bg-opacity-90 transition-colors flex items-center gap-xs" type="submit">
                      Submit Report <span className="material-symbols-outlined">send</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 space-y-lg">
              <div className="bg-surface-white border border-outline-variant rounded-xl shadow-sm p-md">
                <h3 className="font-headline-sm text-headline-sm text-primary mb-md">Reporting Guide</h3>
                <ul className="space-y-md">
                  <li className="flex gap-sm items-start">
                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                    <div>
                      <h4 className="font-label-lg text-label-lg text-primary">Be Clear & Concise</h4>
                      <p className="font-body-sm text-body-sm text-secondary">Provide factual details. Avoid assumptions.</p>
                    </div>
                  </li>
                  <li className="flex gap-sm items-start">
                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                    <div>
                      <h4 className="font-label-lg text-label-lg text-primary">Include Key Details</h4>
                      <p className="font-body-sm text-body-sm text-secondary">Who, what, when, where, and how.</p>
                    </div>
                  </li>
                  <li className="flex gap-sm items-start">
                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                    <div>
                      <h4 className="font-label-lg text-label-lg text-primary">Attach Evidence</h4>
                      <p className="font-body-sm text-body-sm text-secondary">Photos, videos or documents can help.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-error-container p-md rounded-xl border border-status-error">
                <div className="flex items-center gap-sm mb-sm">
                  <span className="material-symbols-outlined text-status-error text-[32px]">emergency</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-error-container">Is this an Emergency?</h3>
                </div>
                <p className="font-body-md text-body-md text-on-error-container mb-md">If you or someone else is in immediate danger, or if a serious crime is in progress, do not use this form.</p>
                <button className="w-full bg-status-error text-white font-bold py-sm rounded-lg flex items-center justify-center gap-sm hover:bg-opacity-90 transition-colors">
                  <span className="material-symbols-outlined">call</span> Call 999 Now
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
