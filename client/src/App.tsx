import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import ConsultationWidget from "./components/ConsultationWidget";
import Home from "./pages/Home";
import K12Public from "./pages/programs/K12Public";
import K12International from "./pages/programs/K12International";
import Undergraduate from "./pages/programs/Undergraduate";
import Postgraduate from "./pages/programs/Postgraduate";
import Language from "./pages/programs/Language";
import Professional from "./pages/programs/Professional";
import ZhangWeiStory from "./pages/success-stories/ZhangWei";
import MariaSantosStory from "./pages/success-stories/MariaSantos";
import RajPatelStory from "./pages/success-stories/RajPatel";
import ZixianStory from "./pages/success-stories/Zixian";
import LiYishanStory from "./pages/success-stories/LiYishan";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/programs/k12-public"} component={K12Public} />
      <Route path={"/programs/k12-international"} component={K12International} />
      <Route path={"/programs/undergraduate"} component={Undergraduate} />
      <Route path={"/programs/postgraduate"} component={Postgraduate} />
      <Route path={"/programs/language"} component={Language} />
      <Route path={"/programs/professional"} component={Professional} />
      <Route path={"/success-stories/zhang-wei"} component={ZhangWeiStory} />
      <Route path={"/success-stories/maria-santos"} component={MariaSantosStory} />
      <Route path={"/success-stories/raj-patel"} component={RajPatelStory} />
      <Route path={"/success-stories/zixian"} component={ZixianStory} />
      <Route path={"/success-stories/li-yishan"} component={LiYishanStory} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
            <ConsultationWidget />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
