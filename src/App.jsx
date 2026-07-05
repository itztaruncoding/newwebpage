import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';
// Import Pages
import Home from '@/pages/Home';
import Deals from '@/pages/Deals';
import Categories from '@/pages/Categories';
import Reviews from '@/pages/Reviews';
import FAQ from '@/pages/FAQ';
import DealDetail from '@/pages/DealDetail';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import Tools from '@/pages/Tools';
const queryClient = new QueryClient();
function Router() {
  return <Switch>{<Route path="/" component={Home} />}{<Route path="/deals" component={Deals} />}{<Route path="/tools" component={Tools} />}{<Route path="/categories" component={Categories} />}{<Route path="/reviews" component={Reviews} />}{<Route path="/faq" component={FAQ} />}{<Route path="/deal/:id" component={DealDetail} />}{<Route path="/blog" component={Blog} />}{<Route path="/blog/:id" component={BlogPost} />}{<Route component={NotFound} />}</Switch>;
}
function App() {
  return <QueryClientProvider client={queryClient}>{<TooltipProvider>{<WouterRouter base="">{<Router />}</WouterRouter>}{<Toaster />}</TooltipProvider>}</QueryClientProvider>;
}
export default App;