export default function Footer() {
  return (
    <footer className="bg-primary dark:bg-tertiary w-full py-lg mt-xl flex flex-col items-center justify-center space-y-base">
      <div className="flex flex-wrap justify-center gap-lg mb-md">
        <a className="text-outline-variant font-label-md text-label-md hover:text-white transition-colors" href="#">Privacy Statement</a>
        <a className="text-outline-variant font-label-md text-label-md hover:text-white transition-colors" href="#">Terms of Use</a>
        <a className="text-outline-variant font-label-md text-label-md hover:text-white transition-colors" href="#">Rate our Service</a>
        <a className="text-outline-variant font-label-md text-label-md hover:text-white transition-colors" href="#">Contact Us</a>
      </div>
      <div className="text-center">
        <p className="font-label-lg text-label-lg font-bold text-on-primary mb-xs">Singapore Police Force</p>
        <p className="text-outline-variant font-label-md text-label-md">© 2024 Singapore Police Force. All rights reserved.</p>
      </div>
    </footer>
  );
}
