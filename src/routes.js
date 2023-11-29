import { Financial } from "./pages/Financial";
import { LoginLayout } from "./pages/LoginLayout";
import { Products } from "./pages/Products";
import { SignIn } from "./pages/SignIn";
import { Students } from "./pages/Students";

export const routes = [
  { path: '/', pageComponent: SignIn, isPublic: true, layoutComponent: LoginLayout   },
  { path: '/sign-in', pageComponent: SignIn, isPublic: true, layoutComponent: LoginLayout },
  { path: '/products', pageComponent: Products, isPublic: true },
  { path: '/students', pageComponent: Students, isPublic: true },
  { path: '/financial', pageComponent: Financial, isPublic: true },
]
