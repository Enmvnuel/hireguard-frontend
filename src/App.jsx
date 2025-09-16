import Header from "./pages/LandingPage/Header.jsx";
import Footer from "./pages/LandingPage/Footer.jsx";
import ErrorBoundary from "./common/ErrorBoundary.jsx";

/**
 * Main App component with error boundary
 */
function App() {
    return (
        <ErrorBoundary>
            <div className="selection:bg-gray-500 selection:text-white">
                <Header />
                <Footer />
            </div>
        </ErrorBoundary>
    );
}

export default App;
