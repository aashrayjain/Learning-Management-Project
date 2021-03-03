import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignCourseToUserComponent } from './components/assign-course-to-user/assign-course-to-user.component';
import { AddCoursesComponent } from './components/add-courses/add-courses.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { FeaturesComponent } from './components/features/features.component';
import { CompanyComponent } from './components/company/company.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
<<<<<<< HEAD
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
=======
import { UsersComponent } from './components/users/users.component';
import { CreditLogsComponent } from './components/credit-logs/credit-logs.component';
>>>>>>> d6e231f5b0f0e8443a00fa0ab24977a86f272168

const routes: Routes = [
  { path: 'assign/:user', component: AssignCourseToUserComponent },
  { path: 'addCourses', component: AddCoursesComponent },
  { path: 'showAllCourses', component: DataTableComponent },
  { path: 'login', component: LoginComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'dashboard', component: DashboardComponent },
<<<<<<< HEAD
  { path: 'userdashboard', component: UserdashboardComponent },
=======
  { path: 'users', component: UsersComponent },
  { path: 'credit', component: CreditLogsComponent },
>>>>>>> d6e231f5b0f0e8443a00fa0ab24977a86f272168
  { path: '', redirectTo: '/login', pathMatch: 'full'  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
