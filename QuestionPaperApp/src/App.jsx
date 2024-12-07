import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useParams, useLocation } from 'react-router-dom';
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';

// Import components
import HomeScreen from './components/HomeScreen';
import ClerkLogin from './components/ClerkLogin';
import ProfileScreen from './components/ProfileScreen';
import QuestionPaperViewer from './components/QuestionPaperViewer';
import StudyMaterials from './components/StudyMaterials';
import QuestionPapers from './components/QuestionPapers';
import ExamPreparation from './components/ExamPreparation';
import Loader from './components/Loader';
import Footer from './components/Footer';
import ProblemSolving from './components/ProblemSolving';
import CodingPractice from './components/CodingPractice';
import DoubtSolver from './components/DoubtSolver';
import MockTests from './components/MockTests';
import GateMathTest from './components/GateMathTest';
import CommonHeader from './components/CommonHeader';
import TestInterface from './components/TestInterface';
import TestResults from './components/TestResults';
import CsFundamentalsTest from './components/CsFundamentalsTest';
import AptitudeTest from './components/AptitudeTest';
import TopicContentViewer from './components/TopicContentViewer';
import TopicDocumentation from './components/TopicDocumentation';

// Import new course pages
import JavaScriptCoursePage from './pages/JavaScriptCoursePage';
import JavaCoursePage from './pages/JavaCoursePage';
import ReactCoursePage from './pages/ReactCoursePage';

// Import data
import csFundamentalsQuestions from './data/csFundamentalsQuestions';
import { mathQuestions } from './data/gateQuestions';
import aptitudeQuestions from './data/aptitudeQuestions';

// Wrapper component to handle route parameters
const QuestionPaperViewerWrapper = () => {
  const { questionId } = useParams();
  const location = useLocation();

  // Find the specific question
  const question = mathQuestions.find(q => q.id === parseInt(questionId));

  if (!question) {
    return <Navigate to="/mock-tests" replace />;
  }

  return <QuestionPaperViewer question={question} />;
};

// Header wrapper component to conditionally render header
const HeaderWrapper = () => {
  const location = useLocation();
  const noHeaderRoutes = ['/test-interface', '/test-results'];
  
  if (noHeaderRoutes.some(route => location.pathname.startsWith(route))) {
    return null;
  }
  
  return <CommonHeader />;
};

// Footer wrapper component to conditionally render footer
const FooterWrapper = () => {
  const location = useLocation();
  const noFooterRoutes = [
    '/test-interface', 
    '/test-results', 
    '/topic-content/',  
    '/study-materials/topic/'  
  ];
  
  // Check if current path starts with any no-footer route
  const shouldHideFooter = noFooterRoutes.some(route => 
    location.pathname.startsWith(route)
  );
  
  if (shouldHideFooter) {
    return null;
  }
  
  return <Footer />;
};

function App() {
  return (
    <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
      <BrowserRouter>
        <div className="page-container">
          <HeaderWrapper />
          <main className="content-wrapper">
            <Routes>
              {/* Public Routes */}
              <Route path="/login" element={<ClerkLogin />} />
              <Route path="/loading" element={<Loader />} />
              
              {/* Protected Routes */}
              <Route 
                path="/" 
                element={
                  <>
                    <SignedIn>
                      <HomeScreen />
                    </SignedIn>
                    <SignedOut>
                      <RedirectToSignIn />
                    </SignedOut>
                  </>
                } 
              />
              
              <Route 
                path="/profile" 
                element={
                  <>
                    <SignedIn>
                      <ProfileScreen />
                    </SignedIn>
                    <SignedOut>
                      <RedirectToSignIn />
                    </SignedOut>
                  </>
                } 
              />
              
              <Route 
                path="/study-materials" 
                element={
                  <>
                    <SignedIn>
                      <StudyMaterials />
                    </SignedIn>
                    <SignedOut>
                      <RedirectToSignIn />
                    </SignedOut>
                  </>
                } 
              />
              
              <Route 
                path="/question-papers" 
                element={
                  <>
                    <SignedIn>
                      <QuestionPapers />
                    </SignedIn>
                    <SignedOut>
                      <RedirectToSignIn />
                    </SignedOut>
                  </>
                } 
              />
              
              <Route 
                path="/papers/:branch/:year" 
                element={
                  <>
                    <SignedIn>
                      <QuestionPaperViewerWrapper />
                    </SignedIn>
                    <SignedOut>
                      <RedirectToSignIn />
                    </SignedOut>
                  </>
                } 
              />
              
              <Route 
                path="/exam-prep" 
                element={
                  <>
                    <SignedIn>
                      <ExamPreparation />
                    </SignedIn>
                    <SignedOut>
                      <RedirectToSignIn />
                    </SignedOut>
                  </>
                } 
              />
              
              <Route 
                path="/problem-solving" 
                element={
                  <>
                    <SignedIn>
                      <ProblemSolving />
                    </SignedIn>
                    <SignedOut>
                      <RedirectToSignIn />
                    </SignedOut>
                  </>
                } 
              />
              
              <Route 
                path="/coding-practice" 
                element={
                  <>
                    <SignedIn>
                      <CodingPractice />
                    </SignedIn>
                    <SignedOut>
                      <RedirectToSignIn />
                    </SignedOut>
                  </>
                } 
              />
              
              <Route 
                path="/doubt-solver" 
                element={
                  <>
                    <SignedIn>
                      <DoubtSolver />
                    </SignedIn>
                    <SignedOut>
                      <RedirectToSignIn />
                    </SignedOut>
                  </>
                } 
              />
              
              <Route 
                path="/mock-tests" 
                element={
                  <>
                    <SignedIn>
                      <MockTests />
                    </SignedIn>
                    <SignedOut>
                      <RedirectToSignIn />
                    </SignedOut>
                  </>
                } 
              />
              
              <Route 
                path="/gate-math-test" 
                element={
                  <>
                    <SignedIn>
                      <GateMathTest />
                    </SignedIn>
                    <SignedOut>
                      <RedirectToSignIn />
                    </SignedOut>
                  </>
                } 
              />
              
              <Route 
                path="/cs-fundamentals-test" 
                element={
                  <>
                    <SignedIn>
                      <CsFundamentalsTest />
                    </SignedIn>
                    <SignedOut>
                      <RedirectToSignIn />
                    </SignedOut>
                  </>
                } 
              />
              
              <Route 
                path="/aptitude-test" 
                element={
                  <>
                    <SignedIn>
                      <AptitudeTest />
                    </SignedIn>
                    <SignedOut>
                      <RedirectToSignIn />
                    </SignedOut>
                  </>
                } 
              />
              
              <Route 
                path="/test/aptitude-concepts" 
                element={
                  <>
                    <SignedIn>
                      <AptitudeTest />
                    </SignedIn>
                    <SignedOut>
                      <RedirectToSignIn />
                    </SignedOut>
                  </>
                } 
              />
              
              <Route 
                path="/test-interface" 
                element={
                  <>
                    <SignedIn>
                      <TestInterface />
                    </SignedIn>
                    <SignedOut>
                      <RedirectToSignIn />
                    </SignedOut>
                  </>
                } 
              />
              
              <Route 
                path="/test-results" 
                element={
                  <>
                    <SignedIn>
                      <TestResults />
                    </SignedIn>
                    <SignedOut>
                      <RedirectToSignIn />
                    </SignedOut>
                  </>
                } 
              />
              
              <Route 
                path="/topic-content/:topicCategory/:topicName" 
                element={
                  <>
                    <SignedIn>
                      <TopicContentViewer />
                    </SignedIn>
                    <SignedOut>
                      <RedirectToSignIn />
                    </SignedOut>
                  </>
                } 
              />
              
              <Route 
                path="/topic/:topicCategory/:topicName" 
                element={
                  <>
                    <SignedIn>
                      <TopicDocumentation />
                    </SignedIn>
                    <SignedOut>
                      <RedirectToSignIn />
                    </SignedOut>
                  </>
                } 
              />
              
              <Route path="/course/javascript" element={<JavaScriptCoursePage />} />
              <Route path="/course/java" element={<JavaCoursePage />} />
              <Route path="/course/react" element={<ReactCoursePage />} />
              
              {/* Catch-all route */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <FooterWrapper />
        </div>
      </BrowserRouter>
    </ClerkProvider>
  );
}

export default App;
