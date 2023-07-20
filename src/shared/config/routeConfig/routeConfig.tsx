import { ContactsPage } from "pages/Contacts"
import { MainPage } from "pages/Main"
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
  MAIN = 'main',
  CONTACTS = 'contacts'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.CONTACTS]: '/contacts'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [AppRoutes.CONTACTS]: {
    path: RoutePath.contacts,
    element: <ContactsPage />
  }
}