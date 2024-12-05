import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
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
import CommonHeader from './components/CommonHeader';

// Wrapper component to handle route parameters
const QuestionPaperViewerWrapper = () => {
  const { branch, year } = useParams();
  
  return (
    <QuestionPaperViewer 
      branch={branch ? branch.replace('-', ' ') : ''} 
      year={year || ''} 
    />
  );
};

function App() {
  return (
    <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <CommonHeader />
          <main className="flex-grow">
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
              
              {/* Catch-all route */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ClerkProvider>
  );
}

export default App;
