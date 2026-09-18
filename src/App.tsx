import { Sidebar } from './components/Sidebar';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { ThemeToggle } from './components/ThemeToggle';

function App() {
  return (
    <>
      <ThemeToggle />
      <div className="resume-container">
        {/* Left Pane: Sticky Sidebar */}
        <div>
          <Sidebar />
        </div>

        {/* Right Pane: Scrollable Content */}
        <main className="scroll-pane" style={{ paddingBottom: '4rem' }}>
          <Experience />
          <Projects />
        </main>
      </div>
    </>
  );
}

export default App;
