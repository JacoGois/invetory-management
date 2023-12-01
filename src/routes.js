import { Financial } from "./pages/Financial";
import { Laboratory } from "./pages/Laboratory";
import { LoginLayout } from "./pages/LoginLayout";
import { Products } from "./pages/Products";
import { SignIn } from "./pages/SignIn";
import { Students } from "./pages/Students";
import { Demanded } from "./pages/Demanded";

export const routes = [
  { path: '/', pageComponent: SignIn, isPublic: true, layoutComponent: LoginLayout   },
  { path: '/sign-in', pageComponent: SignIn, isPublic: true, layoutComponent: LoginLayout },
  { path: '/products', pageComponent: Products, isPublic: true },
  { path: '/students', pageComponent: Students, isPublic: true },
  { path: '/financial', pageComponent: Financial, isPublic: true },
  { path: '/laboratories', pageComponent: Laboratory, isPublic: true },
  { path: '/demanded', pageComponent: Demanded, isPublic: true },
]
